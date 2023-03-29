import Braze from '@braze/react-native-sdk';
import {useCallback} from 'react';
import {User} from '../domain/models/user';

const useBraze = () => {
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
    Braze.changeUser(id);
    Braze.setEmail(email);
    Braze.setFirstName(firstName);
    Braze.setLastName(lastName);
  }, []);

  const fetchContentCards = () => {};

  return {
    setBrazeUser,
    subscribeToPushs,
    fetchContentCards,
  };
};

export default useBraze;
