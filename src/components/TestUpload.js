import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosFingerPrint, IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { API_URL } from "../constants";

class TestUpload extends React.Component {
  state = {
    pk: 0,
    file: "",
    name: "",
    contract_type: "",
    results: {},
    progress: 0,
  };

  componentDidMount() {
    if (this.props.contract) {
      const { pk, file, name, contract_type } = this.props.contract;
      this.setState({ pk, file, name, contract_type });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.newContract.bind(this);
  };

  onFileChange = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  newContract = async (e) => {
    // if a file was added, append to form data and send to API
    if (this.state.file) {
      const formData = new FormData();
      formData.append("file", this.state.file);
      formData.append("name", this.state.name);
      formData.append("contract_type", this.state.contract_type);
      e.preventDefault();

      this.setState({ progress: 50 });

      // return results back from API
      const response = await axios.post(API_URL, formData);

      if (response) {
        this.setState({ progress: 100 });
      }

      // set the API results in the state
      this.setState({ results: response.data["results"]["results"] });
    }
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <div>
        {/* back arrow */}
        <div
          style={{ marginTop: "30px", marginLeft: "50px", color: "#607d8b" }}
        >
          <Link to="/" className="navLink">
            <IoIosArrowRoundBack /> Go Back
          </Link>
          <br />
        </div>

        {/* Form to upload document */}
        <div
          style={{ marginTop: "50px", marginBottom: "100px" }}
          className="container"
        >
          <div className="text-center">
            <h2
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                color: "#607d8b",
              }}
            >
              Generate contract summary here
            </h2>
            <br />
            <h5>
              <IoIosFingerPrint className="textColor" /> Upload a file below.
              Rest assured, contractscan.io doesn't store any information
              uploaded to our site.
            </h5>
            <br />
          </div>

          <div
            style={{
              marginTop: "20px",
              marginBottom: "50px",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            <Form onSubmit={this.newContract}>
              <FormGroup>
                <Label for="name">Name of contract:</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.name)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contract_type">Type of contract:</Label>
                <Input
                  type="contract_type"
                  name="contract_type"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.contract_type)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="file">
                  Upload file (only accepts *.pdf files):
                </Label>
                <Input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    this.onFileChange(event);
                    this.value = this.defaultIfEmpty(this.state.file);
                  }}
                />
              </FormGroup>
              <br />
              <Button>Send</Button>
            </Form>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: "70px", marginBottom: "100px" }}>
            {this.state.file && (
              <div className="progress mb-3">
                <div
                  className="progress-bar progress-bar-info progress-bar-striped"
                  role="progressbar"
                  aria-valuenow={this.state.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: this.state.progress + "%" }}
                >
                  {this.state.progress}%
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Container to show results */}
        <div className="container">
          <div className="text-center">
            <h2
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                color: "#607d8b",
              }}
            >
              View summary here
            </h2>
          </div>
          <div>
            {Object.entries(this.state.results).map(([key, value]) => (
              <ol key={key}>
                <strong>{key}:</strong>{" "}
                {value.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TestUpload;
