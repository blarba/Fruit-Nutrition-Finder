const baseURL = "https://www.fruityvice.com/api/fruit";

function displayResults(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    const table = document.createElement("table");
    table.className = "table";
  
    const headerRow = document.createElement("tr");
    const headers = ["Name", "Family", "Genus", "Order", "Calories", "Carbs (g)", "Protein (g)", "Fat (g)", "Sugar (g)"];
    headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    data.forEach(fruit => {
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const familyCell = document.createElement("td");
        const genusCell = document.createElement("td");
        const orderCell = document.createElement("td");
        const caloriesCell = document.createElement("td");
        const carbsCell = document.createElement("td");
        const proteinCell = document.createElement("td");
        const fatCell = document.createElement("td");
        const sugarCell = document.createElement("td");
        
        nameCell.textContent = fruit.name;
        familyCell.textContent = fruit.family;
        genusCell.textContent = fruit.genus;
        orderCell.textContent = fruit.order;
        caloriesCell.textContent = fruit.nutritions.calories;
        carbsCell.textContent = fruit.nutritions.carbohydrates;
        proteinCell.textContent = fruit.nutritions.protein;
        fatCell.textContent = fruit.nutritions.fat;
        sugarCell.textContent = fruit.nutritions.sugar;
    
        tableRow.appendChild(nameCell);
        tableRow.appendChild(familyCell);
        tableRow.appendChild(genusCell);
        tableRow.appendChild(orderCell);
        tableRow.appendChild(caloriesCell);
        tableRow.appendChild(carbsCell);
        tableRow.appendChild(proteinCell);
        tableRow.appendChild(fatCell);
        tableRow.appendChild(sugarCell);
    
        table.appendChild(tableRow);
    });
  
    container.appendChild(table);
  }

  async function fruitFinder() {
    const query = document.getElementById("fruitQuery").value.toLowerCase();
    const results = [];

    const res = await fetch(`${baseURL}/all`);
    const data = await res.json();
    data.forEach(fruit => {
        if (
          fruit.name.toLowerCase().includes(query) ||
          fruit.family.toLowerCase().includes(query) ||
          fruit.genus.toLowerCase().includes(query) ||
          fruit.order.toLowerCase().includes(query)
        ) {
          results.push(fruit);
        }
      });
      displayResults("searchTable", results);
  }

async function nutritionSorter() { 
    const nutrient = document.getElementById("nutrient").value;
    const min = parseFloat(document.getElementById("min").value);
    const max = parseFloat(document.getElementById("max").value);
  
    const res = await fetch(`${baseURL}/${nutrient}?min=${min}&max=${max}`);
    const data = await res.json();
    displayResults("nutritionTable", data);
}

async function loadDatabase() {
    const res = await fetch(`http://localhost:3000/getfruitdb`)
    .then((result) => result.json())
    .then((resultJson) => {
      const tableRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      const familyCell = document.createElement("td");
      const genusCell = document.createElement("td");
      const orderCell = document.createElement("td");
      const caloriesCell = document.createElement("td");
      const carbsCell = document.createElement("td");
      const proteinCell = document.createElement("td");
      const fatCell = document.createElement("td");
      const sugarCell = document.createElement("td");
      
      nameCell.textContent = fruit.name;
      familyCell.textContent = fruit.family;
      genusCell.textContent = fruit.genus;
      orderCell.textContent = fruit.order;
      caloriesCell.textContent = fruit.nutritions.calories;
      carbsCell.textContent = fruit.nutritions.carbohydrates;
      proteinCell.textContent = fruit.nutritions.protein;
      fatCell.textContent = fruit.nutritions.fat;
      sugarCell.textContent = fruit.nutritions.sugar;
  
      tableRow.appendChild(nameCell);
      tableRow.appendChild(familyCell);
      tableRow.appendChild(genusCell);
      tableRow.appendChild(orderCell);
      tableRow.appendChild(caloriesCell);
      tableRow.appendChild(carbsCell);
      tableRow.appendChild(proteinCell);
      tableRow.appendChild(fatCell);
      tableRow.appendChild(sugarCell);
  
      table.appendChild(tableRow);
    })
}

window.addEventListener("DOMContentLoaded", () => {
    loadDatabase();
  });