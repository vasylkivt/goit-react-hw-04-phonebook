import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

import { Field as FormikInput, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  display: flex;
  gap: 25px;
  flex-direction: column;
`;

export const InputName = styled.label`
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;

  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};

  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};

  background-color: ${({ theme }) => theme.colors.backgroundColorInput}10;
  border-radius: 5px 5px 0 0;

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:focus-within,
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColorInput}30;
    border-radius: 5px;
    z-index: 1;
    border-color: transparent;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.textColorDark};
  }
`;

export const Input = styled(FormikInput)`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(75)};

  appearance: none;
  border: none;
  outline: none;

  color: ${({ theme }) => theme.colors.textColorDark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.large};

  background-color: transparent;
`;

export const ButtonSubmit = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.textColorDark};

  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.textColorDark};
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.accentHover};
    color: ${({ theme }) => theme.colors.backgroundColorMain};
  }
`;

export const AddContactIcon = styled.svg`
  position: absolute;
  top: 16px;
  left: 10px;
  z-index: 0;
  width: auto;
  height: 90%;

  fill: ${({ theme }) => theme.colors.backgroundColorMain};
`;

export const PersonIcon = styled(BsPerson)`
  fill: ${({ theme }) => theme.colors.accent};
  height: 100%;
  width: 50px;
`;

export const TelephoneIcon = styled(AiOutlinePhone)`
  fill: ${({ theme }) => theme.colors.accent};
  height: 100%;
  width: 50px;
`;
