import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AddStudentComponent } from "./pages/add-student/add-student.component";
import { ReportComponent } from "./pages/report/report.component";
const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "report", component: ReportComponent },
  { path: "addStudent", component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
