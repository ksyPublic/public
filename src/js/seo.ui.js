import Initilize from './common';
import Tab from './components/tab';
import Accordion from './components/accordion';

document.addEventListener('DOMContentLoaded', function () {
  Initilize.initilize();
});

const ui = {
  Initilize,
  Accordion,
  Tab,
};

window.SEO = { ...ui };
