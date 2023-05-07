let userlogin = localStorage.getItem("userlogin")
let dangnhap = document.getElementById("dangnhap")
let dangky = document.getElementById("dangky")
let getUsers = JSON.parse(localStorage.getItem("listUser")) 
let check = -1 
for (
    let i = 0; i < getUsers.length; i++
) {
    if (getUsers[i].trangthai == "dangnhap"){
        dangnhap.innerHTML = userlogin
        dangnhap.setAttribute ("href","#" )
        dangky.innerHTML = "đăng xuất" 
        check = i
    }
}

dangky.onclick = function () {
    getUsers[check].trangthai = "dangxuat" 
    localStorage.setItem("listUser", JSON.stringify(getUsers));
    window.location = "http://127.0.0.1:5500/dangnhap.html";
}
















