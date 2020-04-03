import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './groceries/groceries-list.component';
import { CheckCircleComponent} from '../shared/check-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    CheckCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
