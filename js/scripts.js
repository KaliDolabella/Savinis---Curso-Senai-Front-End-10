function login(event){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    console.log(email.value)
    console.log(senha.value)
}

function mostrarMenu () {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}


function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value

    alert(email)
    console.log(email)
    
}
