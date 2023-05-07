let usernameLogin = document.getElementById("username1");
let passwordLogin = document.getElementById("password1");
let buttonLogin = document.getElementById("button1");
buttonLogin.addEventListener("click", function (e) {
  e.preventDefault();
  let getUsers = JSON.parse(localStorage.getItem("listUser")) || [];
  let isLoggedIn = false;
  // Dùng vòng lặp để duyệt qua các phần tử của mảng trên local
  for (let i = 0; i < getUsers.length; i++) {
    if (
      usernameLogin.value === getUsers[i].username &&
      passwordLogin.value === getUsers[i].password
    ) {
      getUsers[i].trangthai = "dangnhap"
      localStorage.setItem("userlogin",usernameLogin.value)
      localStorage.setItem("listUser", JSON.stringify(getUsers));
      alert("Đăng nhập thành công");

      isLoggedIn = true;

      window.location = "http://127.0.0.1:5500/trangchu.html";
      
    } else {getUsers[i].trangthai = "dangxuat"
    localStorage.setItem("listUser", JSON.stringify(getUsers));}
  }
  if (!isLoggedIn) {
    alert("Sai tài khoản hoặc tài khoản chưa tồn tại, vui lòng thử lại");
  }
});


