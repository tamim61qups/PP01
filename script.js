let passwords = [];

function login() {
    // Dummy login function
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
}

function addPassword() {
    const accountName = document.getElementById('accountName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const url = document.getElementById('url').value;

    passwords.push({ accountName, username, password, url });

    displayPasswords();
}

function searchPasswords() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredPasswords = passwords.filter(password =>
        password.accountName.toLowerCase().includes(searchTerm) || password.username.toLowerCase().includes(searchTerm)
    );

    displayPasswords(filteredPasswords);
}

function displayPasswords(passwordsToDisplay = passwords) {
    const passwordList = document.getElementById('passwordList');
    passwordList.innerHTML = '';

    passwordsToDisplay.forEach(password => {
        const li = document.createElement('li');
        li.textContent = `Account Name: ${password.accountName}, Username: ${password.username}, Password: ${password.password}, URL: ${password.url}`;
        passwordList.appendChild(li);
    });
}
