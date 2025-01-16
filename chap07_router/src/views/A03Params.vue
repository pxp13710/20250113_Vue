<script>
import axios from 'axios';
import contactlist from './data/ContactList';

export default {
  data() {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    no() {
      return Number(this.$route.params.no)
    },
    id() {
      return Number(this.$route.params.id)
    },
    person() {
      // ===는 타입부터 비교한다. 타입이 틀리면 undefined or null(DOM)
      // return this.contacts.find((item) => item.no === Number(this.$route.params.no));

      // computed에서 no값을 분리
      return this.contacts.find((item) => item.no === this.no);
    }
  },
  watch: {
    id() {
      this.getContact()
    }
  },
  methods: {
    async getContact(){
      try{
        const resp = await axios.get('http://localhost:8000/contacts/' + this.id);
        this.contact = resp.data;
      }catch(err) {
        console.error(err);
      }
    }
  },
  // 마운트될때 최초 1번만 실행됨
  created: function(){
    this.getContact();
    // console.log(this.$route);
  },
}
</script>

<template>
  <div>
    <h3>A03 Params</h3>

    <div class="mb-3">
      fullPath: {{ decodeURIComponent($route.fullPath) }}<br />
      href: {{ decodeURIComponent($route.href) }}<br />
      query: {{ $route.query }}<br />
      hash: {{ $route.hash }}<br />
      params: {{ $route.params }}
    </div>
    
    <div>
      Name: {{ $route.params.name }}<br>
      No: {{ $route.params.no }}<br>
      Person: {{ person.no }} / {{ person.name }} / {{ person.tel }} / {{ person.address }}<br>
      Contact: {{ contact.no }} / {{ contact.name }} / {{ contact.address }}
    </div>
  </div>
</template>

