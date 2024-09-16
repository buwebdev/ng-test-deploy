import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
     <div class="contact-container">
      <h2 class="contact-container__title">Contact Us</h2>
      <p class="contact-container__description">Questions? Comments? Concerns? We would love to hear from you! Please feel free to contact us using the form below.</p>
      <div class="contact-container__cards">
        <div class="contact-container__card contact-container__card--hours">
          <div class="contact-container__card-body">
            <h5 class="contact-container__card-title">Hours of Operation</h5>
            <ul class="contact-container__list">
              <li class="contact-container__list-item">Monday: 9:00 AM - 5:00 PM</li>
              <li class="contact-container__list-item">Tuesday: 9:00 AM - 5:00 PM</li>
              <li class="contact-container__list-item">Wednesday: 9:00 AM - 5:00 PM</li>
              <li class="contact-container__list-item">Thursday: 9:00 AM - 5:00 PM</li>
              <li class="contact-container__list-item">Friday: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
        <div class="contact-container__card contact-container__card--info">
          <div class="contact-container__card-body">
            <h5 class="contact-container__card-title">Contact Information</h5>
            <p class="contact-container__card-text">Phone: (123) 456-7890</p>
            <p class="contact-container__card-text">Email: contact&amp;example.com</p>
            <p class="contact-container__card-text">Address: 123 Fake Street, Faketown, FK 12345</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .contact-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .contact-container__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .contact-container__description {
      font-size: 1rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .contact-container__cards {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    .contact-container__card {
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 45%;
      margin-bottom: 20px;
    }

    .contact-container__card-body {
      padding: 20px;
    }

    .contact-container__card-title {
      font-size: 1.25rem;
      margin-bottom: 15px;
    }

    .contact-container__list-item {
      border: none;
      padding: 10px 0;
    }

    .contact-container__card-text {
      margin: 10px 0;
    }
  `
})
export class ContactComponent {

}
