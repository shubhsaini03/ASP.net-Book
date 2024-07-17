import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']  // Fix typo 'styleUrl' -> 'styleUrls'
})
export class RegisterComponent {
  registerForm: FormGroup;
  hidePwdContent: boolean = true;

  constructor(
    fb: FormBuilder,
    private apiService: ApiService,
    private matSnackBar: MatSnackBar
  ) {
    this.registerForm = fb.group({
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),  // Added email validator
      password: fb.control('', [Validators.required]),
      mobileNumber: fb.control('', [Validators.required]),
      rpassword: fb.control('', [Validators.required])
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this.matSnackBar.open("Please fill in all required fields correctly.", "OK", {
        duration: 3000,
        panelClass: ['custom-snack-bar']  // Apply custom class
      });
      return;
    }

    let user = {
      firstName: this.registerForm.get("firstName")?.value,
      lastName: this.registerForm.get("lastName")?.value,
      email: this.registerForm.get("email")?.value,
      mobileNumber: this.registerForm.get("mobileNumber")?.value,
      password: this.registerForm.get("password")?.value,
      rpassword: this.registerForm.get("rpassword")?.value,
    };

    this.apiService.Register(user).subscribe({
      next: (res) => {
        this.matSnackBar.open(res, "OK", {
          duration: 3000,
          panelClass: ['custom-snack-bar']  // Apply custom class
        });
      },
      error: (err) => {
        const errorMessage = err.error || 'Registration failed. Please try again.';
        this.matSnackBar.open(errorMessage, "OK", {
          duration: 3000,
          panelClass: ['custom-snack-bar']  // Apply custom class
        });
        console.error(err);  // Log the error for debugging
      }
    });
  }
}
