// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
//import Badge from './components/Badge';
import './global.css';
//import BadgeNew from './pages/BadgeNew';
//import Badges from './pages/Badges';

import App from './components/App';
//const jsx = <h1>Hello, Platzi Badges!!!!</h1>;
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Hola!!')

//const name = 'Rodrigo Nicolas'
//const element = React.createElement('h1',{}, `Hola, soy ${name}`);
//const jsx = <hs>Hola soy {2+2}</hs>

//const jsx = (
//<div>
//    <h1>Hola, soy Rodrigo</h1>
//    <p>Soy casi ingeniero</p>
//</div>
//);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(<Badge firstName="Guillermo" 
//lastName="Cuevas" 
//jobTitle="Estudiante" 
//twitter="rodrigo.cvs"
//avatarUrl="https://www.gravatar.com/avatar?d=identicon"/>, container);

ReactDOM.render(<App/>, container)