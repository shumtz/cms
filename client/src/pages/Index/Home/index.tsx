import Header from 'components/Header';
import { Card, Text } from 'components/styles';
import React from 'react';
import api from 'services/api';

const Home: React.FC = () => {
  const [data, setData] = React.useState<any>();
  async function handlePosts() {
    const response = await api.get('/api');
    const json = await response.data;
    setData(json);
  }

  React.useEffect(() => {
    handlePosts();
  }, []);
  return (
    <>
      <Header />
      <Card>
        {data && data.map((items: any) => (
          <Card>
            <Text>{items.title}</Text>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default Home;
