import './styles/global.css';
import styled from 'styled-components';
import Table from './Table/Table';
import { Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

function App() {
  const [data, setData] = useState([]);

  const handleLoad = async () => {
    const { data: initData } = await axios.get(
      'http://universities.hipolabs.com/search?country=Australia'
    );
    setData(initData);
  };

  const handleDelete = () => {
    data.pop();
    const newData = [...data];
    setData(newData);
  };

  const handleAdd = () => {
    if (data.length !== 0) {
      data.push(data[1]);
    }
    const newData = [...data];
    setData(newData);
  };

  return (
    <Wrapper>
      <ButtonSection>
        <Button type="secondary" onClick={handleLoad}>
          LOAD
        </Button>
        <Button type="danger" onClick={handleDelete}>
          DELETE
        </Button>
        <Button type="primary" onClick={handleAdd}>
          ADD
        </Button>
      </ButtonSection>
      <Table data={data} />
    </Wrapper>
  );
}

export default App;
