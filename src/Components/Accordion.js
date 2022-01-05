import React from 'react';

import Grid from '@mui/material/Grid';
//import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";


import { MenuItem, FormControl, InputLabel, Select, Stack, TextField, Button } from '@mui/material';
export default function Accordion() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }]
    return (
        <Grid container spacing={6}>
            <Grid item xs={2}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={0}>

                <h3>OR</h3>

            </Grid>

            <Grid item xs={2}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={2}>

                <Stack component="form" noValidate spacing={3}>
                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue=""
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Stack>

            </Grid>
            <Grid item xs={2}>

                <Stack component="form" noValidate spacing={3}>
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue=""
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Stack>
            </Grid>

            <Grid item xs={2}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={1}>
                <Button variant='outlined'><Link to='/tab' underline='none' >Search</Link>
                    
                    </Button>
               
            </Grid>

        </Grid>

    );
}