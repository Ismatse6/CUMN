function login(email, password) {

     email = 'example@email.com';
     password = 'password123';
    
    console.log('Email:', email);
    console.log('Password:', password);
    // Puedes enviarlos a un servidor, procesarlos localmente, etc.

    return { email, password };
}


 module.exports = login;