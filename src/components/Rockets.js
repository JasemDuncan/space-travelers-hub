import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Badge,
  Button,
} from 'react-bootstrap';
import { getRockets, toggleRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  }, []);

  const statusToggle = (id) => {
    dispatch(toggleRockets(id));
  };

  return (
    <div className="">
      <div>
        {
          rockets.map((item) => (
            <div className="card mb-3 border-0" key={item.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <Badge
                        bg={item.status ? 'btn btn-info ' : ''}
                      >
                        {item.status ? 'Reserved' : ''}
                      </Badge>
                      {item.description}
                    </p>
                    <p className="card-text">{item.status}</p>
                    <Button
                      variant={item.status ? 'outline-danger' : 'primary'}
                      onClick={(e) => {
                        e.preventDefault();
                        statusToggle(item.id);
                      }}
                    >
                      {item.status ? 'Cancel Reservation' : 'Reserve Rocket'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Rockets;
