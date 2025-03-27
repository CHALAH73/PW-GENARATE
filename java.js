function generatePassword() {
    const length = 20; // Password length
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const symbols = "¡¿@#$%^&*()_+~`|}{[]:;?><,./-=©|¢£€¥₹";
    const numbers = "0123456789";
    
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomPick = Math.random();

        if (randomPick < 0.4) {
            password += charset[Math.floor(Math.random() * charset.length)];
        } else if (randomPick < 0.7) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        } else {
            password += numbers[Math.floor(Math.random() * numbers.length)];
        }
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");

    const copyMessage = document.getElementById("copyMessage");
    copyMessage.style.opacity = 1;

    setTimeout(() => {
        copyMessage.style.opacity = 0;
    }, 2000);
}
