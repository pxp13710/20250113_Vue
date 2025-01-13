import { name as nick, age, check, arr, user, add } from './exportOne.js';
import * as one from './exportOne.js';
import two, { x, y, ageTwo, name } from './exportTwo.js';

// 외부 CSS 파일 import. node_modules까지 경로는 webpack이 알아서 붙여줌
import 'bootstrap/dist/css/bootstrap.css';

// 외부 라이브러리
import $ from 'jquery';

const dom = `
  Name: ${nick} / ${one.name}<br>
  Age: ${age} / ${one.age}<br>
  Check: ${check} / ${one.check}<br>
  
  <p>Vue에서는 객체(배열, 오브젝트)가 존재하는 경우 객체의 요소값이 없는 경우는 화면 출력 안함<br>
  즉 undefined, null은 화면 출력 안함</p>

  Array: ${arr[0]} / ${one.arr[1]} / ${arr[2]}<br>
  Object: ${user.name} / ${one.user.age} / ${user.address}<br>
  Function: ${add(10, 20)} / ${one.add(20, 30)}<br> 

  <hr>

  ProgName: ${two.progName}<br>
  getName: ${two.getName()}<br>
  getTotal: ${two.totol(100, 90)}<br>
  getAvg: ${two.avg(190, 2)}<br>
  X: ${x}<br>
  Y: ${y}<br>
  Name: ${name}<br>
  AgeTwo: ${ageTwo}<br>
`;

// console에 출력
console.log(dom);

// dom에 출력
document.getElementById('app').innerHTML = dom;

// jquery
$('#root').html(dom);
