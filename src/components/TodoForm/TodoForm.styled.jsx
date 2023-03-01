import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #877676;
  justify-content: center;
  padding-bottom: 50px;
`;

export const BlockForm = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
export const BlockInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #310d17;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border-color: transparent;
  font-size: 18px;
  color: #310d17;
  outline: transparent;
  background-color: #f3eae8;
  padding: 0 10px;
`;

export const Error = styled(ErrorMessage)`
  margin-top: 10px;
  color: #fa3964;
  padding: 10px;
  border: 1px solid #fa3964;
  font-size: 16px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 0 10px;
  height: 40px;
  outline: transparent;
  background-color: #f3eae8;
  font-size: 18px;
  color: #310d17;
  border-radius: 5px;
  border-color: transparent;
  margin-top: 38px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #310d17;
    color: #f3eae8;
    border: 1px solid #f3eae8;
  }
`;
