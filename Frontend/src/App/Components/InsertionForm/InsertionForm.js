import React, { Component } from 'react';
import "./InsertionForm.css";

class InsertionForm extends Component {
    clear_state = {
        id:-1,
        name: ""
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
                <div>
                    <button type="button" onClick={this._onSubmit.bind(this)}>{this.submitButtonLabel}</button>
                    {this._renderClearButton()}
                    
                </div>
            </form>
         );
    }
}
 
export default InsertionForm;