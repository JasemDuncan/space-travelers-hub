import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { getMissions, toggleMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);

  const statusToggle = (id) => {
    dispatch(toggleMission(id));
  };

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
              <td className="col-2">
                <Badge
                  bg={item.status ? 'info' : 'secondary'}
                >
                  {item.status ? 'Active Member' : 'NOT A MEMBER'}
                </Badge>
              </td>
              <td className="col-2">
                <Button
                  variant={item.status ? 'outline-danger' : 'outline-secondary'}
                  onClick={(e) => {
                    e.preventDefault();
                    statusToggle(item.id);
                  }}
                >
                  {item.status ? 'Leave Mission' : 'Join Mission' }
                </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Missions;
