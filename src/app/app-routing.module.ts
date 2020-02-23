import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontComponent} from './front/front.component';
import {PostLoginComponent} from './post-login/post-login.component';


const routes: Routes = [
  {path: '', component: FrontComponent},
  {path: 'home', component: PostLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
