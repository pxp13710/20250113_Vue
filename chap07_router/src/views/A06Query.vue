<script>
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    no() {
      return Number(this.$route.query.no)
    },
    person() {
      // computed에서 no값을 분리
      return this.contacts.find((item) => item.no === this.no);
    }
  },
  created() {
    // console.log(this.$route);
  }
}
</script>

<template>
  <div>
    <h3>A06 Query</h3>

    <div class="mb-3">
      fullPath: {{ decodeURIComponent($route.fullPath) }}<br />
      href: {{ decodeURIComponent($route.href) }}<br />
      query: {{ $route.query }}<br />
      hash: {{ $route.hash }}<br />
      params: {{ $route.params }}
    </div>

    <div>
      Name: {{ $route.query.name }}<br>
      No: {{ $route.query.no }}<br>
      Person: {{ person.no }} / {{ person.name }} / {{ person.tel }} / {{ person.address }}<br>
    </div>
  </div>
</template>
