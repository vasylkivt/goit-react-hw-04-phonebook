import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.backgroundColorContact};
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColorInput}30;
    border-color: transparent;
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.textColorDark};
  }
`;

export const Text = styled.p`
  position: relative;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColorDark};
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.spacing(15)};

  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.red};
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.red};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.textColorLight};
  }
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  position: relative;
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
  fill: ${({ theme }) => theme.colors.textColorDark};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
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
