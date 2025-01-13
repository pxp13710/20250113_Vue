// html 파일에서 module을 사용하는 경우 type이 반드시 module 이어야 한다

// 개별 export된 요소는 import { export된 변수명, .. } from '파일명.확장자' 형태로 불러온다
// { } 내부의 변수명은 export 한 이름과 동일한 이름으로 정의
// as로 이름 변경 가능
import { name as nick, age, check, arr, user, add } from './exportOne.js';

// 개별 export가 많으면 나열이 귀찮아짐. 하나의 이름으로 묶어서 사용 가능
import * as one from './exportOne.js';

// default도 *과 비슷하게 사용. { } 없이 중복되지 않은 임의의 변수명으로 정의해서 사용
// default와 개별 export를 같이 정의하는 경우는 반드시 default가 먼저 기술되어야 한다
import two, { x, y, ageTwo, name } from './exportTwo.js';

// 개별 export은 위의 두 방식 중 하나를 이용해서 정의
// import { x, y, ageTwo, name } from './exportTwo.js';

// 외부 CSS 파일 import
// import './../node_modules/bootstrap/dist/css/bootstrap.css';

// 외부 라이브러리
// import $ from 'jquery';

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
