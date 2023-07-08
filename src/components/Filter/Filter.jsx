import PropTypes from 'prop-types';
import { Input, InputName } from './Filter.style';

export default function Filter({ value, onChange }) {
  return (
    <>
      <InputName>
        <Input
          placeholder="Find contacts"
          onChange={onChange}
          value={value}
          type="text"
        />
      </InputName>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
