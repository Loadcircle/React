import React from 'react';
// import React, {Component} from 'react';

// class Form extends Component
class Form extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      email: '',
      fecha: new Date,
    }

    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarCorreo = this.cambiarCorreo.bind(this);
    this.cambiarFecha = this.cambiarFecha.bind(this);

  }

  cambiarFecha(){
    this.setState({fecha: new Date})
  }

  cambiarNombre(e){
    this.setState({nombre: e.target.value})
  }
  cambiarCorreo(e){
    this.setState({email: e.target.value})
  }
  render(){
    return (
      <div className="ed-grid">
        <h1>Formulario {Math.ceil(this.state.fecha/1000)}</h1>
        <form>
          <div className="form__item">
            <label>Nombre Completo</label>
            <input 
            type="text" 
            onChange={this.cambiarNombre}/>
          </div>
          <div className="form__item">
            <label>Correo Electronico</label>
            <input 
            type="email"
            onChange={this.cambiarCorreo}/>
          </div>
          <div className="ed-item form__item">
              <input className="button full small" type="submit" value="Enviar"/>
            </div>
        </form>

        <div>
          <h2>{`Gracias por registrarte, causita ${this.state.nombre}`}</h2>
          <span>{`Ya tenemos tu correo ${this.state.email} conchetumare`}</span>
        </div>
      </div>
    )
  }

  componentDidMount(){
    console.log('montado');

    this.intervaloFecha = setInterval( () => {

      this.cambiarFecha()
      console.log(new Date)
    }
    , 1000)
  }

  componentDidUpdate(prevProps, preState){
    // console.log(prevProps)
    // console.log('-----------')
    // console.log(preState)
  }

  componentWillUnmount(){
    clearInterval(this.intervaloFecha)
  }

}


export default Form