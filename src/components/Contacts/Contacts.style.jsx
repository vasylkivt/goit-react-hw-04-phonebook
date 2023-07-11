import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  max-width: 650px;
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  border-radius: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.backgroundColorSecond};
`;

export const Title = styled.h2`
  width: max-content;
  position: relative;

  margin-bottom: ${({ theme }) => theme.spacing(12)};
  margin-left: ${({ theme }) => theme.spacing(16)};

  color: ${({ theme: { colors } }) => colors.titleColorDark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: capitalize;

  &::after {
    position: absolute;
    bottom: -5px;
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ContactCardIcon = styled.svg`
  top: 16px;
  right: 16px;

  z-index: 0;
  max-width: 280px;
  height: auto;

  position: absolute;
  fill: ${({ theme }) => theme.colors.backgroundColorMain};
`;
