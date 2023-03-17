import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from 'react-router-dom'
import {IoIosFingerPrint, IoIosArrowRoundBack} from "react-icons/io";

import axios from "axios";

import { API_URL } from "../constants";

class TestUpload extends React.Component {
    state = {
        pk: 0,
        file: "",
        name: "",
        contract_type: "",
        results: "",
        list: []
    };

    componentDidMount() {
        if (this.props.contract) {
        const { pk, file, name, contract_type } = this.props.contract;
        this.setState({ pk, file, name, contract_type });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFileChange = e => {
        this.setState({ [e.target.name]: e.target.files[0] });
        console.log('onFileChange', e.target.files[0])
    };

    buildList() {
        const resultsList = Array.from(this.state.results['results']['results']['you will <verb>']);

        console.log('result list: ', resultsList);

        const listItems = resultsList.map((number) => 
            
            <li key={number.toString()}>{number}</li>
        );
        this.state.list = resultsList;
        console.log(listItems);
    };

    newContract = async (e) => {

        
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
            // console.log(response.data);
            if(response.data)
            {
                console.log('it works!');
                // console.log(response.data);
            }
            this.state.results = response.data;
            const keys = Object.keys(this.state.results['results']['results']['you will <verb>'][0]);
            console.log('these are the results: ', this.state.results['results']['results']['you will <verb>']);
            
            this.buildList();
        };
    };



    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

  render() {
    return (
        <div>
            <div style={{ marginTop: "30px", marginLeft: "50px", color: "#607d8b" }}>
                <Link to='/' className='navLink'><IoIosArrowRoundBack /> Go Back</Link>
                {/* <p>{this.state.results['results']['results']}</p> */}
                <ol>
                    {
                        this.state.list.map((number) => (
                            
                            <li>{number}</li>
                        ))
                    }
                </ol>
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
        </div>
    );
  }
}

export default TestUpload;