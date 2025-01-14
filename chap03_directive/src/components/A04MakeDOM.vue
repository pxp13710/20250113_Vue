<script>
const data = {
  students: [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'NolBu', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
  ],
  items: [
    { id: 0, name: 'NolBu', age: 40 },
    { id: 1, name: 'HungBu', age: 30 },
    { id: 2, name: 'HangDan', age: 20 },
  ],
};

export default {
  data() {
    return {
      data,
      show: true,
      name: 'nolbu',
    }
  },

};
</script>

<template>
  <h3>A04 DOM Directive</h3>
  <br />

  <h5>1. v-show</h5>
  <div  v-show="show">
    표시 / 숨김을 반복적으로 할 목적. DOM은 남아 있음(CSS)<br />
    v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다.<br />
    v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
  </div>
  <br />

  <h5>2. v-if</h5>
  <div  v-if="name === 'nolbu'">
    표시 / 숨김을 반복적으로 표시 할 목적(v-show와 동일)과 조건에 맞는 View만을 표시할 목적.<br />
    DOM에서 완전히 삭제된다 - CSS가 적용되어 있는 경우 디자인 깨짐에 주의<br />

    Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.
  </div>
  <!-- <br />     중단에 다른 요소가 오면 에러 -->
  <div  v-else-if="name === 'hungbu'">
    v-else-if와 v-else 사이에 다른 태그가 끼어 있으면 에러 발생<br />
    항상 근접 태그로 기술 할 필요가 있다<br />

    v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다.<br />
    또한 여러 개를 사용할 수 있습니다.
  </div>
  <div  v-else>v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다</div>
  <br />

  <h5>3. v-for</h5>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Kor</th>
        <th>Eng</th>
      </tr>
    </thead>
    <tbody>
      <!-- key는 중복되지 않는 값으로 할당할 필요가 있다. index는 가능하면 사용하지 않는다.
        for(let idx = 0; idx < data.students.length; idx++) {
          const item = data.students[idx];
      -->
      <tr v-for="(item, idx) in data.students" v-bind:key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.kor }}</td>
        <td>{{ item.eng }}</td>
      </tr>
      <!--
      }
      -->

      <!-- v-if가 v-for보다 먼저 평가된다. template을 이용해 v-for를 먼저 구현 -->
      <template  v-for="(item, idx) in data.students" v-bind:key="idx" >
        <tr v-if="item.kor >= 90">
          <td>{{ idx + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.kor }}</td>
          <td>{{ item.eng }}</td>
        </tr>
      </template>
    </tbody>
  </table>
  <br />

  <ul>
    <li v-for="item in data.items" v-bind:key="item.id">
      {{ item.id }}. {{ item.name }} / {{ item.age }}
    </li>
  </ul>

  <!-- 객체도 반복 가능
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 }, 
  -->
  <ul>
    <li v-for="(value, key, index) in data.students[0]" v-bind:key="key">
      {{ key }} : {{ value }} / {{ index }}
    </li>
  </ul>

  <!-- 연속된 숫자를 출력. 시작은 1부터 시작한다 -->
  <ul>
    <li v-for="(item, idx) in 5" v-bind:key="item">{{ item }} / {{ idx }}</li>
  </ul>

  
  <div class="mb-5">
    <button class="btn btn-outline-primary btn-sm" @click="show = !show">Check</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'nolbu'">IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'hungbu'">Else IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'bangja'">Else</button><br />
  </div>
</template>
