// https://material-ui.com/api/form-control/
import React from 'react';
import { Grid, Container, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

// import { BusinessCenterIcon } from '@material-ui/icons';

const LoginPage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xs">
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.gridTitle}>
                        {/* <AssignmentLate fontSize={'large'} /> */}
                        Login
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" name="email" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" fullWidth type="submit" variant="contained">
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default LoginPage;
