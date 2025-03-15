import './about.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
    
    return ( 
        <div className='about'>
            <Helmet>
            <title>About Us</title>
            <meta name="description" content="Welcome to ShinyClean Detailing! We are a mobile auto detailing business with a team who are committed to providing the best possible care for your vehicle."></meta>
            <link rel="canonical" href="https://shinycleandetailing.com/about-us"/>;
            </Helmet> 
            <div className="bannerA">
                <h1 className="aCap">MOST TRUSTED DETAILING SERVICES IN KING CITY AREA</h1>
                <h2 className="aTitle">ABOUT SHINYCLEAN</h2>
            </div>
            <div className='aboutCon'>
                <div className='aboutDes'>
                    <b>Welcome to ShinyClean Detailing! We are a mobile auto detailing business with a team who are committed to providing the best possible care for your vehicle. We understand that your car is more than just a mode of transportation; it's an investment. That's why we take great care to ensure that every vehicle we work on is treated with the utmost respect and attention to detail.</b>
                    <div>&nbsp;</div>
                    <b>With our mobile service, we come to you, wherever you are, whether it's at home, work, or even while you're out enjoying your day. We believe in using only the best products and techniques to get the job done. From eco-friendly cleaning solutions to the latest in detailing technology, we are dedicated to delivering the highest quality results possible. </b>
                </div>
                <img alt="Car interior shiny clean" src='Int.png'></img>
            </div>
        </div>

     );
}
 
export default About;