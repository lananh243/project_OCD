function renderProduct() {
  const produtcs = JSON.parse(localStorage.getItem("products")) || [];
  let htmlString = "";
  for (let i = 0; i < produtcs.length; i++) {
    htmlString += `
        <tr>
            <td>${i + 1}</td>
            <td>${produtcs[i].name}</td>
            <td><img width="150px" src=${produtcs[i].image} alt="img" /></td>
            <td>${produtcs[i].price} ₫</td>
            <td>${produtcs[i].stock}</td>
            <td>
                <span class="material-symbols-outlined"> open_in_new </span>
                <span class="material-symbols-outlined"> close </span>
            </td>
        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = htmlString;
}
renderProduct();
