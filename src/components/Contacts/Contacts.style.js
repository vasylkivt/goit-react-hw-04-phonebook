import styled from 'styled-components';

export const Title = styled.h2`
  display: flex;
  justify-content: center;

  margin-bottom: 40px;

  color: ${({ theme: { colors } }) => colors.titleColorDark};
  font-weight: 700;
  font-size: 32px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-transform: capitalize;
  text-align: center;

  & span {
    position: relative;
  }

  & span::after {
    position: absolute;
    bottom: -3px;
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.accent};
  }
`;

export const Wrap = styled.div`
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;

  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColorDark}30;
`;
