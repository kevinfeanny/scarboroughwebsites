import React, {Component}from 'react';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css';
import './hhh.css';



export class header extends Component{
    

    render(){
 
        return(<div id="page-wrapper"><div className='App-Header' id="header"  >
        <h1 className='container'><a href="index.html">Scarborough Web Design</a></h1></div>
        <nav>
             <a href="#menu">Menu</a> 
        </nav>
    
    
    
					<nav id="menu">
						<div >
							<h2>Menu</h2>
							<ul>
								<li><a href="index.html">Home</a></li>
								<li><a href="generic.html">Generic</a></li>
								<li><a href="elements.html">Elements</a></li>
								<li><a href="#">Log In</a></li>
								<li><a href="#">Sign Up</a></li>
							</ul>
							<a href="#">Close</a>
						</div>
					</nav>

				
					<section id="banner">
						<div class="inner">
							<h2>Scarborough Web Design</h2>
							<p>Full Stack web Design with custom graphics.</p>
						</div>
					</section></div>);
      
    }
    
}
export default header;