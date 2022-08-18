import { makeStyles } from '@material-ui/core/styles';

import { useEffect } from 'react';
import { useState } from 'react';

export const Car = ({ img, name, velocity, interval = 1000, resetRace = false }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  const classes = useStyles();
  const [positionX, setPositionX] = useState(60);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    const intervalCar = setInterval(() => {
      setPositionX(positionX + velocity);
    }, interval);

    if (positionX >= dimensions.width - 250) {
      clearInterval(intervalCar);
    }

    window.addEventListener('resize', handleResize);

    if (resetRace) {
      clearInterval(intervalCar);
      setPositionX(60);
    }

    return () => clearInterval(intervalCar);
  });

  console.log('dimension', dimensions.width);

  return (
    <>
      <img
        src={img}
        alt={name}
        className={classes.car}
        style={{
          position: 'absolute',
          left: `${positionX}px`,
        }}
      />
      {positionX} - {dimensions.width}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  car: {
    objectFit: 'cover',
    height: 100,
    backgroundImage: 'none',
  },
}));
