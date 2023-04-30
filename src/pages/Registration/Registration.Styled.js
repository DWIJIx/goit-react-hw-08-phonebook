import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
  /* font-style: italic; */
  color: black;
`;

export const Button = styled.button`
  border-radius: 5px;
  border-color: gray;
  background-color: grey;
  font-weight: 500;
  text-transform: capitalize;
  /* font-style: italic; */
  color: white;
  font-size: 18px;

  &:hover {
    background-color: #fffb5e;
    color: blue;
    cursor: pointer;
  }
`;
