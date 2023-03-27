import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Sizes} from '../utils/constants/theme';

interface DefaultScreenLayoutInterface {
  children?: JSX.Element | JSX.Element[];
  refreshing?: boolean;
  onRefresh?: () => void;
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    paddingBottom: 0,
  },

  mainContainer: {
    height: '100%',
    width: '100%',
    paddingTop: Sizes.margin3,
    paddingHorizontal: Sizes.margin3,
  },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

const DefaultScreenLayout = ({
  children,
  onRefresh,
  refreshing,
}: DefaultScreenLayoutInterface): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'right', 'left']}>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="never"
        refreshControl={
          <RefreshControl
            refreshing={refreshing ?? false}
            onRefresh={onRefresh}
          />
        }>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultScreenLayout;
