import React from 'react'
import Nav from './Nav'
import { CardContent, Card, Grid, Typography, TextField, Button } from '@material-ui/core'


function Register() {
    return (
        <div className="container col-6">
            {/* <Typography gutterBottom variant="h5" align="center">
                Payment&Registration
            </Typography> */}
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Booking/Registration
                    </Typography>
                    <Typography gutterBottom color="textSecondary" variant="body2" component="p">Fill Up The form and our team will revert you back In 24 hours</Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField label=" Full Name" placeholder="Enter your Full Name" variant="standard" fullWidth required />
                            </Grid>
                            {/* <Grid item sm={6} xs={12}>
                                <TextField label="Last Name" placeholder="Enter Last Name" variant="standard" fullWidth required />
                            </Grid> */}
                            <Grid xs={12} item>
                                <TextField type="Email" label="Email" placeholder="Enter Email Address" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="String" label="Phone" placeholder="Enter Phone Number" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="String" label="Alternate Phone" placeholder="Enter Alternate Phone Number" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <label>Number of Guest:</label>
                                <input type="number" min="0" label="Number of Person" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Address" multiline rows={4} placeholder="Enter your Address here" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="String" placeholder="Amount paying in Rupees" min="0" label="Payment/Booking Amount" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth >Book Now</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register

