import * as React from 'react';
import { Grid, Paper, Button, Link } from '@mui/material';


function ResetPasswordPanel() {

    return (
        <>
            <Paper elavation={3} sx={{ width: '100%'}} justifyContent="center" alignItems='center'>
                <Grid container sx={{ height:  '100%'}}>
                    <Grid item xs={12} sx={{ margin: 2}}>
                        <Button component={Link} to="/reset-password" variant='contained' sx={{ width: 1 }}> Rest Password </Button>
                    </Grid>
                </Grid>
            </Paper>
            
        </>
    )
};

export default ResetPasswordPanel;

