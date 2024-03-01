const Linux = () => {    
    const linuxDistros = ["Arch", "Ubuntu", "Mint", "pop_os"];
    let Question = linuxDistros.includes("Ubuntu");

    console.log(`${Question} Ubuntu is your linux distrobution`);
};

Linux();