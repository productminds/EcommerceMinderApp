import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface SearchBarProps {
  value?: string;
  onChangeText: (value: string) => void;
  onEndEditing: (value: string) => void;
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

const SearchBar = ({
  value,
  onChangeText,
  onEndEditing,
}: SearchBarProps): JSX.Element => {
  return (
    <TextInput
      value={value}
      style={styles.searchBar}
      mode="outlined"
      placeholder="Search here.."
      right={<TextInput.Icon icon="magnify" />}
      onChangeText={onChangeText}
      onEndEditing={e => onEndEditing(e.nativeEvent.text)}
    />
  );
};

export default SearchBar;
