<script>
export default {
  props: ['contactList']
};
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="contact in contactList" :key="contact.no">
        <td>{{ contact.no }}</td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.tel }}</td>
        <td>{{ contact.address }}</td>
      </tr>
    </tbody>
  </table>
</template>

