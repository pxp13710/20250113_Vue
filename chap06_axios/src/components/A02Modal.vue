<script>
// npm i sweetalert2
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import axios from 'axios';
import Swal from 'sweetalert2';

const baseURL = 'http://localhost:8000/contacts/';

export default {
  data() {
    return {
      getContentModal: '',
      updateContentModal: '',
      addContentModal: '',
      contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
      contact: { no: '', name: '', tel: '', address: '', photo: ''}
    }
  },
  methods: {
    viewUpdate() {
      this.getContentModal.hide()
      this.updateContentModal.show();
    },
    viewAdd() {
      this.contact = { no: '', name: '', tel: '', address: '', photo: ''}
      this.addContentModal.show();
    },
    changeContact(evt) {
      // console.log(evt.target.name, evt.target.value);
      const value = evt.target.value.trim();
      if(value.length >= 2) this.contact[evt.target.name] = value;
    },


    async getContactList(no = 1, size = 10) {
      try {
        const resp = await axios.get(baseURL, {params: {pageno: no, pagesize: size}});
        this.contactList = resp.data;
      }catch(err) {
        console.error(err);
      }
    },
    async getContact(no) {
      this.getContentModal.show();
      try {
        const resp = await axios.get(baseURL + no);
        this.contact = resp.data;
      }catch(err) {
        console.error(err);
      }
    },
    async deleteContact(no) {
      try {
        const resp = await axios.delete(baseURL + no);
        if(resp.data.status === 'success') {
          Swal.fire({title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success'})
        } else if(resp.data.status === 'fail') {
          Swal.fire({title: 'FAIL', text: '데이터 삭제 실패', icon: 'error'})
        }
      }catch(err) {
        console.error(err);
      }
      this.getContentModal.hide();
      // 위의 조작으로 서버 데이터는 삭제됨
      // 현재 페이지의 삭제된 데이터는 contactList가 변경되지 않았으므로 그대로 표시됨
      // 다시 삭제된 데이터를 다시 호출해서 contactList를 변경 => View 변경 => 갱신 작업 완료

      // 하단의 update, add도 마찬가지
      this.getContactList(1, 5);      
    },
    async updateContact() {
      try {
        const headers = { 'Content-Type': 'application/json' }
        const resp = await axios.put(baseURL + this.contact.no, this.contact, {headers});
        if(resp.data.status === 'success') {
          Swal.fire({title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success'})
        } else if(resp.data.status === 'fail') {
          Swal.fire({title: 'FAIL', text: '데이터 수정 실패', icon: 'error'})
        }
      }catch(err) {
        console.error(err);
      }
      this.updateContentModal.hide();
      this.getContactList(1, 5);
    },
    async addContact() {
      try {
        const headers = { 'Content-Type': 'application/json' }
        const resp = await axios.post(baseURL, this.contact, {headers});
        if(resp.data.status === 'success') {
          Swal.fire({title: 'SUCCESS', text: '데이터 추가 성공', icon: 'success'})
        } else if(resp.data.status === 'fail') {
          Swal.fire({title: 'FAIL', text: '데이터 추가 실패', icon: 'error'})
        }
      }catch(err) {
        console.error(err);
      }
      this.addContentModal.hide();
      this.getContactList(1, 5);
    }
  },
  mounted() {
    this.getContactList(1, 5);
    this.getContentModal = new bootstrap.Modal(document.getElementById('getContent'), { keyboard: false });
    this.updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), { keyboard: false });
    this.addContentModal = new bootstrap.Modal(document.getElementById('addContent'), { keyboard: true });
  }
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td><a href="#"   @click="() => getContact(contact.no)">{{ contact.name }}</a></td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td><img v-bind:src="contact.photo" alt="photo" width="70" /></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" @click="viewAdd">ADD</button>

    <!-- Get Contact Modal -->
    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control" disabled    :value="contact.name" />
            Tel: <input type="text" class="form-control" disabled     :value="contact.tel"/>
            Address: <input type="text" class="form-control" disabled :value="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary" @click="deleteContact(contact.no)">DELETE</button>
            <button type="button" class="btn btn-primary" @click="viewUpdate">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"   v-model.trim="contact.name" />
            Tel: <input type="text" class="form-control"    v-model.trim="contact.tel" />
            Address: <input type="text" class="form-control"  name="address"
              :value="contact.address" @input="changeContact"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary"   @click="updateContact">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control" name="name"
              :value="contact.name" @input="changeContact" />
            Tel: <input type="text" class="form-control"  name="tel"
              :value="contact.tel" @input="changeContact" />
            Address: <input type="text" class="form-control"  name="address"
              :value="contact.address" @input="changeContact" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary"   @click="addContact">ADD</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5"></div>
  </div>
</template>
