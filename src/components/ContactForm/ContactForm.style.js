import styled from 'styled-components';
import phone from '../../phone-book.png';
import { Field as FormikInput, Form as FormikForm } from 'formik';

export const FormWrap = styled.div`
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorDark}30;
  margin-bottom: 25px;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  & p {
    text-align: right;
  }
`;

export const Form = styled(FormikForm)`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 180px;

  position: relative;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
`;

export const InputName = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;

export const Input = styled(FormikInput)`
  position: relative;

  width: 300px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;

  appearance: none;
  border: none;
  outline: none;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.accent};
  background-color: ${({ theme: { colors } }) => colors.backgroundColorDark}10;
  border-radius: 5px 5px 0 0;

  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.11;
  letter-spacing: 0.72px;

  transition: box-shadow 300ms ease-in-out, border-color 300ms ease-in-out;

  &:focus,
  &:hover {
    border-radius: 5px;
    z-index: 1;
    border-color: transparent;
    box-shadow: 0px 0px 10px 0px
      ${({ theme: { colors } }) => colors.textColorDark};
  }
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
