import React, { Component } from 'react';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			form: {
				nome: '',
				email: '',
				senha: '',
				sexo: ''
			}
		};

		this.dadosForm = this.dadosForm.bind(this);
		this.cadastrar = this.cadastrar.bind(this);
	}

	cadastrar(e){
		const {nome, email, senha, sexo} = this.state.form;
		alert(`Nome: ${nome} \nEmail: ${email}, \nSenha: ${senha}, \nSexo: ${sexo}`);
		e.preventDefault();
	}

	dadosForm(e){
		let form = this.state.form;
		form[e.target.name] = e.target.value;
		this.setState({form: form});
	}

	render(){
		return(
			<div>
				<h1>Novo Usuário</h1>
				<form onSubmit={this.cadastrar}>
					<label>Nome: </label>
					<input name="nome" type="text" value={this.state.form.nome} onChange={this.dadosForm}/>
					<br/>
					<label>Email: </label>
					<input name="email" type="email" value={this.state.form.email} onChange={this.dadosForm} />
					<br/>
					<label>Senha: </label>
					<input name="senha" type="password" value={this.state.form.senha} onChange={this.dadosForm} />
					<br/>
					<label>Sexo: </label>
					<select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
						<option value="masculino">Masculino</option>
						<option value="feminino">Feminino</option>
					</select>
					<br/>
					<button type="submit">Cadastrar</button>
				</form>
			</div>
		);
	}
}

export default App;