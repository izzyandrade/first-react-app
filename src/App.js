import React, { Component } from 'react';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			nome: "Izzy",
			contador: 0
		};

		this.aumentar = this.aumentar.bind(this);
		this.subtrair = this.subtrair.bind(this);
	}

	aumentar(){
		let state = this.state;
		state.contador += 1;
		this.setState(state)
	}

	subtrair(){
		let state = this.state;
		state.contador -= 1;
		this.setState(state);
	}

	render(){
		return(
			<div>
				<h1>Contador</h1>
				<h3>
					<button onClick={this.subtrair}>-</button>
						{this.state.contador}
					<button onClick={this.aumentar}>+</button>
				</h3>
			</div>
		);
	}
}

export default App;