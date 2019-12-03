import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToolbarComponent from "./Toolbar";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  toolbarTitle: {},
  toolbarLink: {
    padding: theme.spacing(1)
  },
  paper: {
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1)
    }
  },
  heroButtons: {
    marginTop: theme.spacing(2)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  main: {
    backgroundColor: theme.palette.background.paper
  }
}));

const cards = [1, 2, 3, 4];

function TripsList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="static" color="white">
          <Toolbar className={classes.toolbar}>
            <Container display="flex" flexDirection="row">
              <Button size="small">Subscribe</Button>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                Travelist
              </Typography>

              <Button variant="outlined" size="small">
                Sign up
              </Button>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm" align="center" flexDirection="column">
            <img src="./images/char.png" style={{ width: "150px" }} />
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Where are you going next?
            </Typography>

            <div className={classes.heroButtons}>
              <Button
                variant="contained"
                color="primary"
                align="center"
                size="large"
              >
                CREATE NEW TRIP
              </Button>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="sm">
          {/* End hero unit */}
          {/* <Grid container justify="center" spacing={4}> */}
          {cards.map(card => (
            <Grid item key={card}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4">
                    <strong>Destination</strong>
                  </Typography>
                  <Typography>from: 08/12/2019 to: 15/12/2019</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Trip
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* </Grid> */}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Created with ❤ by Team ...
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default TripsList;
