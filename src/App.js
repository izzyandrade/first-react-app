import React from 'react';

const Bemvindo = (props) => {
	return(	
		<div>
			<h3>Bem vindo(a) { props.nome }</h3>
			<p>Tenho { props.idade } anos!</p>
		</div>
	);
}

function App(){
	return (
		<div>	
			<h1>Olá Mundo</h1>
			<h2>Curso React</h2>
			<Bemvindo nome="Izzy" idade="23"/>
			<Bemvindo nome="Ágata" idade="20"/>
		</div>
	);
}

export default App;