import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ContentCard from '../domain/models/content-card';
import {Sizes} from '../utils/constants/theme';
import ContentCardComponent from './ContentCard';

interface ContentCardsProps {
  data: ContentCard[];
}

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.margin3,
  },

  carousel: {
    width: '100%',
  },
});

export const ContentCards = ({data}: ContentCardsProps): JSX.Element => {
  return data.length > 0 ? (
    <View style={styles.container}>
      <Carousel
        data={data}
        height={180}
        style={styles.carousel}
        loop={false}
        width={Sizes.width * 0.75}
        renderItem={({item}) => <ContentCardComponent {...item} />}
      />
    </View>
  ) : (
    <></>
  );
};

export default ContentCards;
