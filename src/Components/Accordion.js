import React from 'react';

import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom";


import { MenuItem, FormControl, InputLabel, Select, Stack, TextField, Button } from '@mui/material';
export default function Accordion() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <Grid container spacing={6}>
            <Grid item xs={2}>

                <FormControl fullWidth >
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
                <Button variant='outlined'><Link to='/tab' underline='none'style={{ textDecoration: 'none' }} >Search</Link>
                    
                    </Button>
               
            </Grid>

        </Grid>

    );
}