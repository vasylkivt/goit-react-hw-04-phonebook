import styled from 'styled-components';

export const InputName = styled.label``;

export const Input = styled.input`
  position: relative;
  margin-bottom: 25px;
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
