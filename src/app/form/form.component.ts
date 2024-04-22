import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  // name: string = '';
  // gender: string = '';
  // birthDate: Date | null = null;
  form!: FormGroup;

  // genders: string[] = ['Male','Female'];

  constructor(
    private fb:FormBuilder,
  ){
    this.form = this.fb.group({
      fullName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.email]],
      gender: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).*')]],
    });
  }

  get fullName(){return this.form.get('fullName');}
  get email(){return this.form.get('email');}
  get gender(){return this.form.get('gender');}
  get password(){return this.form.get('password');}

  ngOnInit(): void{

  }

  submitForm(){
    if((!this.fullName?.value) || (!this.email?.value) || (!this.gender?.value) || (!this.password?.value)){
      console.log('Please fill the Requried Form');
    }
    else{
      console.log('Nama yang dimasukkan:',this.fullName?.value);
      console.log('Email yang diinput:', this.email?.value );
      console.log('Gender yang dipilih:', this.gender?.value );
      console.log('Password yang diinput:', this.password?.value );    
    }
  }
}
