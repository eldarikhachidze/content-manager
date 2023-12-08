import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./features/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule)
      },
      {
        path: 'subscribers',
        loadChildren: () => import('./pages/subscribers/subscribers.module').then(m => m.SubscribersModule)
      },
      {
        path: 'event-subscribe',
        loadChildren: () => import('./pages/event-subscribe/event-subscribe.module').then(m => m.EventSubscribeModule)
      },
      {
        path: 'slider',
        loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
