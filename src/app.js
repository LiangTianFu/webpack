import './css/common.css';
import Layer from './components/layer/layer.js';
// import './js/class/lesson1.js';
// import './js/class/lesson2.js'
// import './js/class/lesson3.js'
 import 'babel-polyfill';
 // import './js/class/lesson4.js';
 // import './js/class/lesson5.js';
 // import './js/class/lesson6.js';
  import './js/class/lesson7.js';


const App = function() {
  var dom = document.getElementById('app');
  var layer = new Layer();

  dom.innerHTML = layer.tpl({
    name: 'sky',
    arr: ['apple', 'meizu', 'mini']
  });
}

new App();
