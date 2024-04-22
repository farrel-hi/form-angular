import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Adding this module


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  name : string = '';

  constructor (private route : ActivatedRoute){}; //This is for the routing,
  ngOnInit() : void { //While the rest is for creating the props name
    this.name = this.route.snapshot.paramMap.get('name')!;
  }
}
