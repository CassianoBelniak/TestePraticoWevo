import React, { Component } from 'react';
import "./InsertionForm.css";

class InsertionForm extends Component {
    constructor(props){
        super(props);
        if (props.editUser === null){
            this.state = {
                id:-1,
                name: ""
            };
        } else {
            this.state = props.editUser;
        }

    }
    _onSubmit(){
        if (this.state.id === -1){
            this.props.onUserCreated(this.state);
        } else {
            this.props.onUserEdited(this.state);
        }
        this.setState({
            id:-1,
            name: ""
        })
    }
    _onChange(fieldName){
        return function (event){
            this.setState({[fieldName]: event.target.value});
        }
    }
    render() { 
        return ( 
            <form className="Insertion-form_form">
                <h3>Inserir novo usuário</h3>
                <div><label>Nome: </label><input type="text" placeholder="nome..." value={this.state.name} onChange={this._onChange('name').bind(this)}></input></div>
                <div><button type="button" onClick={this._onSubmit.bind(this)}>Cadastrar</button></div>
            </form>
         );
    }
}
 
export default InsertionForm;