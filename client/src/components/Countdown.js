import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Countdown({ trip }) {
  return (
    <Box clone pt={2} pr={1} pb={1} pl={2}>
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item>
            <Typography>Countdown to {trip.destination} </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Countdown;
