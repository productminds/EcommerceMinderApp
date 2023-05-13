import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {Sizes} from '../utils/constants/theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.margin2,
  },

  content: {
    flex: 1,
  },

  titleContent: {
    alignItems: 'center',
  },
});

interface TitledHeaderProps {
  title: string;
  hideBackButton?: boolean;
}

export const TitledHeader = ({
  title,
  hideBackButton = false,
}: TitledHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!hideBackButton && <IconButton icon="chevron-left" />}
      </View>
      <View style={[styles.content, styles.titleContent]}>
        <Text variant="titleLarge">{title}</Text>
      </View>
      <View style={styles.content} />
    </View>
  );
};

export default TitledHeader;