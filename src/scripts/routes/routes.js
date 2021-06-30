import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';
import ListRestaurant from '../views/pages/list-restaurant';

const routes = {
  '/': ListRestaurant, // default page
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
