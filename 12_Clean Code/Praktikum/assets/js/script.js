var submitButton = document.getElementById("submit-button");
var count = 1001;

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var productName = document.getElementById("product-name").value;
  var productCategory = document.getElementById("product-category").value;
  var imageProduct = document.getElementById("image-product").value;
  var productFreshness = document.querySelector(
    'input[name="productCondition"]:checked'
  );
  var additionalDescription = document.getElementById(
    "additional-description"
  ).value;
  var productPrice = document.getElementById("product-price").value;

  if (productName == "" || productPrice == "") {
    alert("Please enter a valid Product name and price.");
  } else {
    if (productName.length > 25) {
      alert("Product Name must not exceed 25 characters.");
    }
  }

  if (productName === "") {
    alert("The Product Name field must be filled in.");
    return;
  } else if (/[**@/#{}**]/.test(productName)) {
    alert("Name must not contain symbols.");
    return;
  }

  if (productCategory === "") {
    alert("The Product Category field must be filled in.");
    return;
  }
  if (imageProduct === "") {
    alert("The Image of Product field must be filled in.");
    return;
  }
  if (!productFreshness) {
    alert("The Product Freshness field must be filled in.");
    return;
  }
  if (additionalDescription === "") {
    alert("The Additional Description field must be filled in.");
    return;
  }
  if (productPrice === "") {
    alert("The Product Price field must be filled in.");
    return;
  }

  alert(
    "Product name: " +
      productName +
      "\nProduct Category: " +
      productCategory +
      "\nImage of Product: " +
      imageProduct +
      "\nProduct Freshness: " +
      productFreshness +
      "\nAddtional Description: " +
      additionalDescription +
      "\nProduct Price: " +
      productPrice
  );

  var newRow = document.createElement("tr");
  var nomorCell = document.createElement("td");
  var pNameCell = document.createElement("td");
  var pCategoryCell = document.createElement("td");
  var imageCell = document.createElement("td");
  var pFreshnessCell = document.createElement("td");
  var descriptionCell = document.createElement("td");
  var pPriceCell = document.createElement("td");

  nomorCell.innerText = count++;
  pNameCell.innerText = productName;
  pCategoryCell.innerText = productCategory;
  imageCell.innerText = imageProduct;
  pFreshnessCell.innerText = productFreshness;
  descriptionCell.innerText = additionalDescription;
  pPriceCell.innerText = productPrice;

  newRow.appendChild(nomorCell);
  newRow.appendChild(pNameCell);
  newRow.appendChild(pCategoryCell);
  newRow.appendChild(imageCell);
  newRow.appendChild(pFreshnessCell);
  newRow.appendChild(descriptionCell);
  newRow.appendChild(pPriceCell);

  var tableBody = document.getElementById("table-body");
  tableBody.appendChild(newRow);

  document.getElementById("product-name").value = "";
  document.getElementById("product-category").value = "";
  document.getElementById("image-product").value = "";
  document.getElementById("product-freshness").value = "";
  document.getElementById("additional-description").value = "";
  document.getElementById("product-price").value = "";
});

var deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", function (event) {
  event.preventDefault();

  var tableBody = document.getElementById("table-body");
  var lastRow = tableBody.lastElementChild;
  tableBody.removeChild(lastRow);
});

var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  var search = document.getElementById("search").value;

  var tableRows = document.getElementsByTagName("tr");
  var found = false;

  for (var i = 1; i < tableRows.length; i++) {
    var rowCells = tableRows[i].getElementsByTagName("td");

    if (rowCells[1].innerText === search) {
      alert(
        "Data ditemukan!\nNo: " +
          rowCells[0].innerText +
          "\nProduct Name: " +
          rowCells[1].innerText +
          "\nProduct Category: " +
          rowCells[2].innerText +
          "\nImage of Product: " +
          rowCells[3].innerText +
          "\nProduct Freshness: " +
          rowCells[4].innerText +
          "\nAdditional Description: " +
          rowCells[5].innerText +
          "\nProduct Price: " +
          rowCells[6].innerText
      );
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Data tidak ditemukan.");
  }
});
