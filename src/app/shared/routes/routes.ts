import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../../components/apps/home/file-manager.module').then(m => m.FileManagerModule)
  },
  {
    path: 'forRent',
    loadChildren: () => import('../../components/apps/forrent/users.module').then(m => m.UsersModule)
  },
  {
    path: 'forBuy',
    loadChildren: () => import('../../components/apps/forbuy/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../../components/apps/about/gallery.module').then(m => m.GalleryDemoModule)
  },
  {
    path: 'news&articles',
    loadChildren: () => import('../../components/apps/newsarticle/learning.module').then(m => m.LearningModule)
  },
  {
    path: 'termsandcondition',
    loadChildren: () => import('../../components/apps/termsandcondition/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('../../components/apps/privacy/email.module').then(m => m.EmailModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('../../components/apps/contact us/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/apps/settings/bookmarks.module').then(m => m.BookmarksModule)
  }
];
