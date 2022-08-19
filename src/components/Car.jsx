import { makeStyles } from '@material-ui/core/styles';
import { Flare } from '@material-ui/icons';

import { useEffect } from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// const sucessNotify = (nCar) => toast.success('Gano el carro! ', nCar);

export const Car = ({ img, carName, velocity, interval = 1000, resetRace = false }) => {
  const classes = useStyles();
  const [positionX, setPositionX] = useState(50);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const intervalCar = setInterval(() => {
      setPositionX(positionX + velocity);
    }, interval);

    if (positionX >= dimensions.width - 250) {
      clearInterval(intervalCar);
    }

    if (resetRace) {
      clearInterval(intervalCar);
      setPositionX(50);
    }

    return () => clearInterval(intervalCar);
  });

  useEffect(() => {
    if (positionX >= dimensions.width - 250) {
      toast.success(`Gano el carro! ${carName}`);
    }
  }, [positionX]);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Toaster />
      <img
        src={img}
        alt={carName}
        className={classes.car}
        style={{
          position: 'absolute',
          left: `${positionX}px`,
        }}
      />
      <code>{positionX} KM</code>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  car: {
    objectFit: 'cover',
    height: 'auto',
    width: 150,
    backgroundImage: 'none',
    transition: 'all 1s ease',
  },
}));
