import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

// const Rocket = (props) => {
//   const { id, name, type } = props;

//   return (
//     <h4>
//       {name}
//       {id}
//       {type}
//     </h4>
//   );
// };

// Rocket.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.bool.isRequired,
// };

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  }, []);

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
                    <p className="card-text">{item.description}</p>
                    <a href="http://localhost:3000/" className="btn btn-primary">Reserve Rocket</a>
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
