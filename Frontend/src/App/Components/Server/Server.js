var server = {};

const SERVER_URL = 'https://localhost:44369/';

server.getUserList = async function(){
    var promise = new Promise((resolve)=>{
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('get', SERVER_URL + 'user/list', true);
        httpRequest.send();
        httpRequest.onreadystatechange = ()=>{
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                resolve(JSON.parse(httpRequest.responseText));
            }
        }
    })
    return await promise;
}

server.addUser = async function (user){
    delete user.id; 
    user.cpf = user.cpf.split(".").join("").replace('-','');
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('post', SERVER_URL + 'user/insert', true);
    httpRequest.setRequestHeader('Content-type', "application/json;charset=UTF-8");
    httpRequest.send(JSON.stringify(user));
}

server.updateUser = async function (user){
    user.cpf = user.cpf.split(".").join("").replace('-','');
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('post', SERVER_URL + 'user/update', true);
    httpRequest.setRequestHeader('Content-type', "application/json;charset=UTF-8");
    httpRequest.send(JSON.stringify(user));
}

server.deleteUser = async function (id){ 
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('post', SERVER_URL + 'user/delete', true);
    httpRequest.setRequestHeader('Content-type', "application/json;charset=UTF-8");
    httpRequest.send(JSON.stringify(id));
}

export default server;