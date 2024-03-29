// let productData = [
//   {
//     id: 1,
//     name: "Đầm Nhung Dáng Xoè Đính Cúc Tay Dài Viền Bèo",
//     price: "149.900",
//     sold: "12,4k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls26twfutvvdf8",
//     stock: 20,
//   },
//   {
//     id: 2,
//     name: "Set Áo Dài Cách Tân",
//     price: "149.900",
//     sold: "7,2k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lomow3jq0emj72",
//     stock: 30,
//   },
//   {
//     id: 3,
//     name: "Set áo dạ nơ cổ phối chân váy cách điệu ",
//     price: "500.000",
//     sold: "18,2k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lom0qbj99tpz7a",
//     stock: 10,
//   },
//   {
//     id: 4,
//     name: "Váy nữ thiết kế MAKKA",
//     price: "326.000",
//     sold: "1,2k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqzpxuydmd38d4",
//     stock: 50,
//   },
//   {
//     id: 5,
//     name: "SET 3 ÁO GILE HOA + SƠ MI + CHÂN VÁY TENNIS SIÊU KUTE",
//     price: "399.000",
//     sold: "2,1k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq90njd8kno280",
//     stock: 200,
//   },
//   {
//     id: 6,
//     name: "Đầm Cúp Tay Phồng Von",
//     price: "143.660",
//     sold: "6,3k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk32kxbtc62c2c",
//     stock: 220,
//   },
//   {
//     id: 7,
//     name: "Set Bộ Đồ Nữ Adidass",
//     price: "189.000",
//     sold: "1,9k",
//     image:
//       "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo97ydbdg4gba5",
//     stock: 120,
//   },
//   {
//     id: 8,
//     name: "🔥HOT🔥Thú Nhồi Bông Hình Chú Mèo Dễ Thương",
//     price: "83.500",
//     sold: "1,2k",
//     image:
//       "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq097mlgk6d160",
//     stock: 100,
//   },
// ];

// localStorage.setItem("products", JSON.stringify(productData));

// lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));
// console.log("111111", products);
//  function render product
function renderProduct() {
  let element = "";
  for (let i = 0; i < products.length; i++) {
    element += `
                    <div class="product__item" onclick="detail" id="">
                        <div class="image" onclick="redirectToProductPage(${products[i].id})">
                            <img src="${products[i].image}" alt="">
                        </div>
                        <p>${products[i].name}</p>
                        <div>
                            <p>price:${products[i].price}</p>
                            <p><button onclick="addToCart(${products[i].id})">Thêm vào giỏ hàng</button></p>
                        </div>
                    </div>
                `;
  }

  // console.log("1111111111",element);
  document.getElementById("products").innerHTML = element;
}
renderProduct();
// function đi mua hàng
function addToCart(productId) {
  // console.log("đã gọi hàm");
  /* 
        khi nào cho user đi mua hàng
        khi đăng nhập thì mới cho mua
     */
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));

  if (checkLogin == null) {
    console.log("bạn phải đăng nhập để đi mua hàng");
    return; // gặp return dừng chương trình luôn
  }
  // kết hợp status user la true
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      console.log(8888, users[i].status);
      if (users[i].status === false) {
        console.log("tài khoản bị khóa");
        return;
      }
      // Kết thúc vòng lặp sau khi tìm thấy user
    }
  }
  console.log("đi mua hàng bình thường");
  /* 
        lấy giỏ hàng của user để đi mua hàng
        và lấy giỏ hàng user dựa vào id của user
     */

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      //lấy thông tin sản phẩm để đưa vào giỏ hàng
      // làm sao để lấy thông tin sản phẩm
      // console.log("11111", productId);
      // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
      let product = JSON.parse(localStorage.getItem("products"));
      for (let j = 0; j < product.length; j++) {
        if (productId == product[j].id) {
          // lấy thông tin sản phẩm
          console.log("1111", product[j]);
          console.log("giỏ hàng của user sẽ là ", users[i].cart);
          // let a={...product[j],quantity:1}
          /* 
                        trước khi thêm vào phải xem trong giỏ hàng có sản phẩm đó chưa
                        có rồi thì tăng số lượng còn chưa có thì thêm vào bt
                    */
          // kiểm tra xem trong giỏ hàng có tồn tại sản phẩm đó chưa
          // duyệt giỏ hàng
          let index = users[i].cart.findIndex((item, index) => {
            return item.id == productId;
          });
          if (index == -1) {
            //tức là không có thêm bình thường
            console.log("chưa có ");
            users[i].cart.push({ ...product[j], quantity: 1 });
            localStorage.setItem("users", JSON.stringify(users));
            showQuantityCart();
          } else {
            //có rồi đi tăng số lượng
            // mình phải biết vị trí của cái cần tăng
            users[i].cart[index].quantity = ++users[i].cart[index].quantity;
            localStorage.setItem("users", JSON.stringify(users));
          }
          // for (let index = 0; index < users[i].cart.length; index++) {
          //         if(users.cart[index].id==productId){
          //         }
          // }
          // sau khi push xong thì lưu trên local
        }
      }
    }
  }
}
// function hiển thị số lượng sản phẩm
function showQuantityCart() {
  // lấy giỏ hàng ra.length là được
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      // console.log(users[i].cart);
      document.getElementsByClassName("itemInCart")[0].innerHTML =
        users[i].cart.length;
    }
  }
}
showQuantityCart();
function detail() {
  for (let i = 0; i < products.length; i++) {}
}

//
function redirectToProductPage(id) {
  const product_select = products.find((p) => p.id == id);
  localStorage.setItem("product_select", JSON.stringify(product_select));
  window.location.href = "./pages/detail.html";
}

function logined() {
  const user = document.getElementById("user");
  const logined = document.getElementById("logined");
  const userName = document.getElementById("userName");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  for (let i = 0; i < users.length; i++) {
    logined.style.display = "none";
    user.style.display = "flex";
    if (checkLogin === users[i].id) {
      logined.style.display = "flex";
      user.style.display = "none";
      userName.innerHTML = `${users[i].lastName} ${users[i].firstName}`;
      break;
    }
  }
}
logined();
