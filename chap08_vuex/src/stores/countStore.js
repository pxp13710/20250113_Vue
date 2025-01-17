const countStore = {
  namespaced: true,
  state: {
    storeName: 'Count Store',
    count: 0,
    contacts: [
      { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
      { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
      { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
      { no: 1004, name: '안중근', tel: '010-1212-3334', address: '해주' },
      { no: 1005, name: '강감찬', tel: '010-1212-3335', address: '귀주' },
      { no: 1006, name: '정몽주', tel: '010-1212-3336', address: '개성' },
      { no: 1007, name: '이순신', tel: '010-1212-3337', address: '통제영' },
      { no: 1008, name: '김시민', tel: '010-1212-3338', address: '진주' },
      { no: 1009, name: '정약용', tel: '010-1212-3339', address: '남양주' }
    ]
  },
  mutations: {
    increase(state, payload) {
      state.count = state.count + payload;
    },
    decrease(state) {
      state.count = state.count - 1;
    }
  },
  actions: {
    increaseAction(action, payload) {
      setTimeout(() => {
        const value = Number(payload);
        action.commit('increase', value);
      }, 1000);
    }
  },
  getters: {
    contactSize: (state) => state.contacts.length,
    firstItem: (state) => state.contacts[0],
    getItem: (state) => (no) => state.contacts.find(item => item.no === no),
  },
  modules: {}
}
export default countStore;


/*
import { createStore } from 'vuex';

const countStore = createStore({
  // 상태변수. 이 값이 변경되면 현재 store를 참조하는 컴포넌트에 통지(값 전달)
  state: {
    storeName: 'Count Store',
    count: 0,
    contacts: [
      { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
      { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
      { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
      { no: 1004, name: '안중근', tel: '010-1212-3334', address: '해주' },
      { no: 1005, name: '강감찬', tel: '010-1212-3335', address: '귀주' },
      { no: 1006, name: '정몽주', tel: '010-1212-3336', address: '개성' },
      { no: 1007, name: '이순신', tel: '010-1212-3337', address: '통제영' },
      { no: 1008, name: '김시민', tel: '010-1212-3338', address: '진주' },
      { no: 1009, name: '정약용', tel: '010-1212-3339', address: '남양주' }
    ]
  },
  // state의 값을 변경하는 로직. 컴포넌트에서 this.$store.commit(메서드명) 형태로 호출
  // pinia에는 없음
  mutations: {
    increase(state, payload) {
      // console.log(state);
      // console.log(payload);
      state.count = state.count + payload;
    },
    decrease(state) {
      state.count = state.count - 1;
    }
  },
  // mutations이 state 값을 변경하기 전의 사전 처리 작업을 담당 (Ajax 작업 등)
  // 선 처리 후 값을 mutations 함수에 전달 => mutations 함수가 state 값 변경 => 컴포넌트 재 구성
  // 컴포넌트에서 this.$store.dispatch(메서드명) 형태로 호출한다
  actions: {
    increaseAction(action, payload) {
      // console.log(action);
      // console.log(payload);
      // action.state.count = action.state.count + payload;

      setTimeout(() => {
        const value = Number(payload);
        action.commit('increase', value);
      }, 1000);
    }
  },
  // 컴포넌트의 computed와 동일. state 값 기반으로 새로운 값이 필요한 경우 기술
  getters: {
    contactSize: (state) => state.contacts.length,
    firstItem: (state) => state.contacts[0],
    getItem: (state) => (no) => state.contacts.find(item => item.no === no),
  },
  // 하위 모듈 구성. vuex, pinia는 단일 store. 즉 store는 1개만 등록 가능
  modules: {
    todoStore: {        // this.$store.todoStore.XXX
      namespaced: true,
      state: {},
      mutations: {},
      modules: {}       // 다시 하위 모듈을 구성할 수 있다
    }
  }
});
export default countStore;
*/
