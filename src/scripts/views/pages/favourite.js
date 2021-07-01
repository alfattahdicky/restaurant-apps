import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Favourite = {
  async render() {
    return `
    <div class="wrapper wrapper-favourite">
      <h1 class="wrapper-label" tabindex="0">Favourite Restaurant</h1>
      <div class="post" id="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.getElementById('restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
