document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');

    let randomId = Math.floor(Math.random() * 10) + 1;

    const url = `https://jsonplaceholder.typicode.com/users/${randomId}`;

    fetch(url)
        .then(response => response.json())
        .then(user => {

            const usernameElement = document.getElementById('user-username');
            const nameElement = document.getElementById('user-name');
            const emailElement = document.getElementById('user-email');
            const phoneElement = document.getElementById('user-phone');
            const idElement = document.getElementById('user-id');

            usernameElement.textContent = user.username;
            nameElement.textContent = user.name;
            emailElement.textContent = user.email;
            phoneElement.textContent = user.phone;
            idElement.textContent = randomId;
            const avatarUrl = `https://jsonplaceholder.typicode.com/photos/${user.id}`;
            return fetch(avatarUrl);
        })
        .then(response => response.json())
        .then(avatar => {
            const avatarElement = document.getElementById('user-avatar');
            avatarElement.src = avatar.url;
        })
        .catch(() =>{
            preloader.style.display = 'none';
            const errorElement = document.getElementById('error-message');
            errorElement.textContent = '⚠️ Что-то пошло не так';
        });
    preloader.style.display = 'none';
});