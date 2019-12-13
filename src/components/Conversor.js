import React, { Component } from 'react';
import Axios from 'axios';
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0,
            valor_convertido: 0
        }
        this.converter = this.converter.bind(this);
    }

converter(){
  let url = 'https://api.exchangerate-api.com/v4/latest/'+this.props.moedaA;
  Axios.get(url).then((result)=>{
    console.log(result.data.rates[this.props.moedaB])
    let cotacao = parseFloat(result.data.rates[this.props.moedaB]);
    let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2)
    this.setState({moedaB_valor})
  });
}

  render() {
    return (
      <div className='conversor'>
  <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
          <input type="text" value={this.state.moedaA_valor} onChange={(event)=>{this.setState({moedaA_valor: event.target.value})}}/>
          <input type="button" onClick={this.converter} value='Converter'/>
          <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
