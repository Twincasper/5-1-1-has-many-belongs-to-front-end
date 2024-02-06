// main.js
import './style.css';
import { renderMain, renderVillage, updateDropDown, findVillageHelper, renderNinjas, } from './utils/render-functions.js';
import { Village } from './models/has-many.js';

const handleVillageSubmit = (e) => {
  e.preventDefault();
  const newVillage = Object.fromEntries(new FormData(e.target));
  const village = new Village(newVillage.name, newVillage.residents, newVillage.kage);
  renderVillage(village);
  updateDropDown();
  e.target.reset();
};

const handleNinjaSubmit = (e) => {
  e.preventDefault();
  const villageName = document.querySelector('#village-dropdown').value;
  const village = findVillageHelper(villageName);
  if (village) {
    const newNinja = Object.fromEntries(new FormData(e.target));
    village.addNinja(newNinja.name, newNinja.rank);
    renderVillage(village);
    e.target.reset();
  } else {
    console.log('Village not found.');
  }
};


const main = () => {
  renderMain();

  document.getElementById('village-form').addEventListener('submit', handleVillageSubmit);
  document.getElementById('ninja-form').addEventListener('submit', handleNinjaSubmit);
};

main();
