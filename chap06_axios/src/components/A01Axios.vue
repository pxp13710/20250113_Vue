<script>
// npm i axios
import axios from 'axios';

// https://sample.bmaster.kro.kr/contacts_long/search/
const baseURL = 'http://localhost:8000/contacts/'

export default {
  data: function() {
      return { 
        data: '' 
      }
  },
  methods: {
    getContactList(no = 1, size = 5) {
      // axios.get(URL, {params: {}, headers: { }, timeout: 3000, })
      // axios.get(baseURL, {params: {pageno: 1, pagesize: 10}, timeout: 3000 } )

      const params = { pageno: no, pagesize: size};
      const headers = { 'Content-Type': 'application/json' };

      axios.get(baseURL, {params, headers} )
        // 성공시 처리 할 작업을 콜백 함수로 정의
        .then((resp) => {
          // console.log(resp);
          this.data = JSON.stringify(resp.data, '', 4);
        })
        // 에러(실패) 시 처리 작업을 콜백 함수로 정의
        .catch((error) => {
          console.error(error);
        })
        // 성공, 실패 상관없이 후 처리 작업이 필요한 경우
        .finally(() => {
          console.log('getContactList 완료');
        })
    },
    async getContactListAsync(no = 1, size = 5) {
      // async ~ await 방식. 함수로 구현되어야 한다 (module 제외)

      try {
        const params = { pageno: no, pagesize: size};
        const headers = { 'Content-Type': 'application/json' };

        const resp = await axios.get(baseURL, {params, headers});
        // console.log(resp);
        this.data = JSON.stringify(resp.data, '', 4);
      } catch(error) {
        console.error(error);
      }
    },
    getContact(no) {
      axios({
        method: 'GET',
        url: `${baseURL}${no}`,
        params: { },
        data: { },          // 서버에 전송할 값 정의
        headers: {'Content-Type': 'application/json' },       // header 정보
        timeout: 3000,
      })
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4);
        })
        .catch((error) => console.error(error))
    },
    addContact() {
      const user = { name: "강감찬", "tel": "010-2222-3339", "address": "서울시"};
      
      // axios.post(URL, data, { params: {}, headers: {}, ....})
      axios.post(baseURL, user, { headers: {'Content-Type': 'application/json'}, timeout: 3000})
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4);
        })
        .catch((error) => console.error(error))
    },
    updateContact(no) {
      // axios.put(URL, data, { params: {}, headers: {}, ....})
      const user = { no, name: "이순신", "tel": "010-2222-2222", "address": "충무시"};
      axios.put(baseURL + no, user, { headers: {'Content-Type': 'application/json'}, timeout: 3000})
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4);
        })
        .catch((error) => console.error(error))
    },
    deleteContact(no) {
      // axios.delete(URL, { params: {}, headers: {}, ....})
      axios.delete(baseURL + no)
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4);
        })
        .catch((error) => console.error(error))
    },
  }
}
</script>

<template>
  <div>
    <h3>A01 Axios</h3>

    <div>
      <button @click="() => getContactList(1, 10)">Get ContactList</button>
      <button @click="() => getContactListAsync(2, 10)">Get ContactList Async</button>
      <button @click="() => getContact(2)">Get Contact</button>
      <button @click="addContact">Add Contact</button>
      <button @click="() => updateContact(1736996567628)">Update Contact</button>
      <button @click="() => deleteContact(1736996567628)">Delete Contact</button>
    </div>

    <div>
      <textarea cols="100" rows="10" readonly :value="data"></textarea>
    </div>
  </div>
</template>
