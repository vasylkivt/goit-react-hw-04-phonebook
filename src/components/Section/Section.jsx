import PropTypes from 'prop-types';

import { Wrapper, Title } from './Section.style';

export function Section({ title, children, className }) {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
