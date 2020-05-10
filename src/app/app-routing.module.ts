import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BagComponent } from './bag/bag.component';
import { CharacterComponent } from './character/character.component';
import { ItemsComponent } from './items/items.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from'./login/login.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  // { path: 'header', component: HeaderComponent},
  { path: 'bag', component: BagComponent},
  { path: 'login', component: LoginComponent},
  { path: 'characterslist', component: CharacterlistComponent},
  { path: 'character', component: CharacterComponent},
  { path: 'character/:name', component: CharacterComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'skills/:name', component: SkillsComponent},
  { path: 'items', component: ItemsComponent},
  { path: 'account', component: AccountComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
