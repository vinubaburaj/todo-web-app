import { useSelector } from "react-redux";
import SideNavbar from "../Navbar";
import {Button} from "@mui/material";

function HomePage() {
    const navbarOpen = useSelector((state) => state.navbarReducer.navbarOpen);
    return(
        <>
        <h3>Welcome to the HomePage. Hehe.</h3>
        <SideNavbar />

        {/* The style below shifts the margin on the left based on whether the navbar is open or closed.
         All the elements who have to show this shifting property should be defined within
         the div below.
         */}
        <div style={{ marginLeft: navbarOpen ? 240 : 0, transition: 'margin .2s' }}>
          <p>NavBar state: {navbarOpen? 'Open' : 'Closed'}</p>
            <Button color={"primary"} variant={"contained"}>
                Test Button
            </Button>
        </div>



       
        </>
    )
}

export default HomePage;