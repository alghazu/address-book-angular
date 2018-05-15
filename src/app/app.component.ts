import { Component } from '@angular/core';
import { IContact } from './contact/contact.module'
import contacts from './contact/contact-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  contact: IContact;
  contacts: IContact[] = [];
  appName = 'Address Book';

  constructor(){
    this.initContact();
    this.contacts = contacts ;
  }

  createContact(){
    console.log('Submit button was clicked')
    this.contacts.push(this.contact);
    this.initContact();
  }

  private initContact(){
    this.contact = {
      name: '',
      email: '',
      company:  '',
      role: '',
      twitter: '',
      location: '',
      notes: ''
    }
  }
}
