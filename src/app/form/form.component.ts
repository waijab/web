import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator } from '@angular/forms';
import { user } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private FormBuild: FormBuilder
  ) {
  
  }
  
  ngOnInit() {
    this.formGroup = this.FormBuild.group({
      firstName: this.FormBuild.control('supagrid'),
      lastName: ['tangsermit'],
      email:[''],
      age: [22]
    })
  }
 onSubmit(form: FormGroup){
   
   const {firstName, lastName, email, age} = form.value;
   const User = new user(firstName, lastName, email, age);
   console.log(User);


 }
}
