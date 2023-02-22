import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosFingerPrint, IoIosArrowRoundBack} from "react-icons/io";
import Dropzone from './Dropzone';
import Button from './Button';

const GenerateSummary = () => {
    return (
        <div>
            <div style={{ marginTop: "30px", marginLeft: "50px", color: "#607d8b" }}>
                <Link to='/' className='navLink'><IoIosArrowRoundBack /> Go Back</Link>
            </div>
            <div className="text-center">
                <h2 style={{ marginTop: "10px", marginBottom: "20px", color: "#607d8b" }}>Generate contract summary here</h2>
                <br />
                <p><IoIosFingerPrint className="textColor" /> Upload a file below. Rest assured, contractscan.io 
                    doesn't store any information uploaded to our site.</p>
                
                <div>
                    <br />
                    <Dropzone />
                </div>
                <br />                
                <Link to="/PresentSummary">
                    <Button color='#abd4ff' text='Generate Summary' />
                </Link> 
                
                {/* TODO: add upload box here
                TODO: add contract selection drop down here
                TODO: add generate summary button here */}

            </div>
        </div>
    )
}

export default GenerateSummary