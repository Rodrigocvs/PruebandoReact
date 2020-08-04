import React from 'react';
import './styles/BadgeNew.css'
import logo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';


class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };
//levantamiento de estado, ingreso
    handleChange = e => {
        this.setState({
            form: {
            ... this.state.form,
            [e.target.name]: e.target.value,
            },
        });
    };

    // envio de dato
    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading: true, error: null})

        try {
            await api.badges.create(this.state.form)
            this.setState({loading: false})
        } catch (error) {
            this.setState({loading: false, error: error})
        }

    }
    render() { 
        return ( 
            <React.Fragment>
                
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={logo} alt="Logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'First_Name'} 
                                    lastName={this.state.form.lastName || 'Last_Name'} 
                                    jobTitle={this.state.form.jobTitle || 'Job_Title'} 
                                    twitter={this.state.form.twitter || 'Twitter'} 
                                    email={this.state.form.email || 'email'}
                                    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}/>

                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BadgeNew; 