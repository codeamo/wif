import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import * as contacts from 'expo-contacts';
import SearchBar from './SearchBar';

const Contacts = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      const { status } = await contacts.requestPermissionsAsync();
      if (status === 'granted') {
        // eslint-disable-next-line no-use-before-define
        const { data } = await contacts.getContactsAsync({
          fields: [contacts.Fields.PhoneNumbers]
        });
        setNumbers(data);
      }
      return () => {
        abortController.abort();
      };
    })();
  }, []);

  return (
    <View>
      <Text style={Styles.textStyle}>All Contacts</Text>
      <SearchBar contacts={numbers} />
      <FlatList
        data={numbers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>
                {item.firstName}
                {'  '}
                {item.lastName}
              </Text>
              <Text>{item.phoneNumbers && item.phoneNumbers[0].digits}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7E8395',
    marginTop: 17,
    marginLeft: 21
  }
});

export default Contacts;
