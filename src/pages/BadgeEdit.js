import React from 'react';
import './styles/BadgeEdit.css'
import logo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';


class BadgeEdit extends React.Component {
    state = { 
        loading:true,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };
//llamar a la api para leer un dato por el id
  
//levantamiento de estado, ingreso
    handleChange = e => {
        this.setState({
            form: {
            ... this.state.form,
            [e.target.name]: e.target.value,
            },
        });
    };
    componentDidMount() {
        this.fetchData()
    }
    
    fetchData = async e => {
        this.setState({loading: true, error: null})
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false, form: data})
        } catch (error) {
            this.setState({loading:false, error: error})
        }
    }
    // actualizar datos
    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading: true, error: null})

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading: false})

          this.props.history.push('/badges');  
        } catch (error) {
            this.setState({loading: false, error: error})
        }

    }
    render() { 
        if(this.state.loading) {
            return <PageLoading/>;
        }
        
        return ( 
            <React.Fragment>
                
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={logo} alt="Logo"></img>
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
                            <h1>Edit Attandant</h1>
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}/>

                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BadgeEdit; 