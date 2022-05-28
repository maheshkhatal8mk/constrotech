import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myForm:any;
  public isSubmitted:boolean=false;
  public a:any;
  public b:any;

  constructor(private fb: FormBuilder, private share:DataService, private route:Router,) { }

  ngOnInit(): void {this.myForm = this.fb.group({
    userid:['',[Validators.required]],
    
    email:['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    pass:[''],
    cpass:['']
  })
}

matchPassword(){
  this.isSubmitted=true;
  this.a=document.getElementById('pass');
  this.b=document.getElementById('cpass');
  if (this.a != this.b) {
    alert('password doesnt match')
    
  } else {
    alert('password match successfully')
  }
};

onSubmit(){
  console.log(this.myForm.value);
  this.isSubmitted=true;
  this.share.postMethod(this.myForm.value).subscribe((res:any)=>{console.log(res)},
  err=>console.log(err))

  this.route.navigate(['allData'])
}

get f(){
  return this.myForm.controls;
}
}
  


