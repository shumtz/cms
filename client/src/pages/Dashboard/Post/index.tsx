import React from 'react';
import Title from 'components/Helmet';
import SideBar from 'components/Sidebar';
import Message from 'components/Alert';
import {
  Card, Container, Input, Button, Form,
} from 'components/styles';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import Editor from 'components/Editor';

const Post: React.FC = () => {
  const { id } : any = useParams();
  const [data, setData] = React.useState<any>();
  const [title, setTitle] = React.useState<string>();
  const [post, setPost] = React.useState<string>();
  const [status, setStatus] = React.useState<any>();

  async function handleData() {
    const response = await api.get(`/api/post/${id}`);
    const json = await response.data;
    setData(json.message.post);
  }

  async function updatePost() {
    const response = await api.put(`/api/post/${id}`, { title, message: post });

    setStatus(response.data.message);

    return response;
  }

  function clear() {
    setStatus('');
  }

  React.useEffect(() => {
    clear();
    handleData();
  }, []);

  return (
    <Container>
      <Title title="Post" />
      <SideBar />
      <Card margin="02%">
        <Form>
          <Input placeholder="Titulo" defaultValue={data && data.title} onChange={(e: any) => setTitle(e.target.value)} />
          <Editor editorChange={setPost} initialValue={data && data.content} />
          <Button onClick={updatePost} type="button">Enviar</Button>
          {status ? (
            <Message content={status} click={clear} />
          ) : ''}
        </Form>
      </Card>
    </Container>
  );
};

export default Post;
