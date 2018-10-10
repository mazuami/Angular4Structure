import {NgModule} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {myComponent } from './my.component';
import {homeComponent} from './home.controller';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
    imports: [BrowserModule,HttpModule,FormsModule],
    declarations: [myComponent,homeComponent],
    bootstrap: [myComponent]
})

export class AppModule{

}