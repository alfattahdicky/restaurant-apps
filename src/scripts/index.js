import 'regenerator-runtime'; /* for async await transpile */
import '../styles/config.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.getElementById('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
