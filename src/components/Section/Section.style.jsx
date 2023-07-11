import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(12)};

  color: ${({ theme }) => theme.colors.textColorDark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};

  text-align: center;
  text-transform: capitalize;
`;
