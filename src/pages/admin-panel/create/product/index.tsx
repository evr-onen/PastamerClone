import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material"
import React from "react"

const index = () => {
  return (
    <Grid container className="insideWrapper" justifyContent="center">
      <Grid item xs={12} px="4rem">
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <TextField label="Name" />
          </Grid>
          <Grid item xs={2}>
            <TextField label="Category" />
          </Grid>
          <Grid item xs={2}>
            <TextField label="brand" />
          </Grid>

          <Grid item>
            <Grid container columnSpacing={4}>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="is New?" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="is ShowOff?" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
