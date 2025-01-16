<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>

<template>
  <div>
    <h3>A08 Child Router</h3>

    <div>
      <RouterLink to="/A02Attr">A02Attr</RouterLink> | 
      <RouterLink to="/A08Child">Info</RouterLink> | 
      <RouterLink to="/A08Child/way">Way</RouterLink> | 
      <span v-for="contact in contacts" :key="contact.no">
        <RouterLink :to="{name: 'view', params: {no: contact.no}}">
          {{ contact.name }}
        </RouterLink> | 
      </span>
    </div>
    <br />

    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
