import React, { Component } from 'react';

class UserListItem extends Component {
    constructor(props){
        super(props);
        this.index = props.index;
    }

    _onItemEdit(){
        this.props.onItemEdit(this.index);
    }

    _onItemDeleted(){
        this.props.onUserDeleted(this.props.item.id, this.index);
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
    
        return [day, month, year].join('/');
    }

    mCPF(cpf){
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return cpf
    }

    converSexId(id){
        switch (id){
            case (1):
                return "Feminino"
            case (2):
                return "Masculino"
            case (3):
                return "Não informado"
            default:
                return ""
        }
    }

    render() { 
        return ( <tr>
            <td onClick={this._onItemDeleted.bind(this)}>(apagar)</td>
            <td onClick={this._onItemEdit.bind(this)}>(editar)</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.props.item.name}</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.props.item.email}</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.mCPF(this.props.item.CPF || this.props.item.cpf)}</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.props.item.phone}</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.formatDate(this.props.item.birthday)}</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.converSexId(this.props.item.sexId)}</td>
        </tr> );
    }
}
 
export default UserListItem;