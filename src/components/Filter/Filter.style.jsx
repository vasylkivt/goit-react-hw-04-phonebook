import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(75)};

  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  appearance: none;
  border: none;
  outline: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.backgroundColorInput}10;
  border-radius: 5px 5px 0 0;

  color: ${({ theme }) => theme.colors.textColorDark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.large};

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColorInput}30;
    border-radius: 5px;
    z-index: 1;
    border-color: transparent;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.textColorDark};
  }
`;
