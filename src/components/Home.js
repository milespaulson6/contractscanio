import React from "react";
import Button from "./Button";
import {IoIosFingerPrint} from "react-icons/io";
//import {IoIosClipboard} from "react-icons/io";
import { Link } from 'react-router-dom';
//import { API_URL } from "../constants";

const Home = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="text-center">
        <h1 style={{ marginTop: "65px", marginBottom: "50px", color: "#607d8b" }}>What Contractscan.io does for you</h1>
        <div>
          <p><IoIosFingerPrint className="textColor" /> Quickly extracts key information from any type of legal document</p>
          {/* <h4><IoIosClipboard style={{ height: "40px" }} /></h4> */}
          <br />
        </div>
        <div>
          <p><IoIosFingerPrint className="textColor" /> Presents summary information in a page-by-page format</p>
          <br />
        </div>
        <div>
          <p><IoIosFingerPrint className="textColor" /> Gives you the confidence in understanding a document before you sign</p>
        </div>
        <br />
        <Link to="/GenerateSummary">
          <Button color='#abd4ff' text='Get started' />
        </Link> 
      </div>
    </div>
  );
}

export default Home;