import React from 'react';
import { Grid, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Navigation = () => {
    const defaultFolderId = `root`;
    return (
        <Toolbar>
            <Grid container spacing={10} direction={'row'}>
                <Grid item xs={3}>
                    <NavLink to="/login">Login</NavLink>
                </Grid>
                <Grid item xs={3}>
                    <NavLink to={`/document/detail/` + uuid()}>Document Detail</NavLink>
                </Grid>
                <Grid item xs={3}>
                    <NavLink to={'/file/browser/' + defaultFolderId}>Document Browser</NavLink>
                </Grid>
            </Grid>
        </Toolbar>
    );
};

export default Navigation;
