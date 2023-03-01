import styled from 'styled-components';

//.color1 {color: #f49be6;}
//.color2 {color: #f8c1d4;}
//.color3 {color: #310d17;}
//.color4 {color: #877676;}
//.color5 {color: #f3eae8;}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(194, 192, 236, 1) 49%,
    rgba(152, 166, 241, 1) 100%
  );
`;

export const ModalBlock = styled.div`
  position: absolute;
  width: 35vw;
  height: 40vh;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f3eae8;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalDescription = styled.div`
  width: 30vw;
  height: 35vh;
`;

export const Button = styled.button`
  position: absolute;
  left: 30px;
  bottom: 30px;

  display: block;
  width: fit-content;
  padding: 0 10px;
  height: 40px;
  outline: transparent;
  background-color: #310d17;
  font-size: 18px;
  color: #f3eae8;
  border-radius: 5px;
  border-color: transparent;
  margin-top: 38px;
  font-weight: 600;

  &:hover,
  &:focus {
    background-color: #f3eae8;
    color: #310d17;
    border: 1px solid #310d17;
  }
`;

export const CompletedBlock = styled.div`
  position: absolute;
  left: 30px;
  bottom: 80px;
  display: flex;
  align-items: center;
`;

export const Completed = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
