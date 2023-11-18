document.getElementById('btt').addEventListener('click',function checker(){
    const first = document.getElementById('repeatPassword').value;
    const second = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if(first !== second){
        messageElement.textContent = 'password doesnt match';
    }
    messageElement.textContent = '';
})
