import { Village } from "../models/has-many.js";

export const renderMain = () => {
  const form = document.querySelector('#app');
  const ninjaSection = document.createElement('div');

  ninjaSection.innerHTML = `
    <h2>Add Ninja</h2>
    <form id="ninja-form">
        <label for="ninja-name">Ninja Name:</label>
        <input type="text" name='name' id="ninja-name" required>
        <label for="ninja-rank">Ninja Rank:</label>
        <input type="text" name='rank' id="ninja-rank" required>
        <label for="village-dropdown">Village:</label> <!-- Corrected id -->
        <select id="village-dropdown" required></select> <!-- Use a select dropdown instead of input -->
        <label for="ninja-jutsus">Jutsus:</label>
        <input type="text" name='jutsus' id="ninja-jutsus" required>
        <button type="submit">Add Ninja</button>
    </form>
  `;

  const villageSection = document.createElement('div');
  villageSection.id = 'villageForm';
  villageSection.innerHTML = `
    <h2>Add Village</h2>
    <form id="village-form">
        <label for="village-name">Village Name:</label>
        <input type="text" name='name' id="village-name" required>
        <label for="village-residents">Number of Residents:</label>
        <input type="number" name='residents' id="village-residents" required>
        <label for="village-kage">Kage:</label>
        <input type="text" name='kage' id="village-kage" required>
        <button type="submit">Add Village</button>
    </form>
  `;
  form.append(ninjaSection, villageSection);

  updateDropDown();
};

export const renderVillage = (village) => {
  let villageElement = document.querySelector(`#village-${village.name}`);

  if (!villageElement) {
    villageElement = document.createElement('div');
    villageElement.id = `village-${village.name}`;
    document.querySelector('#app').appendChild(villageElement);
  }

  const h3 = document.createElement('h3');
  h3.textContent = village.name;

  const ul = document.createElement('ul');
  ul.innerHTML = renderNinjas(village);

  villageElement.innerHTML = '';
  villageElement.append(h3, ul);
};


export const findVillageHelper = (villageName) => {
  return Village.getAllVillages().find(village => village.name === villageName);
};

export const renderNinjas = (village) => {
  const ninjas = village.getAllNinjas();
  return ninjas.length > 0 ? ninjas.map(ninja => `<li>${ninja.name} - ${ninja.rank}</li>`).join('') : 'No ninjas in this village.';
};

export const updateDropDown = () => {
  const selectElement = document.querySelector('#village-dropdown');
  selectElement.innerHTML = Village.getAllVillages().map(village => `<option value="${village.name}">${village.name}</option>`).join('');
};
