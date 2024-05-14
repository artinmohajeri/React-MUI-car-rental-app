import { Box, Typography } from "@mui/material";
import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";

function Footer() {
    return (
        <footer id="footer" className="w-100 d-flex align-items-center justify-content-center" style={{ height: "300px", background: "#111111", marginTop: "100px" }}>
            <Box>
                <Typography variant="h5" component="span" className="text-center" style={{color:"#888"}}>
                    Follow us on social media
                </Typography>
                <Box className="d-flex align-items-center justify-content-evenly">
                    <Instagram style={{ color: "#888", fontSize: "30px", margin: "10px", cursor: "pointer" }} />
                    <Facebook style={{ color: "#888", fontSize: "30px", margin: "10px", cursor: "pointer" }} />
                    <Twitter style={{ color: "#888", fontSize: "30px", margin: "10px", cursor: "pointer" }} />
                    <YouTube style={{ color: "#888", fontSize: "30px", margin: "10px", cursor: "pointer" }} />
                </Box>
            </Box>
        </footer>
    );
}

export default Footer;