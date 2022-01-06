import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const allRockets = useSelector((state) => state.rocketsReducer);
  const rocketsBooked = allRockets.filter((rocket) => rocket.status);

  const allMissions = useSelector((state) => state.missionsReducer);
  const missionsBooked = allMissions.filter((mission) => mission.status);

  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-6 text-center">
            My Rockets
            {rocketsBooked.map((rocket) => (
              <h3 key={rocket.id}>{rocket.name}</h3>
            ))}
          </div>
          <div className="col-6 text-center">
            My Missions
            {missionsBooked.map((mission) => (
              <h3 key={mission.id}>{mission.name}</h3>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
