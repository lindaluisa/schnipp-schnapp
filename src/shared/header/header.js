import './header.scss';

const createHMTL = (html) => {
  const div = document.createElement('div');
  div.classList.add('header');
  div.innerHTML = html;
  return div;
}

const header = () => {
  const html = '<div>HEADER</div>';
  document.getElementById('container').appendChild(createHTML(html));
}

export default header;