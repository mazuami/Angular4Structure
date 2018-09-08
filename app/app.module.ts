import {NgModule} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {myComponent } from './my.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [myComponent],
    bootstrap: [myComponent]
})

export class AppModule{

}