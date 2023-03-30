import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../utils/constants/theme';

interface SearchBarProps {
  value?: string;
  onChangeText: (value: string) => void;
  onEndEditing: (value: string) => void;
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  borderInput: {
    borderColor: Colors.primary,
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
      outlineStyle={styles.borderInput}
      placeholder="Search here.."
      right={<TextInput.Icon icon="magnify" iconColor={Colors.secondary} />}
      onChangeText={onChangeText}
      onEndEditing={e => onEndEditing(e.nativeEvent.text)}
    />
  );
};

export default SearchBar;
