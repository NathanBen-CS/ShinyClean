import "./package.css";
import {Helmet} from 'react-helmet-async';

const Packages = () => {
    return (
        
        <div className="pack"> 
        <Helmet>
        <title>Packages</title>
        <meta name="description" content="Checkout our premium packages, addons and competitive pricing"></meta>
        <link rel="canonical" href="https://shinycleandetailing.com/mobile-packages"/>;
        </Helmet> 
            <div className="bannerP">
                <h1 className="pCap">SELECT FROM OUR CONVENIENT</h1>
                <h2 className="pTitle">MOBILE PACKAGES</h2>
            </div>
            <ul className = "packages"> 
                <li className="exWrap">
                    <h2 className="bl">E X T E R I O R&nbsp;&nbsp;&nbsp;D E T A I L</h2>
                    <b>From</b>
                    <h2 style={{ fontSize: '30px' }}>$60</h2>
                    <ul className="prices">
                        <li>SMALL CAR (2 DRS)  $60</li>
                        <li>SEDAN/SUV (5 SEATS)  $70</li>
                        <li>PICKUP TRUCK/SUV (7 SEATS)  $80</li>
                        <li>MINIVAN/SUV XL  $80</li>
                    </ul>
                    <ul className ="ex">
                        <li>*Exterior Hand Wash</li>
                        <li>*Wheels and Tires Cleaning</li>
                        <li>*High Gloss Tire Shine</li>
                        <li>*Exterior Glass Cleaning</li>
                        <li>*Fuel Cap Cleaning</li>
                        <li>*Bug and Tar Removal</li>
                        <li>*Protection Wax</li>
                    </ul>
                </li>
                <li className="goWrap">
                    <h2 className="most" style={{ fontSize: '45px' }}>Most Popular</h2>
                    <h2 className="bl">G O L D&nbsp;&nbsp;&nbsp;P A C K A G E</h2>
                    <b>From</b>
                    <h2 style={{ fontSize: '30px' }}>$160</h2>
                    <ul className="prices">
                        <li>SMALL CAR (2 DRS)  $160</li>
                        <li>SEDAN/SUV (5 SEATS)  $180</li>
                        <li>PICKUP TRUCK/SUV (7 SEATS)  $200</li>
                        <li>MINIVAN/SUV XL $220</li>
                    </ul>
                    <ul className="go">
                        <li>*Complete Exterior Detailing</li>
                        <li>*Complete Interior Detailing</li>
                        <li>&nbsp;</li>
                        <li>*O-Zone Treatment</li>
                    </ul>
                </li>
                <li className="inWrap">
                <h2 className="bl">I N T E R I O R&nbsp;&nbsp;&nbsp;D E T A I L</h2>
                    <b>From</b>
                    <h2 style={{ fontSize: '30px' }}>$120</h2>
                    <ul className="prices">
                        <li>SMALL CAR (2 DRS)  $120</li>
                        <li>SEDAN/SUV (5 SEATS)  $130</li>
                        <li>PICKUP TRUCK/SUV (7 SEATS)  $150</li>
                        <li>MINIVAN/SUV XL $170</li>
                    </ul>
                    <ul className ="in">
                        <li>*Full Interior Vacuuming, Cleaning and Dusting</li>
                        <li>*Cleaning Door Jams</li>
                        <li>*Steam Cleaning</li>
                        <li>*Interior Glass Cleaning</li>
                        <li>*Leather/Upholstery Cleaning & Conditioning</li>
                        <li>*Mat Cleaning & Conditioning</li>
                    </ul>
                </li>
            </ul>
            <li className="plWrap">
                <h2 className="platLogo">P L A T I N U M&nbsp;&nbsp;&nbsp;P A C K A G E</h2>
                <b>From</b>
                    <h2 style={{ fontSize: '30px' }} className="platPrice">$240</h2>
                    <ul className="plPrices">
                        <li>SMALL CAR (2 DRS)  $240</li>
                        <li>SEDAN/SUV (5 SEATS)  $260</li>
                        <li>PICKUP TRUCK/SUV (7 SEATS)  $300</li>
                        <li>MINIVAN/SUV XL $320</li>
                    </ul>
                    <ul className="pl">
                        <li>*Complete Exterior Detailing</li>
                        <li>*Complete Interior Detailing</li>
                        <li>*O-Zone Treatment</li>
                        <li>&nbsp;</li>
                        <li>*Shampoo & Extract Upholstery & Carpets/Mats</li>
                        <li>*All Interior Surface Protection</li>
                        <li>*Headliner Treatment</li>
                        <li>*Exterior Chrome Restoration</li>
                        <li>*Exterior Plastic Restoration</li>
                        <li>*Ceramic Wax Treatment (2 Month Protection)</li>
                        <li>Mat Restoration</li>
                        <li>*Clay Bar Treatment and Decontamination</li>
                    </ul>
            </li>
            <h2 className="upgrTitle">UPGRADE YOUR PACKAGES</h2>
            <h2 className="addLogo">A D D - O N S</h2>
            <div className="addBox">
                <table id="addonTypes" className="addPrices">
                    <thead className="addHead">
                        <tr>
                            <th></th>
                            <th>Pet Hair Removal</th>
                            <th>Mat Extraction</th>
                            <th>Clay Bar & Ceramic Wax Treat (2 Mth Protection)</th>
                            <th>Exterior Plastic Restoration</th>
                            <th>Pick Up Truck Cargo Bed Cleaning</th>
                            <th>Salt Removal</th>
                            <th>Ceramic Wax Sealant (6 Mth Protection)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SMALL CAR (2 DRS)</td>
                            <td>$20</td>
                            <td>$50</td>
                            <td>$80</td>
                            <td>$40</td>
                            <td>$30</td>
                            <td>$25</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>SEDAN/SUV (5 SEATS)</td>
                            <td>$30</td>
                            <td>$50</td>
                            <td>$80</td>
                            <td>$40</td>
                            <td>$30</td>
                            <td>$25</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>PICKUP/SUV (7 SEATS)</td>
                            <td>$40</td>
                            <td>$50</td>
                            <td>$90</td>
                            <td>$40</td>
                            <td>$30</td>
                            <td>$25</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>MINIVAN/SUV XL</td>
                            <td>$50</td>
                            <td>$50</td>
                            <td>$90</td>
                            <td>$40</td>
                            <td>$30</td>
                            <td>$25</td>
                            <td>$100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    );
}

export default Packages;
