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
          title: title.value,
          price: price.value,
          count: count.value
        };
      
        if (newPro.count > 1) {
          for (let i = 0; i < newPro.count; i++) {
            dataPro.push({ ...newPro });
          }
        } else {
          dataPro.push({ ...newPro });
        }
      
        localStorage.setItem("products", JSON.stringify(dataPro));
        clearData(); // ننظف الحقول بعد الإضافة
      }

showData()
//read
function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `
         <tr>
              <td>${i + 1}</td>
            <td>${dataPro[i].title}</td>
            <td><span class="price">${dataPro[i].price}</span></td>
            <td><span class="count">${dataPro[i].count}</span></td>
        </tr>
         `;
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

function handleDelete() {
    const id = window.prompt('Enter ID to delete:');
    if (id !== null && id.trim() !== '') {
      deleteData(id);
    }
  }
  function deleteData(id) {
    let index = parseInt(id) - 1; // لأن الجدول يظهر id بـ i + 1
    if (!isNaN(index) && index >= 0 && index < dataPro.length) {
      dataPro.splice(index, 1); // حذف العنصر من المصفوفة
      localStorage.setItem("products", JSON.stringify(dataPro));
      showData(); // إعادة عرض البيانات
      alert("تم حذف المنتج بنجاح");
    } else {
      alert("رقم المعرف غير صالح");
    }
  }
  