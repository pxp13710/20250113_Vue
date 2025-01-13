import { name, age } from './exportOne.js';

// ES2015 이전까지의 모듈
const jumsu = (function () {
  const progName = '점수 프로그램';
  const name = '놀부';

  const getName = function () {
    return name;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return {
    progName,
    getName,
    totol: getTotal,
    avg: getAvg,
  };
})();
// console.log(progName);         Error
// console.log(jumsu);
// console.log(window);

// desult는 파일 내부에서 단 1개의 값만 지정 할 수 있다. 1이상 지정하면 에러
export default jumsu;

// 개별 export는 별개로 얼마든지 정의 가능
// import 한 값 이용
export const x = 10;
export const y = 20;

// import 한 값을 다시 export도 가능
const ageTwo = age + 100;
export { name, ageTwo };
