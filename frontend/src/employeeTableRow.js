import React,{Component} from 'react';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import './hhh.css';

export class employeeTableRow extends Component {

    render(){
            return(
            <div>
                <tr>
                    <td>{this.props.employee.name}</td>
                    <td>{this.props.employee.position}</td>
                    <td>{this.props.employee.contact}</td>
            </tr>
            </div>
            );

    }
}
export default employeeTableRow;