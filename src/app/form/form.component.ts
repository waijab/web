import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator, Validators, FormControl, AbstractControl } from '@angular/forms';
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
      firstName: ['',[Validators.required,Validators.minLength(2)]],
      lastName:['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      age: [22]
    })
  }
  EmilValidator(control: AbstractControl)
{
  const value = control.value;
  if (value && value.includes('@')){
    return null;
  }
  return {
    email: true
  }
}
  
 onSubmit(form: FormGroup){
   console.log(form.valid, form.invalid)
   console.log((<FormControl>form.get('firstName')).errors);
   
   if (form.valid){
     const {firstName, lastName, email, age} = form.value;
   const User = new user(firstName, lastName, email, age);
   console.log(User);

     
   }else{
     ['firstName','lastName','age','email'].forEach((key: string)=> {
       console.log(form.get(key).touched);
       form.get(key).markAsTouched();
     
   })

 }
 }
}
