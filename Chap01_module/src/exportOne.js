// 개별 export. 읽기 전용값이 된다.
export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

console.log(`ONE: ${name} / ${age}`);

// 개별 export를 묶어서 사용. export할 이름을 as를 이용해 변경할 수 있다
export { arr, user, onAdd as add };
