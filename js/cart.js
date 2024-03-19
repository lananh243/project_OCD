function render() {
  let users = JSON.parse(localStorage.getItem("users"));
  let text = "";
  const cart = users[0].cart;
  for (let i = 0; i < cart.length; i++) {
    text += `
        <tr>
            <td>${i + 1}</td>
            <td>
                <img width="100px" src=${cart[i].image} alt="img" />
            </td>
            <td>${cart[i].name}</td>
            <td>${cart[i].price}</td>
            <td>
                <button onclick="decrease(${cart[i].id})">-</button>
                ${cart[i].quantity}
                <button onclick="increase(${cart[i].id})">+</button>
            </td>
            <td></td>
        </tr>
        `;
  }
  document.getElementById("cartBody").innerHTML = text;
}
render();
function increase(id) {
  console.log(id);
//   có id san pham da mua,
    /* 
        lay cart ra
        tim vi tri san pham co id
        update soluong
        luu lai 
    */
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    let users = JSON.parse(localStorage.getItem("users"));
  
    if (checkLogin !== null && users !== null) {
        let currentUser = null;
        for (let i = 0; i < users.length; i++) {
          if (users[i].id === checkLogin) {
            currentUser = users[i];
            break;
          }
        }
        if(currentUser){
            for(let j=0; j < currentUser.cart.length; j++){
                console.log(currentUser.cart[j]);
            }
        }
    }

}