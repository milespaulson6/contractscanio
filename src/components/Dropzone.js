import React, {useState} from "react";
import { useDropzone } from "react-dropzone";
import {IoMdCloudUpload, IoIosClose} from "react-icons/io";

import {uploadFile} from 'react-s3';
import S3FileUpload from 'react-s3';
import S3 from 'react-aws-s3';
import AWS from 'aws-sdk'
// import {
//   getSignedUrl,
//   S3RequestPresigner,
// } from "@aws-sdk/s3-request-presigner";
// import { parseUrl } from "@aws-sdk/url-parser";
// import { formatUrl } from "@aws-sdk/util-format-url";
// import { Hash } from "@aws-sdk/hash-node";

https://contractscaniobucket.s3.amazonaws.com/contracts/

//import {Buffer} from 'buffer';
window.Buffer = window.Buffer || require("buffer").Buffer;

const config = {
  bucketName: 'contractscaniobucket',
  dirName: 'contracts', 
  region: 'us-east-1',
  accessKeyId: 'AKIAV5TSQ3FNSZAWIPWV',
  secretAccessKey: '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',
  s3Url: 'https://contractscaniobucket.s3.amazonaws.com/'
}



function Dropzone({ open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
      useDropzone({
        accept: {
          'application/pdf': ['.pdf']
        },
        // can only upload 1 file at a time
        maxFiles: 1
      });

    const S3_BUCKET ='contractscaniobucket';
    const REGION ='us-east-1';
    
    AWS.config.update({
      accessKeyId: 'AKIAV5TSQ3FNSZAWIPWV',
      secretAccessKey: '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'
    })

    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
    })

    const UploadImageToS3WithReactS3 = (file) => {
  
      const handleUpload = async (file) => {
          uploadFile(file, config)
              .then(data => console.log(data))
              .catch(err => console.error(err))
      }
  
  }

  
  
    
    // const ReactS3Client = new S3(config);

    // const newFileName = 'blah';

    // const uploadToS3 = (file) => () => {
    //   ReactS3Client
    //   .uploadFile(file, newFileName)
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err))
    // }


    // const uploadToS3 = (file) => () => {
    //   console.log('uploadFile called', file)
    //   S3FileUpload
    //   .uploadFile(file, config).then(data => console.log(data)).catch(err => console.error(err))
    // }
      
    // add ability to remove file
    const removeFile = (file) => () => {
      console.log('removeFile...')
      acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
      console.log(acceptedFiles)
    }

    // display file info and button to remove file
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} 
        <button className="btn" onClick={removeFile(file)}><IoIosClose /></button>
      </li>
    ));

    return (
        <div>
          <div {...getRootProps({ className: "dropzoneStyle col-5" })}>
          <input className="input-zone" {...getInputProps()} />
          <div className="text-center">
            {isDragActive ? (
              <p className="dropzone-content">
                Release to drop the files here
              </p>
              
            ) : (
              <h1 className="dropzone-content">
                <IoMdCloudUpload  className="textColor"/>
              </h1>
            )}
            <button type="button" onClick={open} className="btn">
              Drag & drop file here or click to select file
            </button>
            <br />
            <i>(only accepts *.pdf files)</i>
          </div>
          <aside>
            <br />
            <strong><ul>{files}</ul></strong>
          </aside>
        </div>
        {/* <button className="btn" onClick={UploadImageToS3WithReactS3(files[0])}>Upload to S3</button> */}
      </div>
    );
}

export default Dropzone;