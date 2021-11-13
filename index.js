import data from './data.js';

const body = document.querySelector('body');
const wrap = document.createElement('div');
const headerEl = document.querySelector('.table');
const rowsEl = document.querySelector('.rows');

wrap.classList.add('wrapper');
body.prepend(wrap);

const colArr = data.columns;
const rowArr = [...data.rows];

function formatDate(date) {
  const dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  const mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  const yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

const d = new Date(rowArr[0].values[3]);

console.log(formatDate(d).toString());

colArr.forEach((column) => {
  const name = column.name;
  const dataType = column.dataType;
  // const rowValue = rowArr.values[0];
  // console.log(dataType);

  const nameEl = document.createElement('div');
  nameEl.classList.add('col');
  nameEl.textContent = name;

  // console.log(nameEl);

  const wrapEl = document.createElement('div');
  wrapEl.classList.add('container');

  wrapEl.appendChild(nameEl);
  wrap.appendChild(wrapEl);

  const dataEl = document.createElement('div');
  dataEl.classList.add('row');
  dataEl.textContent = dataType;
  // console.log(dataEl);
  wrapEl.appendChild(dataEl);
  wrap.appendChild(wrapEl);

  for (let i = 0; i < rowArr.length; i++) {
    const element = rowArr[i];
    // console.log(wrapEl);

    if (nameEl.textContent === 'Острів') {
      const island = document.createElement('div');
      island.classList.add('value');
      island.textContent = rowArr[0].values[0];
      wrapEl.append(island);
    } else if (nameEl.textContent === 'Локація') {
      const location = document.createElement('div');
      location.classList.add('value');
      location.textContent = rowArr[0].values[1];
      wrapEl.append(location);
    } else if (nameEl.textContent === 'Текст') {
      const text = document.createElement('div');
      text.classList.add('value');
      text.textContent = rowArr[0].values[2];
      wrapEl.append(text);
    } else if (nameEl.textContent === 'Коментар') {
      const comment = document.createElement('div');
      comment.classList.add('value');
      comment.textContent = rowArr[0].values[4];
      wrapEl.append(comment);
    }

    const data = document.createElement('div');
    // data.classList.add('value');

    if (dataType === 'Дата') {
      data.textContent = rowArr[0].values[3];
      wrapEl.append(data);
      return;
    } else if (dataType === 'DateTime') {
      data.textContent = formatDate(d);
      wrapEl.replaceWith(data);
    }

    // if (nameEl.textContent === 'Дата') {
    // if (dataType.dataType === 'DateTime') {
    //   const data = document.createElement('div');
    //   data.classList.add('value');
    //   data.textContent = convertDate('2020-12-12T00:00:00');
    // } else if (dataType === 'Дата') {
    //   const data = document.createElement('div');
    //   data.classList.add('value');
    //   data.textContent = rowArr[0].values[3];
    //   wrapEl.append(data);
    // }
    // }
  }
});

// const date = colArr.find((data) => data.dataType === 'DateTime');
// console.log(date.dataType);
