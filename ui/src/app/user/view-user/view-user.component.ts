import { Component } from '@angular/core';
import { AccountStatus, User, UserType } from '../../models/models';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'view-users',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss',
})
export class ViewUserComponent {
  columns: string[] = [
    'userId',
    'userName',
    'email',
    'mobileNumber',
    'createdOn',
    'accountStatus',
    'unblock',
    'userType',
  ];
  users: User[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {
    apiService.getUsers().subscribe({
      next: (res: User[]) => {
        this.users = [];
        res.forEach((r) => this.users.push(r));
      },
    });
  }

  unblockUser(user: User) {
    var id = user.id;
    this.apiService.unblock(id).subscribe({
      next: (res) => {
        if (res === 'unblocked') {
          this.snackBar.open('User has been UNBLOCKED!', 'OK');
        } else this.snackBar.open('Not Unblocked', 'OK');
      },
    });
  }
}