const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click',function(e){
    e.preventDefault()
    const inputNubmer = document.getElementById('inpu-number').value;
    const inputPin = document.getElementById('inpu-pin').value;

    if(inputNubmer == '0155' && inputPin=== '1234'){
        console.log(inputNubmer,inputPin)
        location.href = "home.html"
        
    }else{
        alert('number or password incorect')
    }
})