import React from 'react';

const Equipe = (props) => {
	return (
		<div>
			<Sobre 
				nome={props.nome}
				cargo={props.cargo}
				idade={props.idade}
			/>
		</div>
	);
}

const Sobre = (props) => {
	return (
		<div>
			<br/>
			<h2>Olá sou o {props.nome}</h2>
			<h3>Eu atualmente sou {props.cargo} na empresa</h3>
			<p>E eu tenho {props.idade} anos!</p>
			<br/>
		</div>	
	);
}

function App(){
	return (
		<div>	
			<h1>Conheça nossa equipe!</h1>
			<Equipe nome="Israel Andrade" cargo="CEO" idade="23"/>
			<Equipe nome="Victor Hugo" cargo="CTO" idade="22"/>
		</div>
	);
}

export default App;