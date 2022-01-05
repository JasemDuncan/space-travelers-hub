import axios from 'axios';

// Constantes
const GET_MISSIONS = 'spacex/missions/GET_MISSIONS';
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

// Actions
export const getMissions = () => async (dispatch) => {
  const result = await axios(url);
  const missions = result.data;
  const fetchedMissions = [];

  missions.forEach((mission) => {
    const id = mission.mission_id;
    const name = mission.mission_name;
    const { description } = mission;
    fetchedMissions.push({
      id, name, description,
    });
  });
  dispatch({
    type: GET_MISSIONS,
    fetchedMissions,
  });
};

// Reducer
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.fetchedMissions];
    default:
      return state;
  }
};

export default missionReducer;
