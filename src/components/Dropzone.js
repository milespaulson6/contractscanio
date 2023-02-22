import React from "react";
import { useDropzone } from "react-dropzone";
import {IoMdCloudUpload, IoIosClose} from "react-icons/io";

function Dropzone({ open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
      useDropzone({
        accept: {
          'pfd': ['.pdf']
        },
        // can only upload 1 file at a time
        maxFiles: 1
      });

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
        <div {...getRootProps({ className: "dropzoneStyle" })}>
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
    );
  }

export default Dropzone;