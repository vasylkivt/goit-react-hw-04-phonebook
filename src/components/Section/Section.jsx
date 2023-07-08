import PropTypes from 'prop-types';

import { SectionWrap, Title } from './Section.style';

export default function Section({ title, children, className }) {
  return (
    <SectionWrap className={className}>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
