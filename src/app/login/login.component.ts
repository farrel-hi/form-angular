import { Component } from '@angular/core';
import { Router } from '@angular/router'; // This has no use, but i'm still keeping it just in case

@Component({
  selector: 'app-login',
  template: '<a href="https://example.com" target="_blank"> Go To Example</a>', //add this whole line
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

}
