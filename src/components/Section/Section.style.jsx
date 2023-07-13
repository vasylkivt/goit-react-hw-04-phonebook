import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  max-width: 680px;
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};

  border-radius: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.backgroundColorSecond};

  margin: 0 auto;
  margin-bottom: ${({ $marginBottom }) => (!$marginBottom ? 0 : $marginBottom)};
`;

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  width: max-content;
  margin-bottom: ${({ theme }) => theme.spacing(12)};
  margin-left: ${({ $marginLeft }) => (!$marginLeft ? 0 : $marginLeft)};

  color: ${({ theme }) => theme.colors.textColorDark};
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
