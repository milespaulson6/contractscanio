import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosFingerPrint, IoIosArrowRoundBack} from "react-icons/io";
import Dropzone from './Dropzone';
import Button from './Button';
import { Dropdown } from 'bootstrap';

const GenerateSummary = () => {

    const options = [
        { label: 'Employment Offer', value: 'Employment Offer' },     
        { label: 'Rental Contract', value: 'Rental Contract' },     
        { label: 'Mortgage Agreement', value: 'Mortgage Agreement' },     
    ];

    const [value, setValue] = React.useState('fruit');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const Dropdown = ({ label, value, options, onChange }) => {
        return (       
          <label>       
            {label}       
            <select value={value} onChange={onChange}>       
              {options.map((option) => (       
                <option value={option.value}>{option.label}</option>       
              ))}       
            </select>       
          </label>       
        );
       
       };

    return (
        <div>
            <div style={{ marginTop: "30px", marginLeft: "50px", color: "#607d8b" }}>
                <Link to='/' className='navLink'><IoIosArrowRoundBack /> Go Back</Link>
            </div>
            <div className="text-center">
                <h2 style={{ marginTop: "10px", marginBottom: "20px", color: "#607d8b" }}>Generate contract summary here</h2>
                <p><IoIosFingerPrint className="textColor" /> Upload a file below. Rest assured, contractscan.io 
                    doesn't store any information uploaded to our site.</p>
                
                <div>
                    <Dropzone />
                </div>
                <br />           
                <div>
                    <Dropdown
                    label="Select contract type: "
                    options={options}
                    value={value}
                    onChange={handleChange}
                    />
                    {/* Select contract type: 
                    <select >
                        {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    </label> */}
                </div>
                <br />
                <Link to="/PresentSummary">
                        <Button color='#abd4ff' text='Generate Summary' />
                    </Link> 

            </div>
        </div>
    )
}

export default GenerateSummary