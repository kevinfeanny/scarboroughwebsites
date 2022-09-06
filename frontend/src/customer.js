import React, {Component} from "react";

export class customer extends Component{
    constructor(props){
        super(props);
        this.state= {id:'',name:'',email:'',message:''};
    }
    inputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var newcustomer = {id: this.state.id,name: this.state.name, email: this.state.email, message: this.state.message};
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        fetch('http://localhost:5000/api/customers',
        {
            method: 'POST', mode: 'no-cors', body: JSON.stringify(newcustomer),
            headers:myHeaders,
        })
        .then(response =>  console.log('Success', JSON.stringify(response)))
        .catch(error => console.error('Error', error));
    };
    render(){
        return(  <div>
            <h3>Contact Us</h3>
            <form onSubmit={this.handleSubmit}>
                <table><tr>
                    <td>ID</td>
                    <td><input type="text" name = "id" onChange = {this.inputChanged} value= {this.state.id}/></td>
                    </tr>
                    <tr>
                    <td>name</td>
                    <td><input type="text" name = "name" onChange = {this.inputChanged} value= {this.state.name}/></td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td><input type="email" name = "email" onChange = {this.inputChanged} value= {this.state.email}/></td>
                    </tr>
                    <tr>
                    <td>Message us</td>
                    <td><textarea type="textarea" name = "message" onChange = {this.inputChanged} value= {this.state.message}/></td>
                    </tr>
                    <tr>
                        <td></td>
                    <td><input type="submit" name = "Contact Us" value = " Contact Us"/></td>
                    </tr>
                </table>
            </form>
        </div>);}


    }
    export default customer;