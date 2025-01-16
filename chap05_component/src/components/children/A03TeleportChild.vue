<script>
// npm i portal-vue
// main.js에 등록부터 해야한다
export default {
  data() {
    return { 
      one: false,
      two: false
    }
  },
  methods: {
    showModal(name, check) {
      // this.one = true;
      this[name] = check;
    }
  }
}
</script>

<template>
  <form>
    <button @click="() => showModal('one', true)">ONE SHOW</button>
    <button @click="() => showModal('two', true)">TWO SHOW</button>
  </form>

  <!-- 
    to에 지정한 HTML 요소에 이 div 하위 요소 값이 표시된다. 
    Teleport는 HTML(즉 index.html)에만 이동을 지정할 수 있다(컴포넌트 이동은 안됨) 
  -->
  <Teleport to="#popup">
    <div class="dialog" v-show="one">
      <h5>Home Component</h5>
      <p>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. 
        It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and 
        component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.<br>
      </p>
      <button @click="() => showModal('one', false)">HIDE</button>
    </div>
  </Teleport>

  <!-- HTML, 컴포넌트 어느 위치도 이동 가능. A01DynamicComp에 이동 -->
  <portal to="dest">
    <div class="dialog" v-show="two">
      <h5>News Component</h5>
      <p>
        With Options API, we define a component's logic using an object of options such as data, methods, and mounted.
        Properties defined by options are exposed on this inside functions, which points to the component instance
      </p>
      <button @click="() => showModal('two', false)">HIDE</button>
    </div>
  </portal>
</template>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }  
</style>
