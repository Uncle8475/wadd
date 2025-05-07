import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // <-- corrected
})
export class AppComponent {
  title = 'Registration Form';

  displayname = '';
  displayAddress = '';
  displayContact = '';
  displayEmail = '';

  getValue(name: string, address: string, contact: string, email: string) {
    this.displayname = name;
    this.displayAddress = address;
    this.displayContact = contact;
    this.displayEmail = email;
  }
}
