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
}