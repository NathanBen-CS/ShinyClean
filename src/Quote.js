import "./quote.css";
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

import * as FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { Navigate, Router } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import useDetectOS from './useDetectOs';

import { Helmet } from "react-helmet";

const Quote = () => {
    const [makes, setMakes] = useState([]);
    const [selectedMake, setSelectedMake] = useState('');
    const [models, setModels] = useState([]);
    const [modelsDisabled, setModelsDisabled] = useState(true);
    const [seats, setSeats] = useState();

    const [locData, setLocData] = useState();
    const [firstDone, setFirstDone] = useState(false);

    const [addDis, setAddDis] = useState(false);
    const [data, setData] = useState([]);
    const[keys,setKeys] = useState([]);
    const[values,setValues] = useState([]);
    const[quote, setQuote] = useState(0);

    const[details, setDetails] = useState();

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'});

    const navigate = useNavigate();

    let petHairMsg = "";
    let salt = "";
    let addonsQuotes = "";

    const[adds, setAdds] = useState("");

    useEffect(() => {
        const carMakes = [
          "Acura", "Alfa Romeo", "Aston Martin", "Audi",
          "Bentley", "BMW", "Buick", "Cadillac",
          "Chevrolet", "Chrysler", "Dodge", "Ferrari", "FIAT", "Ford",
          "Genesis", "GMC", "Honda", "Hyundai",
          "INFINITI", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Lancia",
          "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren",
          "Mercedes-Benz", "Mclaren", "Mercury", "MINI", "Mitsubishi", "Nissan",
          "Peugeot", "Pontiac", "Porsche", "RAM",
          "Rolls-Royce", "Saturn", "Scion",
          "Smart", "Subaru", "Tesla", "Toyota",
          "Volkswagen", "Volvo"
        ];
        setMakes(carMakes);

        // Fetch models on initial load
        fetchModels();
    }, []);

    const fetchModels = () => {
        // Make sure the CSV file is accessible in the public directory
        const csvFilePath = "/carapi-opendatafeed-sample.csv";

        Papa.parse(csvFilePath, {
            download: true,
            header: true,
            skipEmptyLines: true,

            complete: function (result) {
              const keys = [];
              const values = [];

              result.data.map((d) => {
                keys.push(Object.keys(d));
                values.push(Object.values(d));
            });

              setKeys(keys);
              setValues(values);
              setData(result.data);
            }
            
        });
    };

    const handleMakeHover = (make) => {
        setSelectedMake(make);
        const filteredModels = data.filter(car => car["Make"] === make).map(car => car["Model"]);

        // Remove duplicate models using Set
        const uniqueModels = Array.from(new Set(filteredModels));

        setModels(uniqueModels);
        setModelsDisabled(uniqueModels.length === 0);
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const modelDetails = {
            seats: data.filter(car => car["Model"] === formData.get('model')).map(car => car["Seats"]),
            body: data.filter(car => car["Model"] === formData.get('model')).map(car => car["Body Type"])
        };

        const locData = {
            package: formData.get('package'),
            make: selectedMake,
            model: formData.get('model'),
            seats: modelDetails.seats[0],
            body: modelDetails.body[0]
        };

        // Get all checkboxes with the name "addons"
        const checkboxes = document.querySelectorAll('input[name="addons"]:checked');

        // Create an array to store the values of the checked checkboxes
        const selectedAddons = [];

        // Iterate over the checkboxes and push the values of the checked ones into the array
        checkboxes.forEach((checkbox) => {
            selectedAddons.push(checkbox.value);
        });

        console.log(selectedAddons);

        setLocData(locData)

        console.log("Form Data Submitted: ", data);
        setFirstDone(true);

        let price = 0;
        let list = "";

        let petHairMsg = "";

        if (locData.package === "Platinum Package")
        {
            switch  (modelDetails.seats[0])
            {
                case "2":
                    price = 240;
                break;
                case "4":
                    price = 240;
                break;
                case "5":
                    price = 260;
                break;
                case "7":
                    price = 300;
                break;
            }
            
            if (modelDetails.body[0].toLowerCase().includes("van"))
            {
                price = 320;
            }

            if (modelDetails.body[0].toLowerCase().includes("truck"))
            {
                price = 300;
            }

            list = 
            '<li>*Exterior Hand Wash</li>' +
            '<li>*Wheels and Tires Cleaning</li>' +
            '<li>*High Gloss Tire Shine</li>' +
            '<li>*Exterior Glass Cleaning</li>' +
            '<li>*Fuel Cap Cleaning</li>' +
            '<li>*Bug and Tar Removal</li>' +
            '<li>*Protection Wax</li>' +
            '<li/>' +
            '<li>*Full Interior Vacuuming, Cleaning and Dusting</li>' +
            '<li>*Cleaning Door Jams</li>' +
            '<li>*Steam Cleaning</li>' +
            '<li>*Interior Glass Cleaning</li>' +
            '<li>*Leather/Upholstery Cleaning & Conditioning</li>' +
            '<li>*Mat Cleaning & Conditioning</li>' +
            '<li/>' +
            '<li>*O-Zone Treatment</li>' +
            '<li>*Shampoo & Extract Upholstery & Carpets/Mats</li>' +
            '<li>*All Interior Surface Protection</li>' +
            '<li>*Headliner Treatment</li>' +
            '<li>*Exterior Chrome Restoration</li>' +
            '<li>*Exterior Plastic Restoration</li>' +
            '<li>*Ceramic Wax Treatment</li>' +
            '<li>*Clay Bar Treatment</li>' +
            '<li>*Mat Restoration</li>' +
            '<li>*Clay Bar Treatment and Decontamination</li>' + "<li></li>";
        }
        else if(locData.package === "Gold Package")
        {
            switch  (modelDetails.seats[0])
            {
                case "2":
                    price = 160;
                break;
                case "4":
                    price = 160;
                break;
                case "5":
                    price = 180;
                break;
                case "7":
                    price = 200;
                break;
            }

            if (modelDetails.body[0].toLowerCase().includes("van"))
            {
                price = 220;
            }
            else if (modelDetails.body[0].toLowerCase().includes("truck"))
            {
                price = 220;
            }
    
            list = 
            '<li>*Exterior Hand Wash</li>' +
            '<li>*Wheels and Tires Cleaning</li>' +
            '<li>*High Gloss Tire Shine</li>' +
            '<li>*Exterior Glass Cleaning</li>' +
            '<li>*Fuel Cap Cleaning</li>' +
            '<li>*Bug and Tar Removal</li>' +
            '<li>*Protection Wax</li>' +
            '<li/>' +
            '<li>*Full Interior Vacuuming, Cleaning and Dusting</li>' +
            '<li>*Cleaning Door Jams</li>' +
            '<li>*Steam Cleaning</li>' +
            '<li>*Interior Glass Cleaning</li>' +
            '<li>*Leather/Upholstery Cleaning & Conditioning</li>' +
            '<li>*Mat Cleaning & Conditioning</li>' +
            '<li/>' +
            '<li>*O-Zone Treatment</li>' + '<li></li>';
        }
        else if(locData.package === "Interior")
        {
            switch  (modelDetails.seats[0])
            {
                case "2":
                    price = 120;
                break;
                case "4":
                    price = 120;
                break;
                case "5":
                    price = 130;
                break;
                case "7":
                    price = 150;
                break;
            }
    
                if (modelDetails.body[0].toLowerCase().includes("van"))
                {
                    price = 170;
                }
                else if (modelDetails.body[0].toLowerCase().includes("truck"))
                {
                    price = 150;
                }

                list = '<li>*Full Interior Vacuuming, Cleaning and Dusting</li>' +
                '<li>*Cleaning Door Jams</li>' +
                '<li>*Steam Cleaning</li>' +
                '<li>*Interior Glass Cleaning</li>' +
                '<li>*Leather/Upholstery Cleaning & Conditioning</li>' +
                '<li>*Mat Cleaning & Conditioning</li>'  + '<li></li>';
        }
        else
        {
            switch  (modelDetails.seats[0])
            {
                case "2":
                    price = 60;
                break;
                case "4":
                    price = 60;
                break;
                case "5":
                    price = 70;
                break;
                case "7":
                    price = 80;
                break;
            }
    
                if (modelDetails.body[0].toLowerCase().includes("van"))
                {
                    price = 80;
                }
                else if (modelDetails.body[0].toLowerCase().includes("truck"))
                {
                    price = 80;
                }

            list = '<li>*Exterior Hand Wash</li>' +
                    '<li>*Wheels and Tires Cleaning</li>' +
                    '<li>*High Gloss Tire Shine</li>' +
                    '<li>*Exterior Glass Cleaning</li>' +
                    '<li>*Fuel Cap Cleaning</li>' +
                    '<li>*Bug and Tar Removal</li>' +
                    '<li>*Protection Wax</li>' + '<li></li>';
        }

        selectedAddons.forEach((addon) => {
            if(addon === "Pet Hair Removal")
            {
                switch  (modelDetails.seats[0])
                {
                    case "2":
                        price += 20;
                        petHairMsg = '<li>*Pet Hair Removal Add-on $20</li>';
                    break;
                    case "4":
                        price += 20;
                        petHairMsg = '<li>*Pet Hair Removal Add-on $20</li>';
                    break;
                    case "5":
                        price += 30;
                        petHairMsg = '<li>*Pet Hair Removal Add-on $30</li>';
                    break;
                    case "7":
                        price += 40;
                        petHairMsg = '<li>*Pet Hair Removal Add-on $40</li>';
                    break;
                }

                if (modelDetails.body[0].toLowerCase().includes("van"))
                {
                    price += 10;
                    petHairMsg = '<li>*Pet Hair Removal Add-on $50</li>';
                }
                else if (modelDetails.body[0].toLowerCase().includes("truck"))
                {
                    price += 10;
                    petHairMsg = '<li>*Pet Hair Removal Add-on $40</li>';
                }
            }
            else if (addon === "Full Mat Cleaning" && locData.package === "Exterior")
            {
                addonsQuotes = "<li>*Mat Extraction Add-on $50 (per each mat)</li>";
        
                price += 50;
                list += "<li>*Mat Extraction Add-on $50</li>";
            }
            else if (addon === "Clay Bar & Ceramic Wax Treatment" && !(locData.package === "Platinum Package"))
            {
                let ceramic = "<li>*Clay Bar & Ceramic Wax Treatment Add-on $80</li>";
                price += 80;
        
                if (modelDetails.body[0].toLowerCase().includes("van") || modelDetails.body[0].toLowerCase().includes("truck") || modelDetails.seats[0] == "7")
                {
                    price += 10;
                    ceramic = "<li>*Clay Bar & Ceramic Wax Treatment Add-on $90</li>";
                }
        
                list += ceramic;
                addonsQuotes += ceramic;
            }
            else if (addon === "Exterior Plastic Restoration" && !(locData.package === "Platinum Package"))
            {
                price += 40;
                list += "<li>*Exterior Plastic Restoration Add-on $40</li>";
                addonsQuotes += "<li>*Exterior Plastic Restoration Add-on $40</li>";
            }
            else if (addon === "Pick Up Truck Cargo Bed Cleaning" && modelDetails.body[0].toLowerCase().includes("truck"))
            {
                price += 10;
                list += "<li>*Pick Up Truck Cargo Bed Cleaning Addon $30</li>";
                addonsQuotes += "<li>*Pick Up Truck Cargo Bed Cleaning Addon $30</li>";
            }
            else if (addon === "Ceramic Wax Sealant")
            {
                price += 100;
                list += "<li>*Ceramic Wax Sealant Addon $100</li>";
                addonsQuotes += "<li>*Ceramic Wax Sealant Addon $100</li>";
            }
            else if (addon === "Salt Removal")
            {
                price += 25;
                list += '<li>*Salt Removal Add-on $25</li>';
                addonsQuotes += '<li>*Salt Removal Add-on $25</li>';
            }
        });

        list += petHairMsg;
        addonsQuotes += petHairMsg;

        setQuote(price);
        setAdds(addonsQuotes);
        setDetails(list);
    };

    const handleSubmit2 = (e) =>{

        e.preventDefault();
        const formData = new FormData(e.target);
        const personalData = {
            firstName: formData.get('firstname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            date: formData.get('date'),
        };

        console.log("Form Data Submitted: ", data);
        // You can send this data to a server or API here

        const formDataString =
          "First Name: " + personalData.firstName + "<br>" +
          "Email: " + personalData.email + "<br>" +
          "Phone: " + personalData.phone + "<br>" +
          "Address: " + personalData.address + "<br>" +
          "Date: " + personalData.date + "<br>" +
          "Package: " + locData.package + "<br>" +
          "Make: " + locData.make + "<br>" +
          "Model: " + locData.model + "<br>" +
          "Seats: " + locData.seats + "<br>" +
          "Addons:" + "<div>" + adds + "</div>" +
          "Estimated Quote: " + quote;
              
      mg.messages.create('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {
        from: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        to: ["shinycleanwash@gmail.com"],
        subject: "Quote Estimation",
        text: formDataString,
        html: `<b>${formDataString}</b>`
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.log(err)); // logs any error

      alert("Thank you for your interest in Shinyclean detailing, our team will get back to you shortly");
      navigate("/");
    };

    useDetectOS();

    return (
    <div>
            <Helmet>
            <title>Quote</title>
            <meta name="description" content="Using our payment calculator, get a quote for a package and car of your choice right away! Right after, fill out our form for any questions or to book now"></meta>
            <link rel="canonical" href="https://shinycleandetailing.com/quote-inquiry"/>;
            </Helmet> 
        <div className="bannerQ">
            <h1 className="qCap">USING OUR PAYMENT CALCULATOR</h1>
            <h2 className="qTitle">GET A PRICE & CONTACT US</h2>
        </div>
        <div className="entireQuote">
            {firstDone && <div className="quote">
                <h2 className="instCap">{`Your Estimated price is: $` + quote}</h2>
                    <div className="services">Services Performed
                        <h2packageQuote dangerouslySetInnerHTML={{ __html: details }}/>
                    </div>
                    <div className="terms">*Extra charges may apply depending on the condition of the vehicle. Note this is for estimate purposes only.*</div>
            </div>}
            <div className="quote">
                {!firstDone && <h2 className="instCap">Get a Price Estimate</h2>}
                <div>
                {firstDone && <h2 className="instCap">Contact us for an Appointment</h2>}
                </div>
                <div>
                    { !firstDone && (<form onSubmit={handleSubmit}>
                        <label>Package type: </label>
                        <select name="package" required>
                            <option value="">--Select Package--</option>
                            <option value="Platinum Package">Platinum Package</option>
                            <option value="Gold Package">Gold Package</option>
                            <option value="Interior">Interior</option>
                            <option value="Exterior">Exterior</option>
                        </select>

                        <div class="dropdown">
                            <label>Add-ons: </label>
                            <button type="button">--Select Add-ons--</button>
                            <div class="dropdown-content">
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="pet-hair-removal" name="addons" value="Pet Hair Removal"/>
                                    <label for="pet-hair-removal">Pet Hair Removal</label>
                                </div>
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="full-mat-cleaning" name="addons" value="Full Mat Cleaning"/>
                                    <label for="full-mat-cleaning">Mat Extraction</label>
                                </div>
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="clay-bar-treatment" name="addons" value="Clay Bar & Ceramic Wax Treatment"/>
                                    <label for="clay-bar-treatment">Clay Bar Treatment & Ceramic Wax</label>
                                </div>
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="plastic-restoration" name="addons" value="Exterior Plastic Restoration"/>
                                    <label for="plastic-restoration">Exterior Plastic Restoration</label>
                                </div>
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="cargo-bed-cleaning" name="addons" value="Pick Up Truck Cargo Bed Cleaning"/>
                                    <label for="cargo-bed-cleaning">Pick Up Truck Cargo Bed Cleaning</label>
                                </div>
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="ceramic-wax-sealant" name="addons" value="Ceramic Wax Sealant"/>
                                    <label for="ceramic-wax-sealant">Ceramic Wax Sealant</label>
                                </div>
                                <div class="addon-item">
                                    <input className="checkbox" type="checkbox" id="salt-removal" name="addons" value="Salt Removal"/>
                                    <label for="salt-removal">Salt Removal</label>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="makes">Select Car Make:</label>
                        <select
                            id="makes"
                            onChange={(e) => handleMakeHover(e.target.value)}
                            required
                        >
                            <option value="">--Select Make--</option>
                            {makes.map((make) => (
                                <option key={make} value={make}>{make}</option>
                            ))}
                        </select>

                        <label htmlFor="models">Select Car Model:</label>
                        <select id="models" name="model" disabled={modelsDisabled} required>
                            <option value="">--Select Model--</option>
                            {models.map((model) => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>

                        <button type="submit" className="submit-button">Continue</button>
                    </form>)}

                    { firstDone && (
                        <form onSubmit={handleSubmit2}>
                            <label>First name: </label>
                            <input type="text" name="firstname" required />
                            
                            <label>Email: </label>
                            <input type="email" name="email" required />
                            
                            <label>Phone Number (optional): </label>
                            <input type="tel" name="phone" />

                            <label>Address: </label>
                            <input type="text" name="address" required />

                            <label>Preferred Date: </label>
                            <input type="date" name="date" required />

                            <label>Any Questions: </label>
                            <textarea type="text" name="other"/>

                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </div>    
       
    );
}

export default Quote;
