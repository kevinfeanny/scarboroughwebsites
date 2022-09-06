import React, {Component}from 'react';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import './hhh.css';



export class about extends Component{
    

    render(){
 
        return(<div id="page-wrapper"><div></div> <section id="wrapper">

        
            <section id="one" class="wrapper spotlight style1">
                <div class="inner">
                    <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
                    <div class="content">
                        <h2 class="major">Full Stack Website design</h2>
                        <p>Our developers use the latest techniques and languages to develop frontend backend and database design</p>
                       
                    </div>
                </div>
            </section>

        
            <section id="two" class="wrapper alt spotlight style2">
                <div class="inner">
                    <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
                    <div class="content">
                        <h2 class="major">Custom Graphics</h2>
                        <p>Our graphic designers hit you with vivid color and technique when illustrating your website.</p>
                    </div>
                </div>
            </section></section></div>);
      
    }
    
}
export default about;