import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h2>Our Mission</h2>

    <p>
      At Homes for Cheap, our mission is to help you find the perfect home that fits your lifestyle and budget.
      We believe that everyone deserves a place they can call their own, and we are committed to making the home buying
      process as smooth and enjoyable as possible. Our team of experienced real estate professionals is dedicated to providing personalized
      service and expert guidance every step of the way.
    </p>

    <p>
      Whether you're looking for a cozy starter home, a luxurious beachfront property, or a spacious family house in the suburbs,
      we have a wide range of listings to suit your needs. We pride ourselves on our extensive knowledge of the local market and our
      ability to match buyers with their dream homes. Let us help you turn your homeownership dreams into reality.
    </p>

    <div class="grid">
      <h3>Featured Listings</h3>

      <figure>
        <img src="./assets/1_story_home_blue.jpg" alt="one story blue home">
        <figcaption>Beuatiful blue one story home for sale!</figcaption>
      </figure>

      <figure>
        <img src="./assets/downtown_condo.jpg" alt="downtown condo">
        <figcaption>Downtown living?  Check!  Enjoy the nightlife with a spacious downtown condo!</figcaption>
      </figure>

      <figure>
        <img src="./assets/house_by_the_lake.jpg" alt="house by the lake">
        <figcaption>Want a home on the lake?  We have you covered.  Check out this amazing deal!</figcaption>
      </figure>

      <figure>
        <img src="./assets/house_on_a_beach.jpg" alt="house on a beach">
        <figcaption>Want a house on the beach?  Check out this amazing offer!</figcaption>
      </figure>

      <figure>
        <img src="./assets/ranch_style_home.jpg" alt="ranch home out in the country">
        <figcaption>Looking for a quite retreat?  How about a hosue in the country?</figcaption>
      </figure>

      <figure>
        <img src="./assets/two_story_home_white.jpg" alt="two story white house in the city">
        <figcaption>Retire in your dream home! This two story house is sure to please!</figcaption>
      </figure>
    </div>
  `,
  styles: `
    h2, h3 {
      text-align: center;
    }
  `
})
export class HomeComponent {

}
