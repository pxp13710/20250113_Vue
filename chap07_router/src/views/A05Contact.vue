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
    <h3>A05 Contacts</h3>

    <div>
      <span v-for="contact in contacts" :key="contact.no">
        <RouterLink :to="{name: 'contactChild', params: {no: contact.no}}">
          {{ contact.name }}
        </RouterLink> | 
      </span>
    </div>
  </div>
</template>
