import axios from 'axios'

const BASE_URI = 'http://localhost:8000';
// const BASE_URI = '/api';
const PAGE_NO = 1;
const PAGE_SIZE = 10;
const GET_CONTACTLIST = BASE_URI + '/contacts/';
const GET_CONTACT = BASE_URI + '/contacts/${no}';
const ADD_CONTACT = BASE_URI + '/contacts/';
const DELETE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_PHOTO = BASE_URI + '/contacts/${no}/photo';

export const getContactList = (no = PAGE_NO, size = PAGE_SIZE) => {
  return axios.get(GET_CONTACTLIST, { params: { pageno: no, pagesize: size } })
}
export const getContact = (no) => {
  return axios.get(GET_CONTACT.replace('${no}', no));
}
// data => { no: '', name: ?, tel: ?, address: ?, photo: '' }
export const addContact = (data) => {
  const headers = { 'Content-Type': 'application/json' };
  return axios.post(ADD_CONTACT, data, { headers });
}
export const deleteContact = (no) => {
  return axios.delete(DELETE_CONTACT.replace('${no}', no));
}
// data => { no: ?, name: ?, tel: ?, address: ?, photo: ? }
export const updateContact = (data) => {
  const headers = { 'Content-Type': 'application/json' };
  return axios.put(UPDATE_CONTACT.replace('${no}', data.no), data, { headers });
}
export const updatePhoto = (no, file) => {
  const formData = new FormData();
  formData.append('photo', file);
  return axios.post(UPDATE_PHOTO.replace('${no}', no), formData);
}
