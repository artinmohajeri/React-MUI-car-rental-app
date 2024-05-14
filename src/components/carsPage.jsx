import Navbar from "./navbar";
import Car from "./carPage";
import { Grid, ButtonGroup, Typography, Button, Box, TextField, Card, CardActions, CardContent } from "@mui/material";
import aventador from "./img/aventador.webp"

function CarsPage() {
    return (
        <>
            <Navbar />
            <div className="container d-flex align-items-center justify-content-center" style={{ marginTop: "150px" }}>
                <Box className="w-100 filter-box d-flex align-items-center justify-content-evenly">
                    <Grid container spacing={2} className="d-flex align-items-center justify-content-center">
                        <Grid item lg={6} xs={12} className="d-flex align-items-center justify-content-center">
                            <ButtonGroup variant="contained" aria-label="Basic button group">
                                <Button className="filter-btn">Sport</Button>
                                <Button className="filter-btn">SUV</Button>
                                <Button className="filter-btn">Classic</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item lg={6} xs={12} className="d-flex align-items-center justify-content-center">
                            <TextField style={{ background: "none", boxShadow: "none", border: "none", width:"300px" }} id="standard-basic" label="
                            filter by name" variant="standard" />
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <div className="container d-flex align-items-center justify-content-center" style={{ marginTop: "100px" }}>
                <Grid container spacing={2} className="d-flex align-items-center justify-content-center">
                    <Grid item lg={4} md={6} xs={10} className="d-flex align-items-center justify-content-center">
                        <Card className="mt-4" sx={{ maxWidth: 300 }}>
                            <div className="d-flex algin-items-center justify-content-center p-3">
                                <img src={aventador} alt="car" style={{width:"100%", height:"100%"}} />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lamborghini Aventador
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This car has 700 horsepower and 1000 NM of Torque. It is 600 Kg and 0 to 60 in 3.4 seconds
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Rent</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default CarsPage;