import { Component } from '@angular/core';
import { User } from './user'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();
  displayUser: User;
  passwordconf: string;

  submitMyForm():void {
    this.displayUser = this.user;
    this.user = new User();
  }
}
