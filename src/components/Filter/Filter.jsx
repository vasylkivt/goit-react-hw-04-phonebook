import PropTypes from 'prop-types';
import { Input } from './Filter.style';

export function Filter({ value, onChange }) {
  return (
    <>
      <Input
        placeholder="Find contacts"
        onChange={onChange}
        value={value}
        type="text"
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
