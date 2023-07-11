import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';

import { Field as FormikInput, Form as FormikForm } from 'formik';

export const FormWrap = styled.div`
  max-width: 650px;
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  border-radius: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.backgroundColorSecond};
  margin-bottom: ${({ theme }) => theme.spacing(7)};
`;

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

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 600;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;

  border-bottom: 3px solid ${({ theme: { colors } }) => colors.accent};

  background-color: ${({ theme }) => theme.colors.backgroundColorInput}10;
  border-radius: 5px 5px 0 0;

  transition: all ${({ theme }) => theme.animation.cubicBezier};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColorInput}30;
    border-radius: 5px;
    z-index: 1;
    border-color: transparent;
    box-shadow: 0px 0px 10px 0px
      ${({ theme: { colors } }) => colors.textColorDark};
  }

  /* box-shadow: inset 0px 0px 20px 0px black; */
`;

export const Input = styled(FormikInput)`
  position: relative;
  width: 100%;
  max-width: 300px;

  appearance: none;
  border: none;
  outline: none;

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 500;
  font-size: 20px;

  background-color: transparent;
`;

export const ButtonSubmit = styled.button`
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  border: none;
  margin-left: auto;
  color: ${({ theme: { colors } }) => colors.textColorDark};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 25px;
  padding-right: 25px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;

  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px
      ${({ theme: { colors } }) => colors.textColorDark};
    transform: scale(1.05);
    background-color: ${({ theme: { colors } }) => colors.accentHover};
    color: ${({ theme: { colors } }) => colors.titleColorLight}90;
  }
`;
export const AddContactIcon = styled.svg`
  top: 16px;
  left: 10px;
  z-index: 0;
  width: auto;
  height: 90%;

  position: absolute;
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
