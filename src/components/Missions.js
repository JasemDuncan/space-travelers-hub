import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);

  return (
    <div className="">
      Lista de Missions
      <ul>
        {
          missions.map((item) => (
            <li key={item.id}>
              {item.id}
              {item.name}
              {item.description}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Missions;
