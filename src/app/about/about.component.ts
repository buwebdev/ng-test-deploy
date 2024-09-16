import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-container">
      <h2 class="about-container__title">About</h2>
      <p class="about-container__description">
        Our company is dedicated to providing affordable homes for everyone. We specialize in finding the best deals on homes for our clients.
        Our team of experts will work with you to find the perfect home for you and your family. Contact us today to get started on finding your dream home!
      </p>
      <p class="about-container__description">
        Our team of experts will work with you to find the perfect home for you and your family. Contact us today to get started on finding your dream home!
      </p>
      <p class="about-container__description">
        Whether you are looking for a one story home, a downtown condo, a house by the lake, or a house on the beach, we have you covered.
        Our team of experts will work with you to find the perfect home for you and your family. Contact us today to get started on finding your dream home!
      </p>
    </div>
  `,
  styles: `
    .about-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 20px;
    }

    .about-container__title {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .about-container__description {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      max-width: 800px;
    }
  `
})
export class AboutComponent {}
