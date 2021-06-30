/* eslint-disable no-undef */
import API_ENDPOINT from '../globals/api-endpoint';

class DummyRestaurant {
  static async listRestaurantDummy() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DummyRestaurant;
