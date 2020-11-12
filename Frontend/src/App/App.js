import React, {Component}  from 'react';
import "./App.css";
import InsertionForm from "./Components/InsertionForm/InsertionForm";
import UserList from "./Components/UserList/UserList";
import Server from "./Components/Server/Server";

class App extends Component {
    constructor(){
        super();
        this.state = {'userList': [], editingUser: null}
        this.editintUserIndex = -1;
    }

    async _getUserList(){
        var list = await Server.getUserList();
        this.setState({userList: list});
    }

    componentDidMount(){
        this._getUserList();
    }

    _onUserCreated(user){
        var list = this.state.userList;
        list.push(user);
        this.setState({'userList': list, editingUser: null});
        Server.addUser(user);
    }

    _onUserEdited(user){
        var list = this.state.userList;
        list[this.editintUserIndex] = user;
        this.editintUserIndex = -1;
        this.setState({userList:list, editingUser: null});
        Server.updateUser(user);
    }

    _onUserClicked(index){
        this.editintUserIndex = index;
        this.setState((state, props)=>({editingUser: state.userList[index]}))
    }

    _onUserDeleted(id, index){
        if (window.confirm('Excluir usuário?')){
            Server.deleteUser(id)

            var list = this.state.userList;
            list.splice(index, 1);
            this.setState({userList:list, editingUser:null});
        }
    }

    render() { 
        return ( 
            <div className="App">
                <InsertionForm 
                    editUser={this.state.editingUser} 
                    onUserCreated={this._onUserCreated.bind(this)} 
                    onUserEdited={this._onUserEdited.bind(this)}               
                />
                
                <UserList 
                    userList={this.state.userList}
                    onUserEdit={this._onUserClicked.bind(this)} 
                    onUserDeleted={this._onUserDeleted.bind(this)}
                />
            </div>
        );
    }
}
 
export default App;