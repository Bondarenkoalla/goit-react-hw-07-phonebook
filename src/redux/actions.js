// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactError = createAction("fetchContactError");

// export const addContactRequest = createAction("contactsRequest");
export const addContactRequest = createAction("addContactsRequest");
export const addContactSuccsess = createAction("addContactSuccsess");
export const addContacError = createAction("addContactError");


// export const deleteContact = createAction("DELETE_CONTACT");
export const deleteContactRequest = createAction("deleteContactsRequest");
export const deleteContactSuccsess = createAction("deleteContactSuccsess");
export const deleteContacError = createAction("deleteContactError");

export const clearError = createAction('contacts/clearError');
export const filterContacts = createAction("FITER_CONTACTS");

// const addContact = createAction("ADD_CONTACT", (name, number) => {
//   return {
//     payload: {
//       name,
//       number,
//     },
//   };
// });

// redux

// const addContact = (name, number) => {
//     return {
//         type: 'ADD_CONTACT',
//         payload: { id: uuidv4(), name, number }
//     }
// };
// const deleteContact = (contactId) => {
//     return {
//         type: 'DELETE_CONTACT',
//         payload: contactId
//     }
// };
// const filterContacts = (filter) => {

//     return {
//         type: 'FITER_CONTACTS',
//         payload: filter
//     }
// }
// export default {
//   deleteContact,
//   filterContacts,
//   addContactRequest,
//   addContacSuccsess,
//   addContacError,
// };
