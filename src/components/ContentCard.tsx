import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import ContentCardModel from '../domain/models/content-card';
import {Sizes} from '../utils/constants/theme';

const styles = StyleSheet.create({
  card: {
    height: '100%',
    marginRight: Sizes.margin2,
  },
});

const ContentCard = ({image, title}: ContentCardModel): JSX.Element => {
  return (
    <Card mode="outlined" style={styles.card}>
      <Card.Cover source={{uri: image, height: 20}} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default ContentCard;
