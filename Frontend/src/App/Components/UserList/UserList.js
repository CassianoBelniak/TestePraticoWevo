import React, { Component } from 'react';
import UserListItem from './UserListItem/UserItemList';

class UserList extends Component {
    render() { 
        return ( 
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Data de nascimento</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.userList.map((item, index)=>{
                        return <UserListItem onUserDeleted={this.props.onUserDeleted} onItemEdit={this.props.onUserEdit} key={index} index={index} item={item}/>
                    })}
                </tbody>
            </table>
        );
    }
}
 
export default UserList;