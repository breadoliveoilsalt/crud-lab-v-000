
import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurants(
  state = {restaurants: [], reviews: []},
  action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        const id = cuid()
        // TN: this is the prob here: need to return state as modified
        // UP TO HERE: HAVE TO MODIFY/MERGE THE STATE AND RETURN THE STATE
        const restaurant = Object.assign({}, action.restaurant, {id: id})
        return {restaurants: state.restaurants.concat(restaurant)}
      case 'DELETE_RESTAURANT':
        // console.log("Action id: " + action.id)
        // console.log("restaurants: ")
        // console.log(state.restaurants)
        const restaurants = state.restaurants.filter(r => r.id !== action.id)
        return {restaurants}
      case 'ADD_REVIEW':
        const review = Object.assign({}, action.review, {restaurantId: action.restaurantId})
        return {reviews: state.reviews.concat(review)}
      default:
        return state
    }
}

//
// let id = 0
//
// export default function manageBand(state = {
//   bands: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_BAND':
//       id++
//       const band = Object.assign({}, action.band, {id: id})
//       // return { bands: state.bands.concat(action.band) }
//       return { bands: state.bands.concat(band) }
//     case 'DELETE_BAND':
//       const bands = state.bands.filter(band => band.id !== action.id)
//       return {bands}
//     default:
//       return state;
//   }
// };
