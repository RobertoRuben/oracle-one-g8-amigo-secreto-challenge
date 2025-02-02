let friendList = [];

function addFriend() {
    let friendNameInput = document.getElementById('amigo');
    let friendName = friendNameInput.value;

    if (friendName === ''){
        alert('El nombre del amigo no puede estar vacío');
        return;
    }
    friendList.push(friendName);
    friendNameInput.value = '';
    updateFriendList();
}

function updateFriendList(){
    let friendListElement = document.getElementById('listaAmigos');
    friendListElement.innerHTML = '';
    for(let i = 0; i < friendList.length; i++){
        let friendElement = document.createElement('li');
        friendElement.textContent = friendList[i];
        friendListElement.appendChild(friendElement);
    }
    
}

function sortFriends(){
    if (friendList.length === 0){
        alert('No hay amigos para sortear');
        return;
    }else if (friendList.length === 1){
        alert('Para realizar el sorteo se necesitan al menos dos amigos');
        return;
    }
    let index = Math.floor(Math.random() * friendList.length);
    let selectedFriend = friendList[index];
    document.getElementById('resultado').innerHTML = 'El amigo sorteado es: ' + selectedFriend;
    friendList = [];
    updateFriendList();
}