import React from 'react';
import SideBar from 'components/Sidebar';
import api from 'services/api';
import {
  Button, Card, Input, Form, Label, Switch,
} from 'components/styles';
import Editor from 'components/Editor';
import Title from 'components/Helmet';
import { Container } from '../style';

const Dashboard: React.FC = () => {
  const [title, setTitle] = React.useState<string>();
  const [post, setPost] = React.useState<string>();
  const [value, setValue] = React.useState<boolean>();
  function handleChange() {
    setValue(!value);
  }
  async function postSend() {
    const response = await api.post('api/post/create', { title, content: post, draft: value });

    return response;
  }
  return (
    <Container>
      <Title title="Criar Post" />
      <SideBar />
      <Card margin="02%">
        <Form>
          <Input placeholder="Titulo" onChange={(e: any) => setTitle(e.target.value)} />
          <Editor editorChange={setPost} initialValue={post} />
          <Label>
            Rascunho
            <Switch
              type="checkbox"
              defaultChecked={value}
              onChange={handleChange}
            />
          </Label>
          <Button onClick={postSend} type="submit">Enviar</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Dashboard;
