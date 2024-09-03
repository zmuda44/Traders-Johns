// Get DOM variables
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");

const loginUser = async (e) => {
    try {
        e.preventDefault();
        const username = document.getElementById("login-user-name").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (username && password) {
            console.log(username, password);

            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
            })
            console.log(response);
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || response.statusText}`);
            }
        } else {
            alert('please enter both the username and password');
        }
    } catch (error) {
        console.error(error);
    };
};


const signUpUser = async function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-user-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (username && email && password) {
        console.log(username, email, password)

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

loginBtn.addEventListener('click', loginUser);
signupBtn.addEventListener('click', signUpUser);
