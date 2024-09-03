import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurstoryComponent } from './components/ourstory/ourstory.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'ourstory', component: OurstoryComponent },
  { path: '', component: FrontpageComponent},
  { path: 'create_account', component: CreateAccountComponent },
  { path: 'sign_in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
