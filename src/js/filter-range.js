const formatNumber = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

function initRangeSlider({
  rangeInputsClassName = 'filter__range-inputs input',
  priceInputsClassName = 'filter__price-input',
  progressClassName = 'filter__range-progress',
  minRangeClassName = 'filter__range-min',
  minPriceInputClassName = 'filter__price-input--min'
} = {}) {
  const rangeInputs = document.querySelectorAll(`.${rangeInputsClassName}`);
  const priceInputs = document.querySelectorAll(`.${priceInputsClassName}`);
  const progress = document.querySelector(`.${progressClassName}`);
  let priceGap = 500000;

  priceInputs.forEach(input => {
    input.addEventListener('input', e => {
        const isMinPriceEmpty = !priceInputs[0].value.trim().length;
        const isMaxPriceEmpty = !priceInputs[1].value.trim().length;
        let minPrice = isMinPriceEmpty ? 0 : parseInt(priceInputs[0].value.replace(/\s/g, ''));
        let maxPrice = isMaxPriceEmpty ? 0 : parseInt(priceInputs[1].value.replace(/\s/g, ''));
        if (minPrice > maxPrice) {
          minPrice = maxPrice;
        }

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputs[1].max) {
            if (e.target.classList.contains(minPriceInputClassName)) {
                priceInputs[0].value = isMinPriceEmpty ? '' : formatNumber(minPrice);
                rangeInputs[0].value = minPrice;
                progress.style.left = ((minPrice / rangeInputs[0].max) * 100) + '%';
            } else {
                priceInputs[1].value = isMaxPriceEmpty ? '' : formatNumber(maxPrice);
                rangeInputs[1].value = maxPrice;
                progress.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + '%';
            }
        }
    });
  });

  rangeInputs.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeInputs[0].value.replace(/\s/g, ''));
        let maxVal = parseInt(rangeInputs[1].value.replace(/\s/g, ''));

        if ((maxVal - minVal) < priceGap){
            if (e.target.className === minRangeClassName) {
              rangeInputs[0].value = maxVal - priceGap;
            } else {
              rangeInputs[1].value = minVal + priceGap;
            }
        } else {
            priceInputs[0].value = formatNumber(minVal);
            priceInputs[1].value = formatNumber(maxVal);
            progress.style.left = ((minVal / rangeInputs[0].max) * 100) + '%';
            progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + '%';
        }
    });
  });
}

initRangeSlider();