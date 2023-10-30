import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from 'redux/contacts/operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});
