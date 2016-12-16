import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }