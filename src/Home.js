import { Link } from 'react-router-dom';
import "./home.css";
import useDetectOS from './useDetectOs';

const Home = () => {
    useDetectOS();
    return ( 
        <div className='prob'>
            <div className='home'>
                <div className="pic-wrapper">
                    <h className="mobile">Mobile Services</h>
                    <img className="mainlogo" src="MainLogo.png"></img>
                    <h className="caption">Most trusted detailing services in</h>
                    <h className="caption">King City area.</h>
                </div>
            </div>
            <div class="galleryWrap">
                    <h2>OUR WORK</h2>
                    <ul class="gallery">
                        <li class="imgBox">
                            <img src="1.png" alt="Black Porshe 911 Exterior Detail" loading="lazy"/>
                        </li>
                        <li class="imgBox">
                            <img src="2.png" alt="Space Gray Porshe 911 Exterior Detail" loading="lazy"/>
                        </li>
                        <li class="imgBox">
                            <img src="3.png" alt="Light Gray Porshe 911 Exterior Detail" loading="lazy"/>
                        </li>
                        <li class="imgBox">
                            <img src="4.png" alt="White Porshe Macan Exterior Detail" loading="lazy"/>
                        </li>
                        <li class="imgBox">
                            <img src="5.png" alt="Gray Mercedes E-class Exterior Detail" loading="lazy"/>
                        </li>
                        <li class="imgBox">
                            <img src="6.png" alt="Black BMW x7 Exterior Detail" loading="lazy"/>
                        </li>
                    </ul>
                </div>
            <h1 style={{display: "none"}}>Shiny Clean Detailing</h1>
        </div>
     );
}
 
export default Home;