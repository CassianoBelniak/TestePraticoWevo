import React, {Component}  from 'react';
import "./App.css";
import InsertionForm from "./Components/InsertionForm/InsertionForm";
import UserList from "./Components/UserList/UserList";
import Server from "./Components/Server/Server";

class App extends Component {
    constructor(){
        super();
        this.state = {'userList': [], editingUser: null}
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
        this.setState({'userList': list});
        Server.addUser(user);
    }

    _onUserEdited(user){

    }

    _onUserClicked(index){
        this.setState({editingUser: this.state.userList[index]})
    }

    render() { 
        return ( 
            <div className="App">
                <InsertionForm key={this.state.editingUser} editUser={this.state.editingUser} onUserCreated={this._onUserCreated.bind(this)} onUserEdited={this._onUserEdited.bind(this)}/>
                <UserList onUserEdit={this._onUserClicked.bind(this)} key={this.state.userList} userList={this.state.userList}/>
            </div>
        );
    }
}
 
export default App;