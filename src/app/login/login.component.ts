import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userForm: FormGroup;
  token;

  constructor(private builder:FormBuilder, 
              private http:HttpClient, 
              private router:Router,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.userForm = this.builder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
    })

    this.token = localStorage.getItem('userInfo');
    let header = new HttpHeaders()
    header.append('Authorization','Bearer ' + this.token);
    this.http.get('',{ headers:header })
  }

  submit(form){
    this.http.post('http://localhost:3000/user/login',this.userForm.value).subscribe( (res:any) => {
      if(res.token){
        this.router.navigateByUrl('dashboard');
        localStorage.setItem('userInfo',res.token);
        console.log(res)
        this.toastr.success('Login', 'Successfully logged in');
      };
    }, err => {
      console.log(err)
      if(!err.error.message){
        this.toastr.danger('Login','Enable Backend to respond');
      }
      else{
        this.toastr.danger('Login',err.error.message)
      }
    });
  }
}
