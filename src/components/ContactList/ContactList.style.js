import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-left: 20px;
  padding-top: 8px;
  padding-bottom: 8px;

  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.titleColorDark}10;

  border-left: 3px solid ${({ theme: { colors } }) => colors.accent};

  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-transform: capitalize;

  transition: box-shadow 300ms ease-in-out, border-color 300ms ease-in-out;

  &:hover {
    border-color: transparent;

    box-shadow: 0px 0px 2px 0px
      ${({ theme: { colors } }) => colors.textColorDark};
  }
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.textColorDark};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.accent};
  border: none;

  transition: all 300ms ease-in-out;

  & > svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme: { colors } }) => colors.textColorDark};
    transition: all 300ms ease-in-out;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px ${({ theme: { colors } }) => colors.red};
    transform: scale(1.1);
    background-color: ${({ theme: { colors } }) => colors.red};
  }

  &:hover svg {
    fill: ${({ theme: { colors } }) => colors.textColorLight};
  }
`;
