// let products = [
//     {
//         id: 1,
//         name: "Đầm Nhung Dáng Xoè Đính Cúc Tay Dài Viền Bèo, Váy Thiết Kế Dự Tiệc Sang Chảnh",
//         price: "₫149.900",
//         sold: "12,4k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls26twfutvvdf8"

//     },
//     {
//         id: 2,
//         name: "Set Áo Dài Cách Tân Tay Loe Chất Liệu Nhung Đỏ Kèm Quần Trắng, Set Áo Dài Mặc Tết Sang Chảnh",
//         price: "₫149.900",
//         sold: "7,2k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lomow3jq0emj72",
//     },
//     {
//         id: 3,
//         name: "Set áo dạ nơ cổ phối chân váy cách điệu 2 lớp có kèm dây thắt lưng phong cách tiểu thư nữ tính",
//         price: "₫500.000",
//         sold: "18,2k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lom0qbj99tpz7a",
//     },
//     {
//         id:4,
//         name: "Váy nữ thiết kế MAKKA váy đen dáng xòe thiết kế tay phối kem 5001",
//         price: "₫326.000",
//         sold: "1,2k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqzpxuydmd38d4",
//     },
//     {
//         id: 5,
//         name: "(CÓ SẴN) SET 3 ÁO GILE HOA + SƠ MI + CHÂN VÁY TENNIS SIÊU KUTE",
//         price: "₫399.000",
//         sold: "2,1k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq90njd8kno280",
//     },
//     {
//         id: 6,
//         name: "Đầm Cúp Tay Phồng Von Kiến Đính Kim Sa Dáng Xoè Cực Xinh",
//         price: "₫143.660",
//         sold: "6,3k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk32kxbtc62c2c",
//     },
//     {
//         id: 7,
//         name: "Set Bộ Đồ Nữ Adidass Áo Dài Tay Phối Bo Dệt Gấu Sọc Vai Mix Quần Sooc Đùi Freesize",
//         price: "₫189.000",
//         sold: "1,9k",
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo97ydbdg4gba5",
//     },
//     {
//         id: 8,
//         name: "🔥HOT🔥Thú Nhồi Bông Hình Chú Mèo Dễ Thương（Mua mẫu 50cm, tặng mặt dây chuyền）",
//         price: "₫83.500",
//         sold: "1,2k",
//         image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq097mlgk6d160",
//     }

// ];

// localStorage.setItem("products",JSON.stringify(products));

// lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));
// console.log("111111", products);
//  function render product
function renderProduct() {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        element +=
            `
                    <div class="product__item">
                        <div class="image">
                            <img src="${products[i].image}" alt="">
                        </div>
                        <p>${products[i].name}</p>
                        <div>
                            <p>price:${products[i].price}</p>
                            <p><button onclick="addToCart(${products[i].id})">mua</button></p>
                        </div>
                    </div>
                `
    }

    // console.log("1111111111",element);
    document.getElementById("products").innerHTML = element
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
    if (checkLogin == null) {
        console.log("bạn phải đăng nhập để đi mua hàng");
        return // gặp return dừng chương trình luôn
    }
    console.log("đi mua hàng bình thường");
    /* 
        lấy giỏ hàng của user để đi mua hàng
        và lấy giỏ hàng user dựa vào id của user
     */
    let users = JSON.parse(localStorage.getItem("users"));
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
                        return item.id == productId
                    })
                    if (index == -1) {
                        //tức là không có thêm bình thường
                        console.log("chưa có ");
                        users[i].cart.push({ ...product[j], quantity: 1 });
                        localStorage.setItem("users", JSON.stringify(users));
                        showQuantityCart()
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
            document.getElementsByClassName("itemInCart")[0].innerHTML = users[i].cart.length
        }
    }
}
showQuantityCart();