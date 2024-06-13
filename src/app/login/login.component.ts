import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logForm= this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z0-9@_]*')]]
  })

  constructor(private fb:FormBuilder ,private toast:ToastrService){

  }
  handlelog(){
    console.log(this.logForm);
    this.toast.success("success")
    
    
  }

}
