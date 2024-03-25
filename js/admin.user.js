// ham nay co tac dung ve table users
function renderUser() {
  // lay thong tin users tu localstorage ve
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // bien de luu tru tung hang cua bang users
  let htmlString = "";

  for (let i = 0; i < users.length; i++) {
    htmlString += `
        <tr>
            <td>${i + 1}</td>
            <td>${users[i].id}</td>
            <td>${users[i].lastName + "&nbsp" + users[i].firstName}</td>
            
            <td>${users[i].emailAddress}</td>
            <td>
                <button class="online">${
                  users[i].status == "true" ? "Mở Khóa" : "Khóa"
                }</button>
                <button class="close">${
                  users[i].status == "false" ? "Mở Khóa" : "Khóa"
                }</button> 
              </td>
        </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = htmlString;
}
renderUser();
