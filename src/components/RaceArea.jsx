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
  streetMiddle: {
    borderBottom: '4px dashed #E5E7E9',
    padding: theme.spacing(2),
    backgroundColor: '#5e7182',
    maxHeight: 110,
    height: 90,
  },
  streetBorderUp: {
    borderTop: '14px dashed #D4AC0D',
    borderBottom: '4px dashed #E5E7E9',
    padding: theme.spacing(2),
    backgroundColor: '#5e7182',
    maxHeight: 110,
    height: 90,
  },
  streetBorderDown: {
    borderBottom: '14px dashed #D4AC0D',
    padding: theme.spacing(2),
    backgroundColor: '#5e7182',
    maxHeight: 110,
    height: 90,
  },
  start: {
    backgroundColor: 'green',
    color: '#fff',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: '#00a600',
    },
    margin: '5px 15px 40px 15px',
  },
  reset: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bolder',
    '&:hover': {
      backgroundColor: '#ff4300',
    },
    margin: '5px 15px 40px 15px',
  },
  raceContainer: {
    display: 'flex',
    alignItems: 'center',
    // border: '2px dashed gold',
    height: '90vh',
  },
  raceChild: {
    // border: '2px dashed red',
    width: '100%',
  },
  members: {
    listStyle: 'none',
  },
  margen: {
    marginTop: 140,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontSize: '1.4rem',
    backgroundColor: '#2E4053',
  },
}));

export const RaceArea = () => {
  // const minVelocity = 100;
  // const maxVelocity = 400;
  const minInterval = 1000;
  const maxInterval = 4000;

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
      <div className={classes.raceContainer}>
        <div className={classes.raceChild}>
          <h1>
            <code>CARRERITAS</code>
          </h1>
          <Button variant="contained" className={classes.start} onClick={startRace}>
            EMPEZAR
          </Button>
          <Button variant="contained" className={classes.reset} onClick={resetRace}>
            RESETEAR
          </Button>

          <div className={classes.root}>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.streetBorderUp}>
                  <Car
                    img={car1}
                    carName="CAR 1"
                    velocity={100}
                    interval={Math.abs(Math.floor(Math.random() * (minInterval - maxInterval + 1)) + minInterval)}
                    resetRace={initPosition}
                  />
                  <h3>CAR 1</h3>
                  {/* Math.abs(Math.floor(Math.random() * (minVelocity - maxVelocity + 1)) + minVelocity */}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.streetMiddle}>
                  <Car
                    img={car2}
                    carName="CAR 2"
                    velocity={100}
                    interval={Math.abs(Math.floor(Math.random() * (minInterval - maxInterval + 1)) + minInterval)}
                    resetRace={initPosition}
                  />
                  <h3>CAR 2</h3>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.streetMiddle}>
                  <Car
                    img={car3}
                    carName="CAR 3"
                    velocity={100}
                    interval={Math.abs(Math.floor(Math.random() * (minInterval - maxInterval + 1)) + minInterval)}
                    resetRace={initPosition}
                  />
                  <h3>CAR 3</h3>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.streetBorderDown}>
                  <Car
                    img={car4}
                    carName="CAR 4"
                    velocity={100}
                    interval={Math.abs(Math.floor(Math.random() * (minInterval - maxInterval + 1)) + minInterval)}
                    resetRace={initPosition}
                  />
                  <h3>CAR 4</h3>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className={classes.margen}>
        <code>
          <h1>GRUPO #3 - SSOO</h1>
        </code>
        <code>Mario Joel Monroy Canizales 0900-16-3378</code>

        <code>Milton Javier Navarro Fuentes 0900-21-11576</code>

        <code>Karen Sofia Baltazar Mejia 0900-19-17152</code>

        <code>Andrés Eduardo León Sosa 0900-20-2395</code>

        <code>Eduvijes de Jesus Lazaro Orellana 0900-18-1755</code>
      </div>
    </>
  );
};
