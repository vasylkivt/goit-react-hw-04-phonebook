import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 700;
  font-size: 20px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
`;
