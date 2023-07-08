import styled from 'styled-components';

export const SectionWrap = styled.section`
  margin: 0 auto;

  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;

  background-color: ${({ theme: { colors } }) => colors.backgroundColorLight};

  max-width: 768px;
`;

export const Title = styled.h1`
  margin-bottom: 45px;

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 700;
  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
`;
