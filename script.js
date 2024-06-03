function generateArray() {
  const arrayLength = parseInt(document.getElementById('arrayLength').value);
  const array = [];

  for (let i = 0; i < arrayLength; i++) {
      array.push(Math.floor(Math.random() * 100));
  }

  
  document.getElementById('output').innerHTML = `<p><strong>Вхідний масив:</strong> ${array.join(' ')}</p>`;


  for (let i = 0; i < arrayLength - 1; i++) {
      let maxIndex = i;
      for (let j = i + 1; j < arrayLength; j++) {
          if (array[j] > array[maxIndex]) {
              maxIndex = j;
          }
      }
      if (maxIndex !== i) {
          const temp = array[i];
          array[i] = array[maxIndex];
          array[maxIndex] = temp;
      }
  }


  document.getElementById('output').innerHTML += `<p><strong>Відсортований масив:</strong> ${array.join(' ')}</p>`;

  
  let evenMax = -Infinity;
  let evenMin = Infinity;
  let oddMax = -Infinity;
  let oddMin = Infinity;

  for (let i = 0; i < arrayLength; i++) {
      if (i % 2 === 0) {
          if (array[i] > evenMax) {
              evenMax = array[i];
          }
          if (array[i] < evenMin) {
              evenMin = array[i];
          }
      } else {
          if (array[i] > oddMax) {
              oddMax = array[i];
          }
          if (array[i] < oddMin) {
              oddMin = array[i];
          }
      }
  }

  document.getElementById('output').innerHTML += `<p><strong>Максимальне значення серед елементів із парними номерами:</strong> ${evenMax}</p>`;
  document.getElementById('output').innerHTML += `<p><strong>Мінімальне значення серед елементів із парними номерами:</strong> ${evenMin}</p>`;
  document.getElementById('output').innerHTML += `<p><strong>Максимальне значення серед елементів із непарними номерами:</strong> ${oddMax}</p>`;
  document.getElementById('output').innerHTML += `<p><strong>Мінімальне значення серед елементів із непарними номерами:</strong> ${oddMin}</p>`;
}
