import React from 'react';
import './styles/Badges.css';
import astronauts from '../images/astronauts.svg';
import conflogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import './styles/Home.css';

class HomePages extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                        <div className="Home">
                            
                                <div className="container">
                                    <div className="row">
                                        <div className="Home__col col-12 col-md-4">
                                            <img className="img-fluid mb-2" 
                                            src={conflogo} 
                                            alt="Conf Logo" />
                                            <h1>PRINT YOUT BADGES</h1>
                                            <h3>The easiest way to manage your conference</h3>
                                            
                                            <Link to="/badges" className="btn btn-primary">Start Now</Link>
                                        </div>
                                        <div className="Home__col d-none d-md-block col-md-8">
                                        <img className="img-fluid p-4" src={astronauts} alt="Conf Logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

            </React.Fragment>
         );
    }
}
 
export default HomePages;