import './NavBar.css'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
      <div className="bigDiv">  
        <div className="topnav">
            <Link to="/">Home</Link>
        </div>
        <div className="topnav">
         <Link to='/about'>About</Link>
        </div>
        </div>

    )
}

export default NavBar;