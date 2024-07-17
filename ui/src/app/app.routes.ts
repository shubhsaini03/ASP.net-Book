import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BookStoreComponent } from './books/book-store/book-store.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AllOrdersComponent } from './user/all-orders/all-orders.component';
import { ApproveRequestComponent } from './user/approve-request/approve-request.component';
import { ReturnBookComponent } from './books/return-book/return-book.component';
import { MaintenaceComponent } from './books/maintenace/maintenace.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { EditbookComponent } from './books/editbook/editbook.component';

export const routes: Routes = [

{
    path:"register",component:RegisterComponent
},
{
    path:"login",component:LoginComponent
},

{ path: 'home', component: BookStoreComponent },
{
    path:'view-users',component:ViewUserComponent
},
{ path: 'my-orders', component: UserOrdersComponent },
  { path: 'maintenance', component: MaintenaceComponent },
  { path: 'return-book', component: ReturnBookComponent },
  { path: 'approval-requests', component: ApproveRequestComponent },
  { path: 'all-orders', component: AllOrdersComponent },
  //{ path: "view-users", component: ViewUsersComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'editBook/:Id',component:EditbookComponent},
{
    path:"**",component:PageNotFoundComponent
},

];
