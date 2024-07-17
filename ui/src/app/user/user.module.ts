import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { SharedModule } from '../shared/shared.module';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ApproveRequestComponent } from './approve-request/approve-request.component';
import { ProfileComponent } from './profile/profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';



@NgModule({
  declarations: [
    ViewUserComponent,
    AllOrdersComponent,
    ApproveRequestComponent,
    ProfileComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
