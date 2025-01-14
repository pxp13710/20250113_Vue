<script>
export default {
  data() {
    return {
      // form 요소의 값이 단일 값이면 기본형 변수, 값이 여러개면 배열로 정의한다
      formData: {
        name: '',
        age: 10,
        address: 'Seoul',
        zipCode: '',
        gender: '여자',
        check: true,
        isAgree: '동의',
        fruit: ['banana'],
        language: '',
        four: ['한화'],
        command: '',
        person: {},
      },
      // langs: ['Java', 'Python', 'JavaScript', 'C++', 'C#'],
      // baseball: ['KIA', 'LG', 'Samsung', 'KT', 'Doosan', 'NC', '한화'],
    }
  },
  computed:{
    langs: () => ['Java', 'Python', 'JavaScript', 'C++', 'C#'],
    baseball: () => ['KIA', 'LG', 'Samsung', 'KT', 'Doosan', 'NC', '한화'],
  },
  methods: {
    sendData() {
      // console.log(this.formData);

      // JavaScript 객체 => JSON 문자열로 변환
      const jsonData = JSON.stringify(this.formData);
      console.log(jsonData);

      // JSON 문자열 => JavaScript 객체로 변환
      const jsData = JSON.parse(jsonData);
      console.log(jsData);

      // fetch 등을 이용해 서버에 전달
    },
    changeZipCode(evt) {
      const value = Number(evt.target.value.trim());
      const regExp = /^[0-9]{5}$/;
      if(regExp.test(value)) this.formData.zipCode = value;
    }
  }
};
</script>

<template>
  <h3>A10 Vue Form Element</h3>
  <br />

  <form class="mb-5">
    <!-- v-model의 속성  3가지. 조합해서 사용 가능 -->
    <!-- 좌우의 공백을 제거한다 => trim -->
    Text Field: <span class="orange">{{ formData.name }} / {{ formData.name.length }}</span><br />
    <input type="text" class="form-control" v-model.trim="formData.name" /><br />

    <!-- 숫자로 강제 형변환 => number -->
    Number Field: <span class="orange">{{ formData.age + 1 }}</span><br />
    <input type="number" class="form-control" v-model.number="formData.age" /><br />

    <!-- 포커스(커서)가 벗어나면 반영 => lazy -->
    Lazy Field: <span class="orange">{{ formData.address }}</span><br />
    <input type="text" class="form-control" v-model.lazy.trim="formData.address" /><br />

    <!-- 위의 3개 이외의 검증(가드)이 필요한 경우는 속성과 이벤트를 이용해서 구현 -->
    Text Field: <span class="orange">{{ formData.zipCode }}</span> <br />
    <input type="text" class="form-control"   :value="formData.zipCode" @input="changeZipCode"/><br />


    Radio Button: <span class="orange">{{ formData.gender }}</span><br />
    <input type="radio" name="gender" value="남자"  v-model="formData.gender" />Male <br />
    <input type="radio" name="gender" value="여자"  v-model="formData.gender" />Female <br />
    <input type="radio" name="gender" value="어린이" v-model="formData.gender" />Children <br />
    <br />

    Single Check: <span class="orange">{{ formData.check ? '동의' : '동의 안함' }}</span> <br />
    <input type="checkbox" name="check"   v-model="formData.check" />Agree <br />
    <br />

    Single Check: <span class="orange">{{ formData.isAgree }}</span> <br />
    <input type="checkbox" name="isAgree"   
      v-model="formData.isAgree" true-value="동의" false-value="동의 안함" />Agree <br />
    <br />

    CheckBox: <span class="orange">{{ formData.fruit.join(' - ') }}</span><br />
    <input type="checkbox" value="apple"    v-model="formData.fruit" />사과 <br />
    <input type="checkbox" value="banana"   v-model="formData.fruit" />바나나 <br />
    <input type="checkbox" value="melon"    v-model="formData.fruit" />멜론 <br />
    <br />

    SelectBox: <span class="orange">{{ formData.language }}</span><br />
    <select class="form-control"    v-model="formData.language">
      <option value="">선택해주세요</option>
      <option v-for="item in langs" :key="item">{{ item }}</option>
    </select>
    <br />

    SelectBox Multi: <span class="orange">{{ formData.four.join(', ') }}</span><br />
    <select class="form-control" multiple size="5"  v-model="formData.four">
      <option v-for="item in baseball" :key="item">{{ item }}</option>
    </select>
    <br />

    TextArea: <span class="orange">{{ formData.command }}</span>
    <textarea cols="50" rows="5" class="form-control"   v-model="formData.command"></textarea>
    <br />

    Radio Button Object Value: <span class="orange">{{ formData.person }} / {{ formData.person.name }}</span><br />
    <input type="radio" name="person" v-bind:value="{name: '놀부', age: 30}" v-model="formData.person" />놀부 <br />
    <input type="radio" name="person" :value="{name: '흥부', age: 25}" v-model="formData.person" />흥부 <br />
    <input type="radio" name="person" :value="{name: '방자', age: 20}" v-model="formData.person" />방자 <br />
    <br />

    <button type="submit" @click.prevent="sendData">SEND</button>
  </form>
</template>

<style scoped>
.orange {
  color: orange;
}
</style>
