document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="nav-cta">Logout</button>
        `;
    } else {
        document.getElementById("userInfo").innerText = "Belum login";
        document.getElementById("authArea").innerHTML = `
            <button onclick="goLogin()" style="padding:6px 14px; cursor:pointer;">LOGIN</button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
