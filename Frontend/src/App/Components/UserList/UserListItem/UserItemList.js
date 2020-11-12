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

    render() { 
        return ( <tr>
            <td onClick={this._onItemDeleted.bind(this)}>(apagar)</td>
            <td onClick={this._onItemEdit.bind(this)}>(editar)</td>
            <td onClick={this._onItemEdit.bind(this)}>{this.props.item.name}</td>
        </tr> );
    }
}
 
export default UserListItem;