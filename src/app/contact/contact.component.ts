import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  sendMessage() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Form Data:', this.contact);
      this.submitted = true;

      setTimeout(() => {
        this.submitted = false;
        this.contact = { name: '', email: '', message: '' };
      }, 3000);
    }
  }
}
