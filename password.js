const passwordValidator = (Password) => {
    let password = Password;

    if (password.length > 12 && password.includes('@')) {
        console.log('hacker proof password!!!!!')
    } else if (password.length >= 8 || password.includes('@')) {
        console.log('password is strong enough')
    } else if (password.length <= 4 && !password.includes('@')) {
        console.log("Your password is not strong enough");
    }
};

passwordValidator('p@ssword12345656');