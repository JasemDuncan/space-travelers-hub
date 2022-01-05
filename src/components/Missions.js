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
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Mission</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((item) => (
            <tr key={item.id}>
              <td className="col-1">{item.name}</td>
              <td className="col-7">{item.description}</td>
              <td className="col-2"><button type="button" className="btn btn-secondary btn-sm">NOT A MEMBER</button></td>
              <td className="col-2"><button type="button" className="btn btn-outline-secondary btn-sm">Join Mission</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Missions;
