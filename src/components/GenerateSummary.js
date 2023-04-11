import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { IoIosFingerPrint, IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { API_URL } from "../constants";
// import { ThreeDots } from "react-loader-spinner";

export default class TestUpload extends React.Component {
  state = {
    pk: 0,
    file: "",
    contract_type: "",
    results: {},
    progress: 0,
    // loading: false,
    uploaded: false,
  };

  // shows loading dots while awaiting API response
  // LoadingIndicator = () => {
  //   if (this.state.loading)
  //     return (
  //       <>
  //         <p
  //           style={{
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             color: "#607d8b",
  //           }}
  //         >
  //           <br />
  //           Generating your summary (this may take a minute)
  //         </p>
  //         <div
  //           style={{
  //             width: "100%",
  //             height: "100",
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}
  //         >
  //           <ThreeDots color="#607d8b" height="100" width="100" />
  //         </div>
  //       </>
  //     );
  // };

  // shows results on the page
  PresentSummary = () => {
    if (this.state.uploaded)
      return (
        <>
          {/* Container to show results */}
          <div className="container">
            <div className="text-center">
              <h2
                style={{
                  marginTop: "30px",
                  color: "#607d8b",
                }}
              >
                View summary here
              </h2>
            </div>
            {/* Loading dots */}
            {/* <this.LoadingIndicator /> */}
            <div>
              <div
                style={{
                  marginTop: "50px",
                  marginBottom: "50px",
                  marginLeft: "75px",
                  marginRight: "75px",
                }}
              >
                {Object.entries(this.state.results).map(([key, value]) => (
                  <div key={key}>
                    <ol>
                      <strong>{key}:</strong>
                      {value.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
  };

  // shows form to upload contract here
  UploadForm = () => {
    if (!this.state.uploaded)
      return (
        <>
          {/* Form to upload document */}
          <div style={{ marginTop: "30px" }} className="container">
            <div className="text-center">
              <h2
                style={{
                  marginTop: "20px",
                  marginBottom: "0px",
                  color: "#607d8b",
                }}
              >
                Generate contract summary here
              </h2>
              <br />
              <h6>
                <IoIosFingerPrint className="textColor" /> Submit a file below.
                Rest assured, contractscan.io doesn't store any information
                uploaded to our site.
              </h6>
              <br />
            </div>

            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "100px",
                marginRight: "150px",
              }}
            >
              <Form onSubmit={this.newContract}>
                <FormGroup>
                  <Label for="contract_type">Type of contract:</Label>
                  <Input
                    type="select"
                    name="contract_type"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.contract_type)}
                  >
                    <option>Choose one</option>
                    <option>Employment contract</option>
                    <option>Rental contract</option>
                    <option>Mortgage agreement</option>
                    <option>Lease agreement</option>
                    <option>Other</option>
                  </Input>
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
                <Button>Submit</Button>
                <br />
              </Form>
            </div>
          </div>
        </>
      );
  };

  // componentDidMount() {
  //   if (this.props.contract) {
  //     const { pk, file, contract_type } = this.props.contract;
  //     this.setState({ pk, file, contract_type });
  //   }
  // }

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
      formData.append("contract_type", this.state.contract_type);
      e.preventDefault();

      // this.setState({ loading: true });
      // return results back from API
      const response = await axios.post(API_URL, formData);
      // this.setState({ loading: false });

      // set the API results in the state
      this.setState({ results: response.data["results"]["results"] });
      console.log(response.data["results"]["results"]);
      console.log(this.state.results);
      console.log(this.state.uploaded);
      // console.log(this.state.loading);
      // set uploaded to true to show View Summary on page
      this.setState({ uploaded: true });
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
          style={{ marginTop: "25px", marginLeft: "50px", color: "#607d8b" }}
        >
          <Link to="/" className="navLink">
            <IoIosArrowRoundBack /> Go Back
          </Link>
          <br />
        </div>
        <this.UploadForm />
        <this.PresentSummary />
      </div>
    );
  }
}
