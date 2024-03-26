// ham nay co tac dung ve table users
// function renderUser() {
//   // lay thong tin users tu localstorage ve
//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   // bien de luu tru tung hang cua bang users
//   let htmlString = "";

//   for (let i = 0; i < users.length; i++) {
//     htmlString += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${users[i].id}</td>
//             <td>${users[i].lastName + "&nbsp" + users[i].firstName}</td>
            
//             <td>${users[i].emailAddress}</td>
//             <td>
//                 <button class="online">${users[i].status == "true" ? "Mở Khóa" : "Khóa"}</button>
//               </td>
//         </tr>
//     `;
//   }
//   document.getElementById("tbody").innerHTML = htmlString;
// }
// renderUser();
function renderUser() {
  // Lấy thông tin users từ localstorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Biến để lưu trữ từng hàng của bảng users
  let htmlString = "";

  for (let i = 0; i < users.length; i++) {
    // Chuyển đổi trạng thái "Mở Khóa" sang "Khóa"
    const statusText = users[i].status === "true" ?"Mở Khóa"  : "Bị Khóa";
    const statusClass = users[i].status === "true" ?"online" : "offline";

    htmlString += `
        <tr>
            <td>${i + 1}</td>
            <td>${users[i].id}</td>
            <td>${users[i].lastName + "&nbsp" + users[i].firstName}</td>
            <td>${users[i].emailAddress}</td>
            <td>
                <button class="${statusClass}" onclick="toggleStatus(${i}, ${users[i].id})">${statusText}</button>
            </td>
        </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = htmlString;
}

function toggleStatus(index, userId) {
  // Lấy thông tin users từ localstorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm người dùng cần thay đổi trạng thái
  const user = users[index];

  // Đảo ngược trạng thái
  user.status = user.status === "true" ? "false" : "true";

  // Cập nhật lại thông tin người dùng trong mảng users
  users[index] = user;

  // Lưu mảng users mới vào localstorage
  localStorage.setItem("users", JSON.stringify(users));

  // Cập nhật lại giao diện
  renderUser();

  // Lấy tất cả các giá trị của người dùng
  const userValues = Object.values(user);
  console.log(userValues);
}

renderUser();
