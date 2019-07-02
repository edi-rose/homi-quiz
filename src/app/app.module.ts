import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './pages/hello/hello.component';
import { QuestionOneComponent } from './pages/question-one/question-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    QuestionOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
