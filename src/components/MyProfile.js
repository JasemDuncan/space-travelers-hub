import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const allRockets = useSelector((state) => state.rocketsReducer);
  const rocketsBooked = allRockets.filter((rocket) => rocket.status);

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
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
