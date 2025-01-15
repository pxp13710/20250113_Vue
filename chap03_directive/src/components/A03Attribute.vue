<script>
  export default {
    data() {
      return {
        name: 'NolBu',
        formCtrl: 'form-control',
        attrs: { type: 'text', class: 'form-control', value: 'HungBu' },
        myStyle: {
          backgroundColor: 'lightgray',
          color: 'orange',
          padding: '10px',
          marginBottom: '5px',
          fontWeight: 'bold',
        },
        size: 300,
        direction: 'width',
      };
    },
    methods: {
      enterEvent() {
        this.myStyle.backgroundColor = 'orange';
        this.myStyle.color = 'lightgray';
      },
      leaveEvent() {
        this.myStyle.backgroundColor = 'lightgray';
        this.myStyle.color = 'orange';
      },
      changeName(evt) {
        let value = Number(evt.target.value);
        if (isNaN(value) || value > 100) {
          value = '';
        }
        this.name = value;
      },
    },
  };
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div>
    <h5>1. 속성 바인딩</h5>
    <!-- 속성은 반드시 v-bind:속성명="변수명 or 값" 형태로 참조. v-bind는 생략 가능 -->
    <input type="text" class="form-control" value="{{ name }}" />
    <input type="text" class="form-control" v-bind:value="name" />
    <input type="text" class="form-control" :value="name" />
    <input type="text" v-bind:class="'form-control'" v-bind:value="name" />
    <input type="text" v-bind:class="formCtrl" v-bind:value="name" />
    <input v-bind="attrs" />

    <div style="background-color: lightgray; padding: 10px; margin-bottom: 5px; font-weight: bold">
      Hello World
    </div>
    <div
      v-bind:style="{
        backgroundColor: 'lightgray',
        padding: '10px',
        marginBottom: '5px',
        fontWeight: 'bold',
      }">
      Hello World
    </div>
    <div v-bind:style="myStyle" @mouseenter="enterEvent" @mouseleave="leaveEvent">Hello World</div>
  </div>
  <br />

  <div>
    <h5>2. 양방향 바인딩 {{ name + 1 }}</h5>
    <input type="text" class="form-control" v-model="name" />

    <input type="text" class="form-control" v-model="name" />

    <!-- 입력값에 대한 검증이 필요한 경우는 v-bind와 이벤트 핸들러를 이용해 양방향을 구현한다 -->
    <input type="text" class="form-control" v-bind:value="name" @input="changeName" />
  </div>
  <br />

  <div class="row">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="number" class="form-control" v-model.number="size" />
    </div>
  </div>
  <br />

  <div class="mb-5">
    <img src="/images/tree.jpg" alt="Tree" v-bind:[direction]="size" />
  </div>
</template>
