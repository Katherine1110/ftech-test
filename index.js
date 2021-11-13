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

colArr.forEach((column) => {
  const name = column.name;
  const dataType = column.dataType;

  const nameEl = document.createElement('div');
  nameEl.classList.add('col');
  nameEl.textContent = name;

  const wrapEl = document.createElement('div');
  wrapEl.classList.add('container');

  wrapEl.appendChild(nameEl);
  wrap.appendChild(wrapEl);

  for (let i = 0; i < rowArr.length; i++) {
    const element = rowArr[i];

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
    } else if (dataType === 'DateTime') {
      const dataValue = document.createElement('div');
      dataValue.classList.add('value');
      dataValue.textContent = formatDate(d);
      wrapEl.append(dataValue);
    }
  }
});
