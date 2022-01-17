import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/apps/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'termsandcondition',
    loadChildren: () => import('../../components/apps/termsandcondition/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('../../components/apps/privacypolicy/email.module').then(m=>m.EmailModule)
  },
  {
    path: 'allRestaurants',
    loadChildren: () => import('../../components/apps/restaurants/file-manager.module').then(m=>m.FileManagerModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/apps/settings/bookmarks.module').then(m => m.BookmarksModule)
  }
];
