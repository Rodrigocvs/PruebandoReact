import React from 'react';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
    
    state = {
        loading: true,
        error: null,
        data: undefined
    };

/*Este método se ejecuta cuando se instancia un componente. Nos permite definir el 
estado inicial del 		componente, hacer bind de métodos y definir propiedades internas 
en las que podemos guardar muchos datos diferente*/
    constructor(props) {
        super(props);
        console.log ('1. constructor()')
//        this.state = {
//            data: []
            
//        };
    }
//cuando ya estoy mostrando en pantalla
/*Este último método de la fase de montado se ejecuta una vez el 
componente se renderizó en el navegador y nos permite interactuar 
con el DOM o las otras APIs del navegador (geolocation, navigator, 
notificaciones, etc.). ACA HAGO LAS PETICIONES A LAS API*/
    componentDidMount() {
        console.log('3.')
        //       this.timeoutId = setTimeout(() => {
        //           this.setState({
        //             data: 
        //          });
        //      }, 3000);
        this.fechtData (); //para llamar a la api
        this.intervalId = setInterval(this.fechtData, 5000)
        
   }

   fechtData = async ()=>{
       this.setState ({loading: true, error: null})

                 //llamada a la api       
       try{
            const data = await api.badges.list();
            this.setState({loading: false, data: data}) 
       } catch (error) {
            this.setState({loading: false, error: error})
       }
   }
//cuando se actualiza el estado de componente
    componentDidUpdate(prevProps, prevState) {
        console.log('5');
//        console.log ({
//            prevProps: prevProps , prevState: prevState(())
//        })
//        console.log({
//            props: this.props,
//            state: this.state,
//        });
//cada 5 llama a la funcion fetchdata y actualiza la
        
    }
//cuando abandono la pagina
/*Una vez el método anterior devolvió true 
se ejecuta este método, acá es posible realizar cualquier 
tipo de preparación antes de que se actualice de la UI*/
    componentWillUnmount(){
        console.log('6')
    //        clearTimeout(this.timeoutId)
        clearInterval(this.intervalId)
    }
// lo que tengo que mostrar en pantalla, calculo lo que tengo que mostrar en pantalla
/*En este momento de la fase de montado se van a tomar las propiedades, 
el estado y el contexto y se va a generar la UI inicial de este componente*/
    render() { 
//cuando estoy empezando y estoy leyendo los datos        
        if(this.state.loading === true && !this.state.data ){
            return <PageLoading/>;
        }
        if(this.state.error) {
            return <PageError error={this.state.error} />;
        }

        console.log('2/4')
        return ( 
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Badge__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>

                        <div className="Badges__list">
                            <div className="Badges__container">
                             <BadgesList badges={this.state.data} />

                             {this.state.loading && <MiniLoader/>}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Badges;