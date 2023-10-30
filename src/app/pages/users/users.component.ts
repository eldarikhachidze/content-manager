import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../core/services/users.service";
import {User} from "../../core/interfaces/user";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
    users: User[] = []

    sub$ = new Subject()

    constructor(
        private usersService: UsersService
    ) {
    }

    ngOnInit(): void {
        this.getUsers()
    }

    getUsers() {
        this.usersService.getUsers({})
            .pipe(takeUntil(this.sub$))
            .subscribe((response) => {
                this.users = response.data
                console.log(this.users)
            })
    }
    deleteItem(id: string) {
        this.usersService.deleteItem(id)
            .pipe()
            .subscribe(res => {
                this.getUsers()
            })
    }

    ngOnDestroy(): void {
        this.sub$.next(null)
        this.sub$.complete()
    }

}
