let title = document.getElementById("title");
let price = document.getElementById("price");
let count = document.getElementById("count");
let add = document.getElementById("add");
let del = document.getElementById("del");
//create
let dataPro;
if (localStorage.products != null) {
  dataPro = JSON.parse(localStorage.products);
} else {
  dataPro = [];
}

function createPro() {
    let newPro = {
        title:title.value,
        price:price.value,
        count:count.value,
    }
console.log(newPro)

if (newPro.count > 1) {
    for (let i = 0; i < newPro.count; i++) {
      dataPro.push(newPro);
    }
  } else {
    dataPro.push(newPro);
  } localStorage.setItem("products", JSON.stringify(dataPro));
  console.log(dataPro);
}


//read
function showData(){
    let table = "";
    for(let i = 0; i < dataPro.length; i++){
        table += `
         <tr>
            <td>${dataPro[i].title}</td>
            <td><span class="price">${dataPro[i].price}</span></td>
            <td><span class="count">${dataPro[i].count}</span></td>
        </tr>
         `
    }
    document.getElementById("tbody").innerHTML = table;

 }
 showData();
 function clearData() {
    title.value = "";
    price.value = "";
    count.value = "";
  }
  showData();

//delete
function deletePro() {}
