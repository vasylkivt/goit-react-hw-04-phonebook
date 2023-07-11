import styled from 'styled-components';

export const Notification = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.textColorDark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(5)};
  text-align: center;
  text-transform: capitalize;

  text-align: ${({ $textAlign }) => (!$textAlign ? 'left' : $textAlign)};
  margin-bottom: ${({ $marginBottom }) => (!$marginBottom ? 0 : $marginBottom)};
`;
