// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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