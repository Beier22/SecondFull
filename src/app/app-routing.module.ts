import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontComponent} from './front/front.component';
import {PostLoginComponent} from './post-login/post-login.component';
import {CreateComponent} from './user/create/create.component';


const routes: Routes = [
  {path: '', component: FrontComponent},
  {path: 'home', component: PostLoginComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
