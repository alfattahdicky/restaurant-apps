import DummyRestaurant from '../../data/dummyrestaurant';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../template/template-creator';

const Detail = {
  async render() {
    return `
      <div class="detail-restaurant">
        <div class="container-restaurant" id="restaurant">

        </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    try {
      const url = UrlParser.parserActiveUrlWithoutCombiner();
      const restaurant = await DummyRestaurant.detailRestaurant(url.id);
      const restaurantContainer = document.getElementById('restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.getElementById('likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          address: restaurant.address,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
