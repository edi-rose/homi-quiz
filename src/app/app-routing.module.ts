import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { QuestionOneComponent } from './pages/question-one/question-one.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: '1', component: QuestionOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
