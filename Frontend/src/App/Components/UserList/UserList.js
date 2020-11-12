import React, { Component } from 'react';
import UserListItem from './UserListItem/UserItemList';

class UserList extends Component {
    render() { 
        return ( 
            <table>
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