import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

// This file is from the tutorial, and I'm just using it as a reference for how new objects are created
class NewContractForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    company: "",
    contractType: "",
  };

  componentDidMount() {
    if (this.props.contract) {
      const { pk, name, company, contractType } = this.props.contract;
      this.setState({ pk, name, company, contractType });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createContract = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editContract = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.contract ? this.editContract : this.createContract}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company:</Label>
          <Input
            type="text"
            name="company"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.company)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contractType">Contract Type:</Label>
          <Input
            type="text"
            name="contractType"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewContractForm;