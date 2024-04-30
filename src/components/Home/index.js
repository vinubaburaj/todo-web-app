import { useSelector } from "react-redux";
import SideNavbar from "../Navbar";

function HomePage() {
    const navbarOpen = useSelector((state) => state.navbarReducer.navbarOpen);
    return(
        <>
        <h3>Welcome to the HomePage. Hehe.</h3>
        <SideNavbar />

        {/* The style below shifts the margin on the left based on whether the navbar is open or closed */}
        <div style={{ marginLeft: navbarOpen ? 240 : 0, transition: 'margin .2s' }}>
          <p>NavBar state: {navbarOpen? 'Open' : 'Closed'}</p>
        </div>
       
        </>
    )
}

export default HomePage;