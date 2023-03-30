import Braze from '@braze/react-native-sdk';
import {useCallback, useState} from 'react';
import {Cart} from '../domain/models/cart';

import ContentCard from '../domain/models/content-card';
import {Product} from '../domain/models/product';
import {User} from '../domain/models/user';
import {InternalException} from '../utils/exceptions/internal.exception';

const useBraze = () => {
  const [contentCards, setContentCards] = useState<ContentCard[]>([]);

  const subscribeToPushs = useCallback(() => {
    Braze.addListener(
      Braze.Events.PUSH_NOTIFICATION_EVENT,
      function (data: Braze.PushNotificationEvent) {
        console.log(`Push Notification event of type ${data.push_event_type} seen.
          Title ${data.title}\n and deeplink ${data.deeplink}`);
      },
    );
  }, []);

  const setBrazeUser = useCallback(({id, email, firstName, lastName}: User) => {
    console.log('Setting user', id, firstName);
    Braze.changeUser(id);
    Braze.setEmail(email);
    Braze.setFirstName(firstName);
    Braze.setLastName(lastName);
  }, []);

  const fetchContentCards = useCallback(async () => {
    const result = await Braze.getContentCards();

    setContentCards(
      result
        .filter(c => ['Captioned', 'Classic', 'Banner'].includes(c.type))
        .map(makeContentCard),
    );
  }, []);

  const subscribeToContentCards = useCallback(() => {
    Braze.addListener(Braze.Events.CONTENT_CARDS_UPDATED, () => {
      try {
        fetchContentCards();
      } catch (err) {
        console.error(err);
      }
    });
  }, [fetchContentCards]);

  const logProductAdded = useCallback((product: Product) => {
    Braze.logCustomEvent('Product Added', {
      'Product ID': product.id,
      'Product Name': product.name,
    });
    console.log('Logged');
  }, []);

  const logCartViewed = useCallback((cart: Cart) => {
    Braze.logCustomEvent('Cart Viewed', {
      'Cart Total': cart.total,
    });
  }, []);

  const requestForUpdateContentCards = useCallback(() => {
    Braze.requestContentCardsRefresh();
  }, []);

  const init = useCallback(() => {
    subscribeToPushs();
    subscribeToContentCards();
  }, [subscribeToPushs, subscribeToContentCards]);

  return {
    contentCards,

    requestForUpdateContentCards,
    setBrazeUser,
    subscribeToPushs,
    fetchContentCards,
    logProductAdded,
    logCartViewed,
    init,
  };
};

/** This should be refactored... somethings like a strategy pattern should be better */
function makeContentCard(card: Braze.ContentCard): ContentCard {
  console.log(card.type);

  if (card.type === 'Classic') {
    return new ContentCard({
      id: card.id,
      title: card.title,
      message: card.cardDescription,
      type: card.type,
    });
  }

  if (card.type === 'Captioned') {
    return new ContentCard({
      id: card.id,
      title: card.title,
      image: card.image,
      message: card.cardDescription,
      type: card.type,
    });
  }

  if (card.type === 'Banner') {
    return new ContentCard({id: card.id, image: card.image, type: card.type});
  }

  throw new InternalException(
    `Could not get this card type, ID: ${card}`,
    card,
  );
}

export default useBraze;
