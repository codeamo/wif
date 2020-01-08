import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const SearchBar = ({ contacts }) => {
  const [name, setName] = useState('');

  const searchContacts = value => {
    contacts.filter(contact => {
      const contactLowerCase = `${contacts.firstName} ${contacts.lastName}`.toLowerCase();
      const searchTerm = value.toLowerCase();
      return contactLowerCase.indexOf(searchTerm) > -1;
    });
  };

  return (
    <View>
      <TextInput
        placeholder="search"
        style={Styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={content => setName(content)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 15
  }
});

export default SearchBar;
