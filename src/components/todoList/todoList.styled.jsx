import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  width: 700px;
`;

export const Tables = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  background-color: #f8c1d4;
  padding: 30px;
`;

export const List = styled.ul`
  background-color: #f3eae8;
  padding: 30px;
  list-style: none;
  width: 100%;
`;

export const Table = styled.li`
  color: #310d17;
  font-size: 18px;
  font-weight: 600;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #310d17;
`;

export const Title = styled.p`
  color: #310d17;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 15px;
  white-space: pre-wrap;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Completed = styled.input`
  width: 20px;
  height: 20px;
`;
