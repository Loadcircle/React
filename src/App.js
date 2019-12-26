import React from 'react';
import "./styles/styles.scss"
import Componente from './Componente'
import { func } from 'prop-types';

const items = [
  { 'title' : 'Hola',
    'img'   : 'https://via.placeholder.com/350x150' ,
    'price' : '40'
  },
  { 'title' : 'Hola2',
    'img'   : 'https://via.placeholder.com/350x150' ,
    'price' : '401'
  },
  { 'title' : 'Hola3',
    'img'   : 'https://via.placeholder.com/350x150' ,
    'price' : '402'
  },
]

const App = () => (
    <div className="ed-grid m-grid-3">
      <Componente 
        title="React desde cero" 
        img="https://via.placeholder.com/350x150"
        price="25"/>
      <Componente 
        title="React Chafa" 
        img="https://via.placeholder.com/350x350"
        price="35"/>
      <Componente 
        title="React menos chafa" 
        img="https://via.placeholder.com/350x250"
        price="40"/>

        {items.map(c => <Componente  
        title={c.title}
        img={c.img}
        price={c.price}/>)}

    </div>
  );

export default App;