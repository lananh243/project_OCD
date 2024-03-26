let checkLogin = JSON.parse(localStorage.getItem("checkLogin")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let text = document.getElementById("text");
console.log(text);

let myCart;
for (let i = 0; i < users.length; i++) {
  if (checkLogin == users[i].id) {
    myCart = users[i].cart;
  }
}

function render() {
  let text = "";
  for (let i = 0; i < users.length; i++) {
    if (checkLogin == users[i].id) {
      for (let j = 0; j < users[i].cart.length; j++) {
        text += `
              <tr>
                  <td>${j + 1}</td>
                  <td>
                      <img width="100px" src=${
                        users[i].cart[j].image
                      } alt="img" />
                  </td>
                  <td>${users[i].cart[j].name}</td>
                  <td>${users[i].cart[j].price} ₫</td>
                  <td>
                      <button onclick="decrease(${
                        users[i].cart[j].id
                      })">-</button>
                      ${users[i].cart[j].quantity}
                      <button onclick="increase(${
                        users[i].cart[j].id
                      })">+</button>
                  </td>
                  <td id='value${users[i].cart[j].id}'>
                    ${(
                      parseFloat(
                        users[i].cart[j].price
                          .replace(/\./g, "")
                          .replace(",", ".")
                      ) * users[i].cart[j].quantity
                    ).toLocaleString("vi-VN")}đ
                  </td>
              </tr>
              `;
      }
    }
  }
  document.getElementById("cartBody").innerHTML = text;
}
render();
function total() {
  let count = 0;
  for (let i = 0; i < myCart.length; i++) {
    count +=
      parseFloat(myCart[i].price.replace(/\./g, "").replace(",", ".")) *
      myCart[i].quantity;
  }

  // console.log(count);

  text.innerHTML = `
  <td colspan="6" id="text" class="text">Tổng tiền : ${count.toLocaleString(
    "vi-VN"
  )}đ</td>
`;
}
total();
function increase(itemId) {
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    if (checkLogin == currentUser.id) {
      // currentUser.cart = myCart;
      for (let i = 0; i < myCart.length; i++) {
        if (itemId == myCart[i].id) {
          myCart[i].quantity++;
          currentUser.cart = myCart;
          localStorage.setItem("users", JSON.stringify(users));
          render();
          total();
        }
      }
    }
  }
}

function decrease(itemId) {
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    if (checkLogin === currentUser.id) {
      for (let i = 0; i < myCart.length; i++) {
        if (itemId == myCart[i].id) {
          if (myCart[i].quantity == 1) {
            let confirmDelete = confirm("Bạn có muốn bỏ sản phẩm này?");
            if (!confirmDelete) {
              return;
            } else {
              for (let j = 0; j < myCart.length; j++) {
                if (itemId == myCart[j].id) {
                  myCart.splice(j, 1);
                  currentUser.cart = myCart;
                  // console.log(myCart);
                  localStorage.setItem("users", JSON.stringify(users));
                  render();
                  total();
                  window.location.href = "../pages/cart.html";
                  break;
                }
              }
            }
          } else {
            for (let j = 0; j < myCart.length; j++) {
              if (itemId == myCart[j].id) {
                myCart[j].quantity--;
                currentUser.cart = myCart;
                // console.log(myCart);
                localStorage.setItem("users", JSON.stringify(users));
                render();
                total();
              }
            }
          }
        }
      }
    }
  }
}
