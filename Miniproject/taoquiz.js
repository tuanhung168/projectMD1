let old = document.getElementById("new")
let adn = document.getElementById("add-new")
adn.onclick = function () {

    old.innerHTML += ` <section class="new">

    <div class="input1">
        <input type="text" class="form1" aria-describedby="basic-addon1" style="background: none;">
        <div class="important">
            <p style="color: white; padding-left: 30px;">Thuật ngữ</p>
        </div>
    </div>

    <div class="input1">
        <input type="text" class="form1" aria-describedby="basic-addon1" style="background: none;">
        <div class="important">
            <p style="color: white; padding-left: 30px;">Định nghĩa</p>
        </div>
    </div>
</section>`
}


let tieude = document.getElementById("tieude")
let tao = document.getElementById("tao")
let dinhnghia = document.getElementById("dinhnghia")
let thuatngu = document.getElementById("thuatngu")
let dataquiz = []
tao.onclick = function () {
    
    if (
        tieude.value != "" && dinhnghia.value != "" && thuatngu.value != "" 
    ) {
       dataquiz.push ({tieude:tieude.value,thuatngu:thuatngu.value,dinhnghia:dinhnghia.value})
       localStorage.setItem("dataquiz", JSON.stringify(dataquiz));
       window.location = "http://127.0.0.1:5500/slidetienganh.html"
    } else {alert("vui lòng nhập đủ")}
}




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



