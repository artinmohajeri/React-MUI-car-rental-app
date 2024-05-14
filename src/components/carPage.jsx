import Navbar from "./navbar";
import { Grid, TextField, Typography, Button } from "@mui/material";
import aventador from "./img/aventador.webp"

function CarPage(props) {
    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: "100px" }}>
                <Grid container spacing={2} className="d-flex align-items-center justify-content-center">
                    <Grid item xs={12} md={5} className="d-flex align-items-center justify-content-center">
                        <img src={aventador} alt="car" width={"100%"} />
                    </Grid>
                    <Grid className="mt-5" item xs={12} md={7}>
                        <Grid container spacing={2} className="">
                            <Grid item xs={12} md={6} className="d-flex align-items-center justify-content-center">
                                <Typography gutterBottom variant="h6" component="h6">
                                    700 horsepower
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} className="d-flex align-items-center justify-content-center">
                                <Typography gutterBottom variant="h6" component="h6">
                                    1000 Nm Torque
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="">
                            <Grid item xs={12} md={6} className="d-flex align-items-center justify-content-center">
                                <Typography gutterBottom variant="h6" component="h6">
                                    600 Kg weight
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} className="d-flex align-items-center justify-content-center">
                                <Typography gutterBottom variant="h6" component="h6">
                                    350m/s top speed
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} className="mt-3">
                                <Grid item xs={12} className="d-flex align-items-center justify-content-center">
                                    <TextField className="w-75" style={{ background: "none", boxShadow: "none", border: "none", width: "300px" }} id="standard-basic" label="
                                    Your emial:" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} className="d-flex align-items-center justify-content-center">
                                    <Button className="w-75"  variant="outlined" style={{ boxShadow: "0px 0px 10px 0px #888" }}>Send</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default CarPage;