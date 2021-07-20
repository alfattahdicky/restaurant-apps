import DummyRestaurant from '../../data/dummyrestaurant';
import { createRestaurantItemTemplate } from '../template/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <!-- hero -->
    <div class="hero" id="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img 
            src='./images/hero-image_2-large.jpg' 
            alt=""></img>
      </picture>
      <div class="hero-inner">
        <h1 class="hero_title" tabindex="0">Katalog Restaurant Terlengkap</h1>
        <p class="hero_tagline" tabindex="0">
          Pilihan tempat restaurant yang memiliki harga terjangkau dan dekat
          dari rumah anda.
        </p>
      </div>
    </div>
    
    <div class="wrapper">
        <h1 class="wrapper-label" tabindex="0">Explore Restaurant</h1>
        <div class="post" id="restaurants"></div>
    </div>
    `;
  },
  async afterRender() {
    try {
      const restaurants = await DummyRestaurant.listRestaurantDummy();
      const restaurantContainer = document.getElementById('restaurants');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default ListRestaurant;
