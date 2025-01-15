<script>
export default {
  // immutable 값이다. 즉 읽기 전용이다
  props: {
    title: { type: String, required: true },
    today: { type: [String, Number], default: 'time' },
    age: { 
      type: Number, 
      default: 0,         // validator의 대상이 된다
      validator(value) { 
        return value >= 0 && typeof value === 'number';
      } 
    },
    add: { type: String, required: true, },
    changeAddress: {
      type: Function,
      // 함수의 경우는 default 함수 자체가 default 값으로 사용된다.
      default(x) {
        alert('값이 전달되지 않았습니다', x);
      },
      validator(value) {          // default 함수도 validator의 대상이 된다
        // console.log(value);
        if(value.length === 1) return true
        else return false;
      }
    },
    arr: {
      type: Array,
      // 참조형 변수의 기본값은 함수의 리턴값으로 기술해야 한다
      default: () => [0, 0],
      validator: (value) => (value.length >= 2) ? true : false,
    },
    user: {
      type: Object,
      default: () => ({name: 'Unknown', age: 1}),
      // 변수의 값이 undefined, null, '', 0, -0, NaN, false면 모두 false로 취급된다
      validator: (value) => (value.name && value.age)
    },
    onAdd: {
      type: Function,
      default: () => '전달된 값이 존재하지 않습니다',
      validator: (value) => {
        if(typeof value(1, 2) === 'string') return true;
        else return false;
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    now() {
      const dateTime = new Date();
      switch(this.today) {
        case 'date':
          return dateTime.toLocaleDateString();
        case 'time':
          return dateTime.toLocaleTimeString();
        default:
          return dateTime.toLocaleString();
      }
    }
  }
};
</script>

<template>
  <h5>A02 Props Child ONE</h5>

  <div class="mb-5">
    Title: {{ title }}<br />
    NOW: {{ now }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    onAdd: {{ onAdd(10, 20) }}
    
    <hr>

    <button @click="() => changeAddress('광주')">광주</button>
  </div>
</template>
