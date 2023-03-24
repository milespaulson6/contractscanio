import React, {Component} from "react";
import { Link } from 'react-router-dom'
import {IoIosFingerPrint} from "react-icons/io";
import ReactS3 from "react-s3";
window.Buffer = window.Buffer || require("buffer").Buffer;

const config = {
    bucketName: 'contractscaniobucket',
    dirName: 'contracts', 
    region: 'us-east-1',
    //accessKeyId: 'AKIAV5TSQ3FNSZAWIPWV',
    accessKeyId: 'AKIAV5TSQ3FNXNNSMLMY',
    secretAccessKey: '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',
    //secretAccessKey: 'ukuJ1STwb/gilrMB7iT+3/eoJIsvy7EQFKG+ydS6',
    //s3Url: 'https://contractscaniobucket.s3.amazonaws.com/'
  }

//   const filename = 'test.pdf';
class PresentSummary extends Component {
    upload(e) {
        var file = e.target.files || e.dataTransfer.files;
        if (!file.length)
        {
            return;
        }
        const formFile = file[0];
        console.log(formFile);
        //console.log(e.target.files[0]);
        ReactS3.uploadFile(formFile, config)
            .then((data)=> {
                console.log(data);
            })
            .catch((err)=> {
                alert(err);
            })
    }

    render() {    
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

                    <div style={{ marginBottom: "200px" }}></div>
                </div>
            </div>
        )
    }   
}

export default PresentSummary


//react-pdf