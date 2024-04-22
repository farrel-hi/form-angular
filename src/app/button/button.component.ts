import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  isButtonError:boolean = true;
  textColor:string = 'white';
  backgroundColor:string = "red";
  constructor(){}

  isOnInit(): void{

  }
  clickMe(){
    this.isButtonError = !this.isButtonError;
    this.textColor = this.isButtonError ? 'white' : 'red';
    this.backgroundColor = this.isButtonError ? 'red' : 'white';
  }
}
