import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/firebase/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;

  constructor(public authService: AuthService, private fb: FormBuilder, private route:Router) {
      this.loginForm = this.fb.group({
        email: ['test@gmail.com', [Validators.required, Validators.email]],
        password: ['test123', Validators.required]
      });
  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    // this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']);
    if(this.loginForm.value['email'] == "test@gmail.com" && this.loginForm.value['password']=="test123"){
      this.route.navigate(['/dashboard']);
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Your crediential does not match',
        icon: 'error',
        confirmButtonText: 'Close',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return;
    }
  }

}
