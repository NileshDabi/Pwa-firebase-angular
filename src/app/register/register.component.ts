import { Component, HostBinding ,OnInit} from '@angular/core';
import { ToastrService } from '../services/toastr.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private builder: FormBuilder,
               private http: HttpClient,
               private toastrService: ToastrService,
               private router:Router,) { }

  private index: number = 0;
  @HostBinding('class')
  classes = 'example-items-rows';
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.builder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]] 
    })
  }

  submit(form){
    this.http.post('http://localhost:3000/user/signup',this.userForm.value).subscribe( (res:any) => {
      localStorage.setItem('userInfo',res.token);
      this.toastrService.success('Register', res.message);
      this.router.navigateByUrl('dashboard');
    }, err => {
      this.toastrService.danger('Register','Unable to Submit Your Query');
    });
    form.reset();
  }
}
