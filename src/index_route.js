import React from 'react';
import Form from './Form'
import Componente from './Componente'

// class Form extends Component
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

const MainC = () => (
  <>
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
    <Form nombre="Jesus Milano" email="jesusmilano@gmail.com" />
  </>
  );


export default MainC