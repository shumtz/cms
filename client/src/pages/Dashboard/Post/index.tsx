import React from 'react';
import SideBar from 'components/Sidebar';
import {
  Card, Container, Input, Button, Form,
} from 'components/styles';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import { Editor } from '@tinymce/tinymce-react';

const Post: React.FC = () => {
  const { id } : any = useParams();
  const [data, setData] = React.useState<any>();
  const [title, setTitle] = React.useState<string>();
  const [post, setPost] = React.useState<string>();

  async function handleData() {
    const response = await api.get(`/api/post/${id}`);
    const json = await response.data;
    setData(json.response.post);
  }

  async function updatePost() {
    const response = await api.put(`/api/post/${id}`, { title, content: post });

    return response;
  }

  React.useEffect(() => {
    handleData();
  }, []);

  return (
    <Container>
      <SideBar />
      <Card margin="02%">
        <Form>
          <Input placeholder="Titulo" defaultValue={data && data.title} onChange={(e: any) => setTitle(e.target.value)} />
          <Editor
            apiKey="sr7pi472l09htcjfcm4ggostq1xs8q6c5e1s0wb7u62t681l"
            initialValue={data && data.content}
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
          <Button onClick={updatePost} type="submit">Enviar</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Post;
