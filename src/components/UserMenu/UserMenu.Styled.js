import styled from 'styled-components';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  color: black;
  font-weight: 700;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 7px;
  border-radius: 5px;
  border-color: gray;
  background-color: grey;
  font-weight: 500;
  /* text-transform: capitalize; */
  /* font-style: italic; */
  color: white;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;
