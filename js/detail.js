function renderDetailProduct() {
  const productDetail =
    JSON.parse(localStorage.getItem("product_select")) || {};

  document.getElementById("product-image").src = productDetail.image;
  document.getElementById("name-product").innerHTML = productDetail.name;
  document.getElementById("price").innerHTML = productDetail.price;
  document.getElementById("sold").innerHTML = productDetail.sold;
  document.getElementById("stock").innerHTML = productDetail.stock;
}
renderDetailProduct();
