import{Routes,RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import {NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
export const routes: Routes = [{
    path:'login', 
    component: LoginComponent
},
{
    path: 'pages',
    component: ThemeComponent,
    children: [
        {
            path: '',
            loadChildren:'./page/dashboard/dashboard.module#DashboardModule'
        }
    ]
}
]
@NgModule({
    imports :[RouterModule.forRoot(routes,{useHash:true})], 
    exports :[RouterModule],
    providers :[]

})
export class AppRoutingModule{}
