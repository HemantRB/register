import { CardContent, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'

function contactus() {
    return (
        <div className="container col-6">
            <Typography gutterBottom variant="h3" align="center">
                Contact-us
            </Typography>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Contact Us</Typography>
                    <Typography gutterBottom color="textSecondary" variant="body2" component="p">Fill Up The form and our team will revert you back In 24 hours</Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12} >
                                <TextField label="First Name" placeholder="Enter First Name" variant="standard" fullWidth required />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField label="Last Name" placeholder="Enter Last Name" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="Email" label="Email" placeholder="Enter Email Address" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="Number" label="Phone" placeholder="Enter Phone Number" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Message" multiline rows={4} placeholder="Type your Message here" variant="standard" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth >Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default contactus

