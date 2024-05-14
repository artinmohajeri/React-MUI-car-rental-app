import { Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import logo from "./img/logo.png"
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <nav style={{ position: "fixed", top: 0, width: "100%", height: "56px", zIndex: 2 }}>
            <div className="container d-flex align-items-center justify-content-between h-100">
                <div className="left-nav w-50 h-100 d-flex align-items-center text-white"><img width={"150px"} src={logo} alt="logo" /></div>
                <div className="right-nav w-50 h-100 d-flex align-items-center">
                    <ul className="nav-links w-100 h-100 d-flex align-items-center justify-content-end m-0">
                        <li className="nav-item"><Link style={{cursor:"pointer"}} className="text-decoration-none text-white" to="/cars">Cars available</Link></li>
                        <li className="nav-item"><a className="text-decoration-none text-white" href="#footer">Contact us</a></li>
                        <li className="nav-item"><a className="text-decoration-none text-white" href="#about">About us</a></li>
                        <li className="nav-item"><Link style={{cursor:"pointer"}} className="text-decoration-none text-white" to="/">Home</Link></li>
                    </ul>
                </div>
                <div id="menu" className="w-50 h-100 d-none align-items-center justify-content-end">
                    <MenuIcon onClick={toggleDrawer} style={{ color: "white", fontSize: "40px", cursor: "pointer" }} />
                </div>
            </div>

            <Drawer id="drawer" anchor="right" open={open} onClose={toggleDrawer}>
                <div className="drawer-box h-100" style={{ width: 250, background:"#dfdfdf"}}>
                    <ul className="nav-links w-100 h-100 m-0 p-3">
                        <li className="nav-item p-0 pb-4" style={{borderBottom:"1px solid gray"}}><Link style={{fontSize:"20px", cursor:"pointer"}} className="text-decoration-none text-dark" to="/cars">Cars available</Link></li>
                        <li className="nav-item p-0 pb-4" style={{borderBottom:"1px solid gray"}}><a style={{fontSize:"20px"}} className="text-decoration-none text-dark" href="#footer">Contact us</a></li>
                        <li className="nav-item p-0 pb-4" style={{borderBottom:"1px solid gray"}}><a style={{fontSize:"20px"}} className="text-decoration-none text-dark" href="#about">About us</a></li>
                        <li className="nav-item p-0 pb-4" style={{borderBottom:"1px solid gray"}}><Link style={{fontSize:"20px", cursor:"pointer"}} className="text-decoration-none text-dark" to="/">Home</Link></li>
                    </ul>
                </div>
            </Drawer>
        </nav>
    );
}

export default Navbar;