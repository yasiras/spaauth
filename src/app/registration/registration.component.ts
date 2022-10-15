import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform!:FormGroup

  constructor(private formbuider: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registrationform=this.formbuider.group({
      name:[''],
      email:[''],
      password:[''],
      confirmPassword:['']
    });
  }
  signup()
  {
    this.http.post<any>('  http://localhost:3000/user',this.registrationform.value).subscribe(res=>
      {
        alert()
      });
  }


}
