import React from "react";
import { Link } from 'react-router-dom'
import {IoIosFingerPrint} from "react-icons/io";

const PresentSummary = () => {
    return (
        <div>
            <div style={{ marginTop: "30px", marginLeft: "50px", color: "#607d8b" }}>
                <Link to='/' className='navLink'>Go Home</Link>
            </div>
            <div className="text-center">
                <h2 style={{ marginTop: "10px", marginBottom: "20px", color: "#607d8b" }}>Summary</h2>
                <br />
                <p><IoIosFingerPrint className="textColor" /> Something cool will be here</p>
                
                {/* TODO: add summary stuff here */}

            </div>
        </div>
    )
}

export default PresentSummary