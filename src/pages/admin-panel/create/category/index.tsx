import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

const index = () => {
  const [isParent, setIsParent] = useState<boolean>(true)
  console.log(isParent)

  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <Grid container className="insideWrapper" justifyContent="center" width="100%">
      <Grid item width="100%" px="4rem">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" color="initial" fontWeight={700}>
              Category
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Select Category" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField label="Sub Category name" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Checkbox checked={isParent} onClick={(e) => setIsParent((prev) => !prev)} value={isParent} />}
              label="is Parent?"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
