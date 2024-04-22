import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  ImagePath: string; 
  
  constructor() { 
    //image location 
    this.ImagePath = '../assets/img/profile-pict.png'
    // src\assets\img\profile-pict.png
  } 
}
