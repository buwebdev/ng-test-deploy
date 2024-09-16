import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [],
  template: `
    <div class="listing-container">
      <h2 class="listing-container__title">House Listings</h2>
      <div class="listing-container__grid">
        @for (house of houses; track house) {
          <div class="listing-container__card">
            <div class="listing-container__card-body">
              <h5 class="listing-container__card-title">{{ house.title }}</h5>
              <p class="listing-container__card-text">{{ house.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .listing-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .listing-container__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .listing-container__grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      width: 100%;
    }

    .listing-container__card {
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      width: calc(33.333% - 20px);
      margin-bottom: 20px;
      transition: box-shadow 0.3s ease-in-out;
    }

    .listing-container__card-body {
      padding: 20px;
    }

    .listing-container__card-title {
      font-size: 1.25rem;
      margin-bottom: 15px;
    }

    .listing-container__card-text {
      margin: 10px 0;
    }
  `
})
export class ListingComponent {
  houses = [
    { title: 'Charming Bungalow', description: 'A cozy 2-bedroom bungalow with a beautiful garden.' },
    { title: 'Modern Apartment', description: 'A sleek 1-bedroom apartment in the heart of the city.' },
    { title: 'Spacious Villa', description: 'A luxurious 5-bedroom villa with a private pool.' },
    { title: 'Country Cottage', description: 'A quaint 3-bedroom cottage surrounded by nature.' },
    { title: 'Urban Loft', description: 'A stylish loft with an open floor plan and city views.' },
    { title: 'Family Home', description: 'A spacious 4-bedroom home perfect for families.' },
    { title: 'Beach House', description: 'A stunning 3-bedroom house with ocean views.' },
    { title: 'Mountain Cabin', description: 'A rustic cabin with 2 bedrooms and mountain views.' },
    { title: 'Suburban House', description: 'A comfortable 3-bedroom house in a quiet neighborhood.' }
  ];
}
