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
            <h2>My Missions</h2>
            {missionsBooked.map((mission) => (
              <div className="card text-white bg-success mb-3" key={mission.id}>
                <div className="card-header">{mission.name}</div>
                <div className="card-body">
                  <p className="card-text text-truncate">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-6 text-center">
            <h2>My Rockets</h2>
            {rocketsBooked.map((rocket) => (
              <div className="card text-white bg-info mb-3" key={rocket.id}>
                <div className="card-header">{rocket.name}</div>
                <div className="card-body">
                  <p className="card-text text-truncate">{rocket.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
