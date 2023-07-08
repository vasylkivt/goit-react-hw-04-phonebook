import PropTypes from 'prop-types';

import { Text } from './Notification.style';

export default function Notification({ message, className }) {
  return (
    <>
      <Text className={className}>{message}</Text>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
