/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       ToTsz, Lau
 *      Student ID: 125497248
 *      Date:       3/Nov/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  createCategoryMenu();
});

function createCategoryMenu() {
  const menu = document.getElementById("menu");

  window.categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.setAttribute("category-id", category.id);

    button.addEventListener("click", () => {
      console.log(`Category ${category.id} button clicked`); // Debugging
      displayProducts(category.id);
    });

    menu.appendChild(button);
  });
}

function displayProducts(categoryId) {
  const category = window.categories.find((c) => c.id === categoryId);
  const selectedCategory = document.getElementById("selected-category");
  selectedCategory.textContent = `Genre: ${category.name}`;

  const tableBody = document.getElementById("category-products");
  tableBody.innerHTML = "";

  const filteredProducts = window.products.filter((product) => product.category === category.id);

  filteredProducts.forEach((product) => {
    const row = document.createElement("tr");

    const catalogNumber = document.createElement("td");
    catalogNumber.textContent = product.CatalogNumber;

    const title = document.createElement("td");
    title.textContent = product.Title;

    const artist = document.createElement("td");
    artist.textContent = product.Artist;

    const eraCreated = document.createElement("td");
    eraCreated.textContent = product.EraCreated;

    const recordCompany = document.createElement("td");
    recordCompany.textContent = product.RecordCompany;

    const discontinued = document.createElement("td");
    discontinued.textContent = product.Discontinued ? "Yes" : "No";

    const description = document.createElement("td");
    description.textContent = product.Description;

    const quantity = document.createElement("td");
    quantity.textContent = product.quantity;

    const price = document.createElement("td");
    price.textContent = `$${product.price.toFixed(2)}`;

    row.appendChild(catalogNumber);
    row.appendChild(title);
    row.appendChild(artist);
    row.appendChild(eraCreated);
    row.appendChild(recordCompany);
    row.appendChild(discontinued);
    row.appendChild(description);
    row.appendChild(quantity);
    row.appendChild(price);

    tableBody.appendChild(row);
  });
}
