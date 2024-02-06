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
        <label for="ninja-village">Village:</label>
        <input type="text" name='village' id="ninja-village" required>
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
};


export const renderVillage = (village) => {
  const villageElement = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.textContent = village.name;

  const ul = document.createElement('ul');
  ul.innerHTML = renderNinjas(village);

  villageElement.append(h3, ul);

  document.querySelector('#app').append(villageElement);
};

export const findVillageHelper = (villageName) => {
  return Village.allVillages.find(village => village.name === villageName);
};

export const renderNinjas = (village) => {
  const ninjas = village.ninjas;
  return ninjas.length > 0 ? ninjas.map(ninja => `<li>${ninja.name} - ${ninja.rank}</li>`).join('') : 'No ninjas in this village.';
};

export const updateDropDown = () => {
  const selectElement = document.querySelector('#villages');
  selectElement.innerHTML = Village.allVillages.map(village => `<option value="${village.name}">${village.name}</option>`).join('');
};
