import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import car1 from '../assets/img/car1-removebg-preview.png';
import car2 from '../assets/img/car2-removebg-preview.png';
import car3 from '../assets/img/car3-removebg-preview.png';
import car4 from '../assets/img/car4-removebg-preview.png';
import { Car } from './Car';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  street: {
    border: '1px dashed #242424',
    padding: theme.spacing(2),
    backgroundColor: '#5e7182',
    maxHeight: 110,
    height: 100,
  },
  start: {
    backgroundColor: 'green',
    color: '#fff',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: '#00a600',
    },
  },
  reset: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: '#ff4300',
    },
  },
}));

export const RaceArea = () => {
  const classes = useStyles();
  const [initPosition, setInitPosition] = useState(false);

  const resetRace = () => {
    setInitPosition(true);
  };

  const startRace = () => {
    setInitPosition(false);
  };

  return (
    <>
      <Button variant="contained" className={classes.start} onClick={startRace}>
        EMPEZAR
      </Button>
      <Button variant="contained" className={classes.reset} onClick={resetRace}>
        RESETEAR
      </Button>

      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.street}>
              <Car img={car1} name="carrito 1" velocity={50} resetRace={initPosition} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.street}>
              <Car img={car2} name="carrito 2" velocity={50} resetRace={initPosition} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.street}>
              <Car img={car3} name="carrito 3" velocity={60} resetRace={initPosition} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.street}>
              <Car img={car4} name="carrito 4" velocity={50} resetRace={initPosition} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
