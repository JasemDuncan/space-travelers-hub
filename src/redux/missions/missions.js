import axios from 'axios';

// Constantes
const GET_MISSIONS = 'spacex/missions/GET_MISSIONS';
const TOGGLE_MISSIONS = 'spacex/missions/TOGGLE_MISSIONS';
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
    const status = false;
    fetchedMissions.push({
      id, name, description, status,
    });
  });
  dispatch({
    type: GET_MISSIONS,
    fetchedMissions,
  });
};

export const toggleMission = (payload) => ({
  type: TOGGLE_MISSIONS,
  payload,
});

// Reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.fetchedMissions];
    case TOGGLE_MISSIONS:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, status: !mission.status };
      });
    default:
      return state;
  }
};

export default missionsReducer;
