import React from 'react';
import api from 'services/api';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Card, Text } from '../../../components/styles';

const Dashboard: React.FC = () => {
  const [data, setData] = React.useState<any>(0);
  async function handleCount() {
    const response = await api.get('/api');
    const json = await response.data;
    setData(json);
  }

  React.useEffect(() => {
    handleCount();
  }, []);
  return (
    <Container>
      <SideBar />
      <Card margin="02%" display="flex">
        <Card margin="20px">
          <Text fontSize="25px" justifyContent="flex-start">
            Posts postados:
            {' '}
            {data.length}
          </Text>
        </Card>
      </Card>
    </Container>
  );
};

export default Dashboard;
