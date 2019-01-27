import './header.scss';
import {createHTML} from '../../lib/lib';

const header = () => {
  const html = '<div>HEADER</div>';
  document.getElementById('container')
          .appendChild(createHTML(html,'header'));
}

export default header;