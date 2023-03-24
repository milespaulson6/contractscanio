import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from 'react-router-dom';
import {IoIosFingerPrint, IoIosArrowRoundBack} from "react-icons/io";
import PresentSummary from "./PresentSummary";
import axios from "axios";
import { API_URL } from "../constants";

class TestUpload extends React.Component {

    state = {
        pk: 0,
        file: "",
        name: "",
        contract_type: "",  
        results: {}
    };

    componentDidMount() {
        if (this.props.contract) {
        const { pk, file, name, contract_type } = this.props.contract;
        this.setState({ pk, file, name, contract_type });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        // this.newContract.bind(this);
    };

    onFileChange = e => { 
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    newContract = async (e) => {
        console.log("newContract called");
    
        if (this.state.file) {
            console.log("there was a file added");

            const formData = new FormData();
            formData.append('file', this.state.file);            
            formData.append('name', this.state.name);
            formData.append('contract_type', this.state.contract_type);

            console.log(this.state.file);

            e.preventDefault();

            const response = await axios.post(API_URL, formData);/*.then(() => {
                this.props.resetState();
                this.props.toggle();
            });*/

            

            this.setState({results: response.data['results']['results']});
            console.log("object keys: ", Object.keys(this.state.results));

            if(response.data)
            {
                console.log('it works!');
                console.log('response,data,' , (response.data));
            }
            var apiResults = Array.from(response.data['results']['results']['you will <verb>']);        
            
            Response(apiResults);

            return (
                <div></div>
                    // <li>{oneResult}</li>
                
            )
        };
    };

   
    

    buildList(apiResponse) {
        const spartanG = Array.from(apiResponse);

        console.log("apiResults array: ", spartanG);

        return (
            <div>
                {spartanG.map(dog => <li key={dog}>{dog}</li>)}
                {/* { {spartanG.map((dogs) => (
                    <li key={dogs}>{dogs}</li>
                ))} } */}
                
            </div>
        );
    };


    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

  render() {
    return (
        <div>
            <div style={{ marginTop: "30px", marginLeft: "50px", color: "#607d8b" }}>
                <Link to='/' className='navLink'><IoIosArrowRoundBack /> Go Back</Link>
                <br />
                
                <div style={{marginTop: "50px", marginBottom: "100px"}} className="container">
                    <ol>
                        {

                            Object.entries(this.state.results)
                            .map( ([key, value]) => <li key={key}>{key}: {value
                                .map(item => <li key={item}>{item}</li>)}</li>)

                        }
                    </ol>
                </div>
                
            </div>

            <div style={{marginTop: "50px", marginBottom: "100px"}} className="container">
                <div className="text-center">
                    <h2 style={{ marginTop: "10px", marginBottom: "20px", color: "#607d8b" }}>Generate contract summary here</h2>
                    <br />
                    <h5><IoIosFingerPrint className="textColor" /> Upload a file below. Rest assured, contractscan.io 
                        doesn't store any information uploaded to our site.</h5>
                    <br />
                </div>
                <div style={{marginTop: "20px", marginBottom: "100px", marginLeft: "100px", marginRight: "100px"}} >
                    <Form onSubmit={ this.newContract}>
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
                        <Label for="file">Upload file (only accepts *.pdf files):</Label>
                        <Input
                            type="file"
                            name="file"
                            onChange={(event)=> {
                                this.onFileChange(event)
                                this.value = this.defaultIfEmpty(this.state.file)
                            }}
                            // value={this.defaultIfEmpty(this.state.file)}
                        />
                        </FormGroup>
                        <br />
                        <Button>Send</Button>
                    </Form>
                </div>
                
            </div>
            {this.result && <div>{this.result}</div>}
        </div>
    );
  }
}

export default TestUpload;