import React, {Component}from 'react';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import './hhh.css';



export class footer extends Component{

    render (){

        return(
            <div>
                <div>
                    <br /> <br /> <br />
                    <h2 >Get in touch</h2>
                    <p>Book your appointment now for a free consultation and estimate.tarted building your web app today.</p>       
                    <table>
                        <tr>
                        <td>
                            Scarborough Web Design<br />
                            4675 Sheppard Ave East #g10<br />
                            Scarborough, On M1S-4R3
                        </td></tr>
                        <tr>
                        <td>(647) 544-7219</td></tr>
                        <tr>
                        <td><a href="https://www.linkedin.com/in/kevin-feanny-b99b5713b/">LinkedIn</a></td></tr>
                        <tr>
                        <td><a href="https://github.com/kevinfeanny">Github</a></td></tr>
                        <tr>
                        <td><a href="https://www.facebook.com/kevin.feanny1/">Facebook</a></td></tr>
                        
                        
                    </table>
                    <ul>
                        <li>&copy; Scarborough Web Design All rights reserved.</li>
                    </ul>
                </div>
            </div>

    
);
    }
}
export default footer;