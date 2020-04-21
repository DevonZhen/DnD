import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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

//Component Specifics
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { BagComponent } from './bag/bag.component';
import { ItemsComponent } from './items/items.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';

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
    CharacterlistComponent
  ],
  imports: [
    BrowserModule,NgbModule,BrowserAnimationsModule,
    MatButtonModule,MatExpansionModule,MatFormFieldModule,MatCardModule,MatInputModule,MatTableModule,
    MatDividerModule,MatDialogModule,MatBottomSheetModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
