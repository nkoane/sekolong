document.addEventListener('DOMContentLoaded', () => {
  const provinceSelector = document.getElementById('province');
  const getData = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    console.log(data.provinces);

    data.provinces.forEach((province) => {
      const optionElement = document.createElement('option');
      optionElement.value = province.code;
      optionElement.innerHTML = province.name;
      provinceSelector.appendChild(optionElement);
    });
  };

  getData();
});
