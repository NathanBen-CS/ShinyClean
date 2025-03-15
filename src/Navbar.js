import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <a href="/">
                    <img className="Logo1" src={"/log1.png"} alt="ShinyClean"/>
                </a>
            </div>
            <div className="links">
                <Link to="/mobile-packages">MOBILE PACKAGES</Link>
                <Link to="/about-us">ABOUT US</Link>
                <Link to="/quote-inquiry">QUOTE INQUIRY</Link>
                <a target='blank' href="https://www.instagram.com/shinycleandetailing/">
                    <img className="logo2" src={"/insta-logo.png"} alt="ShinyClean"/>
                </a>
            </div>
            <div className="phone-wrapper">
                <div className="phoneNumber">
                    <a href="tel:6476094849">647-609-4849</a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;