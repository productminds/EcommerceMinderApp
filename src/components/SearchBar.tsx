import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface SearchBarProps {
  value?: string;
  onChangeText: (value: string) => void;
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

const SearchBar = ({value, onChangeText}: SearchBarProps): JSX.Element => {
  return (
    <TextInput
      value={value}
      style={styles.searchBar}
      mode="outlined"
      right={<TextInput.Icon icon="magnify" />}
      onChangeText={onChangeText}
    />
  );
};

export default SearchBar;
