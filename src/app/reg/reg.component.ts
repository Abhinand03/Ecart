import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  regForm= this.fb.group({
    username:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z0-9@_]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z0-9@_]*')]]
  })

  constructor(private fb:FormBuilder ,private toast:ToastrService){

  }
  handlesubmit(){
    console.log(this.regForm);
    this.toast.success("jfkm")
    
    
  }

}
