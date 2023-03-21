import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from 'react-router-dom'
import {IoIosFingerPrint, IoIosArrowRoundBack} from "react-icons/io";

import PrintResults from './PrintResults';

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

    constructor(props) {
        super(props);
        this.newContract = this.newContract.bind(this);
    }

    componentDidMount() {
        if (this.props.contract) {
        const { pk, file, name, contract_type } = this.props.contract;
        this.setState({ pk, file, name, contract_type });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.newContract.bind(this);
    };

    onFileChange = e => { 
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    buildList() {
        const rList = Array.from(this.state.list['you will <verb>']);
        console.log('rList: ', typeof rList, rList);

        return (
            <div>
                {rList.map(oneList => <newContract {...oneList}/>)}
            </div>
        );
    };

    newContract = async (e) => {

        
        if (this.state.file) {
            // console.log("there was a file added");

            const formData = new FormData();
            formData.append('file', this.state.file);            
            formData.append('name', this.state.name);
            formData.append('contract_type', this.state.contract_type);

            // console.log(this.state.file);

            e.preventDefault();

            const response = await axios.post(API_URL, formData);/*.then(() => {
                
                this.props.resetState();
                this.props.toggle();
            });*/
            // console.log(response.data);
            if(response.data)
            {
                console.log('it works!');
                console.log(response.data);
            }
            this.state.results = response.data;
        
            // console.log('these are the results: ', this.state.results['results']['results']['you will <verb>'][0]);

            
            this.state.list = this.state.results['results']['results'];

            const oneResult = this.state.list.props;
            console.log('one result: ', this.state.list);
            
            this.buildList();

            return (
                <div>
                    <h3>{oneResult['you will <verb>']}</h3>
                </div>
            )
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
                    <li>hi</li>
                    {/* <this.buildList/> */}
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