import React from 'react';
import { Helmet } from 'react-helmet';
import { Editor } from '@tinymce/tinymce-react';
import SideBar from 'components/Sidebar';
import api from 'services/api';
import {
  Button, Card, Input, Form, Label, Switch,
} from 'components/styles';
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
      <Helmet>
        <title>Criar Publicação</title>
      </Helmet>
      <SideBar />
      <Card margin="02%">
        <Form>
          <Input placeholder="Titulo" onChange={(e: any) => setTitle(e.target.value)} />
          <Editor
            apiKey="sr7pi472l09htcjfcm4ggostq1xs8q6c5e1s0wb7u62t681l"
            init={{
              height: 620,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen emoticons',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
             `undo redo | formatselect | bold italic backcolor |
             alignleft aligncenter alignright alignjustify |
             bullist numlist outdent indent | emoticons
             insertdatetime code fullscreen | media removeformat |
             help`,
            }}
            onEditorChange={setPost}
          />
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
