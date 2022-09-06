import React, {Component}from 'react';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import './hhh.css';
import EmployeeTableRow from './employeeTableRow';

export class employee extends Component{
constructor(props){
    super(props);
    this.state = {
        employees:[]
    }
}
componentDidMount(){
    fetch('http://localhost:5000/api/employees')
    .then
        ((response) => response.json())
    .then((responseData) => {
        this.setState({
            employees: responseData._embedded.employees,
            
        })
       
    })
    .catch(err => console.error(err));
    }
    render(){
       
        return(
         
            <div><section>
            <h3 >Designers</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <div>
                              <th>Name       </th>
                              <th>Position      </th>
                              <th>Contact</th>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employeeDetails, i) => < EmployeeTableRow key ={i} employee = {employeeDetails} />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            
                            
                        </tr>
                    </tfoot>
                </table></div></section></div>
        );
    }
    
}
export default employee;



