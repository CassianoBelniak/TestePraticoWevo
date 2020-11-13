import React, { Component } from 'react';
import "./InsertionForm.css";

class InsertionForm extends Component {
    clear_state = {
        id:-1,
        name: "",
        email: "",
        cpf: "",
        phone: "",
        birthday: this.formatDate(Date()),
        sex: 0
    }
    constructor(props){
        super(props);
        if (props.editUser === null){
            this.state = this.clear_state;
            this.submitButtonLabel = 'Cadastrar';
        } else {
            this.state = props.editUser;
            this.submitButtonLabel = 'Salvar';
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editUser === null){
            this._clear();
        } else {
            this.submitButtonLabel = 'Salvar';
            this.setState(nextProps.editUser);
        }
    }

    _onSubmit(){
        if (this.state.id === -1){
            this.props.onUserCreated(this.state);
        } else {
            this.props.onUserEdited(this.state);
        }

    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    _onClear(){
        this._clear();
    }

    _clear(){
        this.setState(this.clear_state)
        this.submitButtonLabel = 'Cadastrar';
    }

    _onChange(fieldName){
        return function (event){
            this.setState({[fieldName]: event.target.value});
        }
    }

    _renderClearButton(){
        if (this.state.id !== -1) 
            return <button type="button" onClick={this._onClear.bind(this)}>Limpar</button>
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() { 
        return ( 
            <form className="Insertion-form_form" onSubmit={this.handleSubmit}>
                <h3>Inserir novo usuário</h3>
                <div><label>Nome: </label><input type="text" placeholder="nome..." value={this.state.name} onChange={this._onChange('name').bind(this)}></input></div>
                <div><label>E-mail: </label><input type="email" placeholder="email..." value={this.state.email} onChange={this._onChange('email').bind(this)}></input></div>
                <div><label>CPF: </label><input type="text" placeholder="CPF..." value={this.state.CPF} onChange={this._onChange('cpf').bind(this)}></input></div>
                <div><label>Telefone: </label><input type="text" placeholder="telefone..." value={this.state.phone} onChange={this._onChange('phone').bind(this)}></input></div>
                <div><label>Data de Nascimento: </label><input type="date" placeholder="data de nascimento..." value={this.formatDate(this.state.birthday)} onChange={this._onChange('birthday').bind(this)}></input></div>
                <div><label>Sexo: </label><select value={this.state.sex} onChange={this._onChange('sex').bind(this)}>
                    <option value="1">Feminino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Não informado</option>
                </select></div>
                <div>
                    <button type="button" onClick={this._onSubmit.bind(this)}>{this.submitButtonLabel}</button>
                    {this._renderClearButton()}
                    
                </div>
            </form>
         );
    }
}
 
export default InsertionForm;