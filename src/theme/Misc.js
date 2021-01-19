import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.space[3]};
  transition: border-color 2s linear;
  border: 2px solid
    ${(props) =>
      props.primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.text};
  }
`;
