import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SeeCars() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/cars")
    }
    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
                <h2 className="text-center pb-2">See All Cars</h2>
                <hr className="pb-5 m-auto" style={{ width: "300px", textAlign: "center" }} />
            </div>
            <div className="w-100 see-cars d-flex align-items-center justify-content-center">
                <Button onClick={handleNavigate} variant="contained" style={{boxShadow:"0px 0px 20px 6px black"}}>cars available</Button>
            </div>
        </>
    );
}

export default SeeCars;