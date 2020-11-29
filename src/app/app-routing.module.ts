import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
    {path: 'home',component: TableComponent},
    {path: 'pokeDetail/:id', component: DetailComponent},
    {path: '' , pathMatch: 'full', redirectTo: 'home'},
    {path: '**' , pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }