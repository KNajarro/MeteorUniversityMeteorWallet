import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm />
    <ContactList />
  </div>
);
