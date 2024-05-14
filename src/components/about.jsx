import { Grid } from "@mui/material";
import about from "./img/about.png"

function About() {
    return (
        <div className="container mt-5" id="about">
            <h2 className="text-center pb-2">Our History</h2>
            <hr className="pb-5 m-auto" style={{width:"300px", textAlign:"center"}} />
            <Grid container spacing={2} className="d-flex align-items-center">
                <Grid item lg={6} md={7}>
                    <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsam nihil odit suscipit ex repellendus harum fugit similique, quae voluptate saepe deleniti nam magnam, quis, est quisquam.</p>
                    <p className="about-text">Lorem ipsum, ea quas harum pariatur fugit similique, quae voluptate saepe deleniti nam magnam, quis, est quisquam.</p>
                </Grid>
                <Grid item lg={6} md={5} className="d-flex align-items-center justify-content-end">
                    <img width={"100%"} src={about} alt="about" />
                </Grid>
            </Grid>
        </div>
    );
}

export default About;