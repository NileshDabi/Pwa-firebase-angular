import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private builder:FormBuilder, 
    private http:HttpClient, 
    private router:Router,
    private toastr:ToastrService) { }

    userForm: FormGroup;

    ngOnInit() {
      this.userForm = this.builder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required]],
      })
    }
    submit(form){
      this.http.post('http://localhost:3000/user/reset-password',this.userForm.value).subscribe( (res:any) => {
        if(res){
          // localStorage.setItem('userInfo',res.token);
          this.toastr.success('Password', 'Successfully Password reseted');
          this.router.navigateByUrl('login');
        };
      }, err => {
        console.log(err)
        this.toastr.danger('Password',err.error.message)
      });
    }
}
