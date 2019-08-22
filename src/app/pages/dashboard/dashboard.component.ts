import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData:any = '';
  data:any = [];
  loading = false;
  token:any;
  constructor(private http:HttpClient,private router:Router) { }

  setHeaders():any{
    this.token = localStorage.getItem('userInfo');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ this.token
      })
    };
    return httpOptions
  }

  ngOnInit() {
    let data
    this.http.post('http://localhost:3000/user',data,this.setHeaders()).subscribe( (data:any) => {
      this.data = data;
      this.loading = false;
    }, 
    err => {
      console.log(err);
    });
  }

  logout(){
    localStorage.removeItem('userInfo');
    this.router.navigateByUrl('');
  }
  

  settings = {
    actions: false,
    // actions: {
    //   add: true,
    //   edit:false
    //   },
    columns: {
      // _id: {
      //   title: 'ID'
      // },
      // name: {
      //   title: 'Full Name',
      //   width: '10%'
      // },
      // phone_number: {
      //   title: 'Phone Number',
      //   width: '20%'
      // }
      email: {
        title: 'Email',
        width: '10%'
      },
      password: {
        title: 'Password',
        width: '10%'
      }
    }
  };

}
