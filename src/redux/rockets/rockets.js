import axios from 'axios';

// Constantes
const GET_ROCKETS = 'spacex/rockets/GET_ROCKETS';
const TOGGLE_ROCKET = 'spacex/rockets/TOGGLE_ROCKETS';

const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.fetchedRockets];
    case TOGGLE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, status: !rocket.status };
      });
    default:
      return state;
  }
};

// acciones
export const getRockets = () => async (dispatch) => {
  const result = await axios(url);

  const rockets = result.data;

  // const allRockets = Object.entries(rockets);
  const fetchedRockets = [];

  rockets.forEach((rocket) => {
    const { id } = rocket;
    const name = rocket.rocket_name;
    const { description } = rocket;
    const type = rocket.rocket_type;
    const image = rocket.flickr_images;
    const status = false;
    fetchedRockets.push({
      id, name, description, type, image, status,
    });
  });
  dispatch({
    type: GET_ROCKETS,
    fetchedRockets,
  });
};

export const toggleRockets = (payload) => ({
  type: TOGGLE_ROCKET,
  payload,
});

export default reducer;
