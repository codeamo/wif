import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecentUsers = () => {
  return (
    <View>
      <Text style={Styles.textStyle}>Recent</Text>
      <View style={Styles.container}>
        <View style={Styles.imgStyle} />
        <Text style={Styles.nameTextStyle}>Name</Text>
        <Text style={Styles.numberStyle}>Number</Text>
      </View>
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
  },
  container: {
    height: 134,
    width: 115,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 21,
    marginTop: 24,
    borderRadius: 22
  },
  imgStyle: {
    height: 75,
    width: 80,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 17,
    marginTop: 13,
    borderRadius: 22
  },
  nameTextStyle: {
    textAlign: 'center'
  },
  numberStyle: {
    textAlign: 'center'
  }
});

export default RecentUsers;
