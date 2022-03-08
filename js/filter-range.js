import DoubleSlider from 'double-slider';

const minPrice = document.querySelector('#minPrice');
const maxPrice = document.querySelector('#maxPrice');
const rangeSlider = new DoubleSlider(document.getElementById('filter-range'));

minPrice.addEventListener('input', () => {});
maxPrice.addEventListener('input', () => {});

rangeSlider.addEventListener('slider:change', () => {
  const {min, max} = rangeSlider.value;
  minPrice.value = min;
  maxPrice.value = max;
});