let email = 'teste@teste.com.br';

email = 'testando@teste.com.br';

console.log('Email')
console.log('O seu email é: ' + email);
console.log(`O seu email é:  ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    
    console.log('O mouse está sobre o formulário');
});

document.getElementById('form-login').addEventListener('mouseout', e => {
    
    console.log('O mouse está fora  do formulário');
});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    //console.log('Formulário enviado!');

    let email = document.querySelector('#email').value; 
    let password = document.querySelector('#password').value; 

    console.log(email, password);

    let json = {
        email: email, 
        password: password
    };

  //  console.log(json);

   // let stringJSON = JSON.stringify(json);

   // console.log(stringJSON);

    if (!json.email) {
        console.error("O campo deve preenchido");
    } else if (!json.password){
        console.error("O campo deve preenchido");
    } else {
        console.log("Dados validados")
    }

    
});

