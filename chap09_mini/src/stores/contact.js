import * as api from './../api/contact';
import Swal from 'sweetalert2';

const CONTACT_GETCONTACTLIST = 'CONTACT_GETCONTACTLIST';
const CONTACT_GETCONTACT = 'CONTACT_GETCONTACT';
const CONTACT_ADDCONTACT = 'CONTACT_ADDCONTACT';
const CONTACT_DELETECONTACT = 'CONTACT_DELETECONTACT';
const CONTACT_UPDATECONTACT = 'CONTACT_UPDATECONTACT';

export default {
  namespaced: true,
  state: {
    contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
    contact: { no: '', name: '', tel: '', address: '' }
  },
  mutations: {
    [CONTACT_GETCONTACTLIST]: (state, payload) => {
      // console.log(state, payload);
      state.contactList = payload;
    },
    [CONTACT_GETCONTACT]: (state, payload) => {
      // console.log(state, payload);
      state.contact = payload;
    },
    [CONTACT_ADDCONTACT]: (state, payload) => {
      // console.log(state, payload);
      if (payload.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 추가 성공', icon: 'success' });
      } else if (payload.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 추가 실패', icon: 'error' });
      };
    },
    [CONTACT_DELETECONTACT]: (state, payload) => {
      // console.log(state, payload);
      if (payload.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' });
      } else if (payload.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' });
      }
    },
    [CONTACT_UPDATECONTACT]: (state, payload) => {
      // console.log(state, payload);
      if (payload.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success' });
      } else if (payload.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '데이터 수정 실패', icon: 'error' });
      }
    },
    CONTACT_UPDATEPHOTO: (state, payload) => {
      if (payload.status === 'success') {
        Swal.fire({ title: 'SUCCESS', text: '사진 수정 성공', icon: 'success' });
      } else if (payload.status === 'fail') {
        Swal.fire({ title: 'FAIL', text: '사진 수정 실패', icon: 'error' });
      }
    },

    // contact 수정
    // payload => evt.target
    changeContact: (state, payload) => {
      // state.contact['name' | 'tel' | 'address'] = payload.value;
      state.contact[payload.name] = payload.value;
    },
    // contact 초기화
    clearContact: (state) => {
      state.contact = { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  // ajax 처리 작업 => mutations에 결과 전달
  actions: {
    // payload => { no: 1, size: 5 }
    getContactListAction: (action, payload) => {
      api.getContactList(payload.no, payload.size)
        .then(resp => action.commit(CONTACT_GETCONTACTLIST, resp.data))
        .catch(error => console.error(error))
    },
    // payload => no
    getContactAction: (action, payload) => {
      api.getContact(payload)
        .then(resp => action.commit(CONTACT_GETCONTACT, resp.data))
        .catch(error => console.error(error))
    },
    // payload => no
    deleteContactAction: (action, payload) => {
      api.deleteContact(payload)
        .then(resp => action.commit(CONTACT_DELETECONTACT, resp.data))
        .catch(error => console.error(error))
    },
    // payload => { no: ?, name: ?, tel: ?, address: ?, photo: ? }
    updateContactAction: (action, payload) => {
      api.updateContact(payload)
        .then(resp => action.commit(CONTACT_UPDATECONTACT, resp.data))
        .catch(error => console.error(error))
    },
    // payload => { no: '', name: ?, tel: ?, address: ?, photo: '' }
    addContactAction: (action, payload) => {
      api.addContact(payload)
        .then(resp => action.commit(CONTACT_ADDCONTACT, resp.data))
        .catch(error => console.error(error))
    },
    // payload => { no: ?, file: ? }
    updatePhotoAction: (action, payload) => {
      api.updatePhoto(payload.no, payload.file)
        // 변수명을 정의하지 않음. 꼭 변수명으로 지정하지 않아도 문제 없음(오타 방지)
        .then(resp => action.commit('CONTACT_UPDATEPHOTO', resp.data))
        .catch(error => console.error(error))
    },
  }
}
