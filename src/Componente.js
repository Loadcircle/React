import React from 'react';
import PropTypes from 'prop-types'

const persona = {'nombre' : 'Alberto', 'apellido' : 'Vera', 'edad' : '23'};

const mayorDeEdad = edad => edad > 18; 

const Componente =  props => (
    <div className="lg-50 lg-to-center">
        <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src={props.img}  alt="lala"/>
        </div>
        {}
        <div className="s-border s-radius-br s-radius-bl s-shadow-bottom">
            <div className="s-pxy-2">
                <h3>{ mayorDeEdad(persona.edad) ? <span>Señorito</span> : <span>Nene</span>  }</h3>
                <p className="s-mb-0">
                {`hola, me llamo ${persona.nombre} y tengo ${persona.edad} yearsold`}  
                </p>
            </div>
            <footer className="s-cross-center s-bg-grey s-pxy-2">
                <div className="s-10 s-mr-1">
                <div className="circle img-container">
                    <img  src={props.img} alt="lala"/>
                </div>
                </div>
                <p className="s-mb-0">Prof. { `${persona.nombre} ${persona.apellido}` }</p>
                <div className="button s-to-right">${props.price}USD</div>
            </footer>
        </div>
    </div>
);

Componente.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
}

Componente.defaultProps = {
  title: 'No se encontro titulo',
  img: 'https://via.placeholder.com/350x350',
  price: '00'
}

export default Componente