import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
    <p class="post_city" tabindex="0">${restaurant.city}</p>
    <img
        data-src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}"
        alt="${restaurant.name}"
        class="post_thumbnail lazyload"
        loading="lazy"
        tabindex="0"
    />
    <div class="post_content">
        <p class="post_rating" tabindex="0">Rating: ${restaurant.rating}</p>
        <h1 class="post_title" tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <p class="post_description" tabindex="0">${restaurant.description}</p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container-image-restaurant">
    <img data-src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" class="img-restaurant lazyload">
  </div>
  <div class="information">
    <h4 class="information-location"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i>${restaurant.city}, ${restaurant.address}</h4>
    <div class="title-information">
      <h1 class="label-restaurant">${restaurant.name || '-'}</h1>
      <p class="label-rating">Rating: ${restaurant.rating}</p>
    </div>
    ${restaurant.categories.map((category) => `<p class="label-categories">${category.name}</p>`).join(', ')}
    <div class="information-description">
      <h2>Deskripsi</h2>
      <p>${restaurant.description}</p>  
    </div>
    <div class="information-list">
      <div class="information-food">
        
        <h2>Menu Makan</h2>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}
        </ul>
      </div>
      <div class="information-drink">
        <h2>Menu Minum</h2>
        <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <h3>Review Customers</h3>
    <div class="review-information">
    ${restaurant.customerReviews.map((customerReview) => `
      <div class="container-review">
        <div class="container-img">
          <img data-src="./icons/person.svg" alt="${customerReview.name}" class="lazyload img-review">
        </div>
        <div class="intro-review">
          <h4 class="name-review">${customerReview.name}</h4>
          <p class="date-review">${customerReview.date}</p>
          <p class="comment-review">${customerReview.review}</p>
        </div>
      </div>
    `).join(' ')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
