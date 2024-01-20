// Update your existing JavaScript file
// Add this function for handling login

async function login(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Make an AJAX request to authenticate the user
    await $.ajax({
        type: "POST",
        crossDomain: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/authentication-controller/login",
        data: JSON.stringify({ username, password }),
        dataType: "JSON",
        success: function (response) {
            // Handle successful login, redirect, or update UI accordingly
            console.log(JSON.stringify(response));
            // Example: Redirect to another page
            window.location.href = "../dashboard/index.html";
            localStorage.setItem('isLoggedIn', true);
        },
        error: function (error) {
            // Handle login error, display error message, or update UI accordingly
            console.log(JSON.stringify(error));
            alert("Login failed. Please check your credentials.");
            localStorage.setItem('isLoggedIn', false);
        }
    });
}
