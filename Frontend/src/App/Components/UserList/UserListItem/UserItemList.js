import React, { Component } from 'react';

class UserListItem extends Component {
    constructor(props){
        super(props);
        this.index = props.index;
    }

    _onItemEdit(){
        this.props.onItemEdit(this.index);
    }

    render() { 
        return ( <tr onClick={this._onItemEdit.bind(this)}>
            <td>{this.props.item.name}</td>
        </tr> );
    }
}
 
export default UserListItem;