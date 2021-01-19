import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import { Button, Card, Text } from '../../../components/styles';
import api from '../../../services/api';

const Posts: React.FC = () => {
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
    <Container>
      <Helmet>
        <title>Publicações</title>
      </Helmet>
      <SideBar />
      <Card margin="02%">
        <Link to="/dashboard/create"><Button>Criar novo</Button></Link>
        {data && data!.map((items: any) => (
          <Card margin="10px 0px" key={items.id}>
            <Link to={`/dashboard/post/${items.id}`}>
              <Text
                fontSize="25px"
                justifyContent="flex-start"
              >
                {items.title}
              </Text>
            </Link>
          </Card>
        ))}
      </Card>
    </Container>
  );
};

export default Posts;
