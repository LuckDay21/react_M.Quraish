document.getElementById("submit-button").addEventListener("click", function () {
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
});
