function authenticate() {
    console.log("authenticating")
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(!isLoggedIn) {
        console.log("redirecting")
        window.location.href = "../login/index.html";
    }
}

authenticate();