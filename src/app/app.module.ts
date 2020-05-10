import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

//Angular Specific
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

//Component Specifics
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { BagComponent } from './bag/bag.component';
import { ItemsComponent } from './items/items.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { RegisterComponent } from './register/register.component';
import { SkillsComponent } from './skills/skills.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharacterComponent,
    BagComponent,
    ItemsComponent,
    AccountComponent,
    LoginComponent,
    CharacterlistComponent,
    RegisterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,NgbModule,BrowserAnimationsModule,HttpClientModule,
    MatButtonModule,MatExpansionModule,MatFormFieldModule,MatCardModule,MatInputModule,MatTableModule,
    MatDividerModule,MatDialogModule,MatBottomSheetModule,MatSelectModule,MatSnackBarModule,
    FormsModule, ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,
    AppRoutingModule,ShowHidePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
