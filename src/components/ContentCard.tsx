import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import ContentCardModel from '../domain/models/content-card';
import {Colors, Sizes} from '../utils/constants/theme';

const styles = StyleSheet.create({
  card: {
    height: '100%',
    marginRight: Sizes.margin2,
    backgroundColor: Colors.secondary,
    padding: Sizes.margin2,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
  },

  content: {
    flex: 1,
    marginTop: Sizes.margin,
  },

  actions: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  text: {
    color: Colors.white,
  },

  description: {
    color: Colors.lightGray,
  },
});

const ContentCard = ({
  image,
  title,
  message,
}: ContentCardModel): JSX.Element => {
  return (
    <Card mode="contained" contentStyle={styles.card}>
      {image && (
        <Image
          source={{
            height: 60,
            uri: image,
          }}
        />
      )}
      <View style={styles.content}>
        <Text variant="titleLarge" style={styles.text}>
          {title}
        </Text>
        <Text variant="bodyMedium" style={styles.description}>
          {message}
        </Text>
      </View>
      <View style={styles.actions}>
        <Button buttonColor={Colors.primary} textColor={Colors.white}>
          OK
        </Button>
      </View>
    </Card>
  );
};

export default ContentCard;
