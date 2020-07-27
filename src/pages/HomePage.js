import React from 'react';
import './styles/Badges.css';
import astronauts from '../images/astronauts.svg';
import conflogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

class HomePages extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>

                        <div className="Badges">
                            <div className="Badges__hero">
                                <div className="Badges__container">
                                    <div className="row">
                                        <div className="col-3">
                                            <img className="" src={conflogo} alt="Conf Logo" />
                                            <h1>PRINT YOUT BADGES</h1>
                                            <h3>The easiest way to manage your</h3>
                                            <h3>conference</h3>
                                            <Link to="/badges" className="btn btn-primary">Start Now</Link>
                                        </div>
                                        <div className="col-9">
                                        <img className="Badges_conf-logo" src={astronauts} alt="Conf Logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            </React.Fragment>
         );
    }
}
 
export default HomePages;