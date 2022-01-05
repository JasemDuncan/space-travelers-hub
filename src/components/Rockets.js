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
      lista de rockets
      <ul>
        {
          rockets.map((item) => (
            <li key={item.id}>
              {item.id}
              {' '}
              {item.name}
              {item.description}
              {item.type}
              {item.image}
            </li>
          ))
        }

      </ul>
    </div>
  );
};

export default Rockets;
