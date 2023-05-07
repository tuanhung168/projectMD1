let form = document.getElementById("form");
form.onsubmit = function (e) {
  e.preventDefault();
  console.log(form.day.value);
  if (
    form.email.value === "" ||
    form.username.value === "" ||
    form.password.value === "" ||
    form.checkbox.checked === false ||
    form.day.value === "" || 
    form.month.value === "" || 
    form.year.value === ""
// nếu có 1 trường rỗng thì bắt người dùng phải nhập mới được tiếp tục
  ) {
    alert("Vui lòng nhập đủ thông tin");
  } else {
    let getUsers = JSON.parse(localStorage.getItem("listUser")) || []; // Sử dụng mặc định là một mảng rỗng nếu không có dữ liệu trong localStorage
    getUsers.push({ username: username.value, password: password.value,trangthai:"dangxuat" }); // Thêm giá trị mới vào mảng
    localStorage.setItem("listUser", JSON.stringify(getUsers)); // Lưu mảng mới vào localStorage
    window.location = "http://127.0.0.1:5500/dangnhap.html";
  }
};
