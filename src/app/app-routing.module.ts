import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'alarms', 
    loadChildren: () => import('@alarms/alarms.module').then((m) => m.AlarmsModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
