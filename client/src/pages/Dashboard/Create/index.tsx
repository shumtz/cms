import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import {
  Button, Card, Input, Form,
} from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <Form>
        <Input placeholder="Titulo" />
        <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
             `undo redo | formatselect | bold italic backcolor |
             alignleft aligncenter alignright alignjustify |
             bullist numlist outdent indent | removeformat | help`,
          }}
        />
        <Button>Enviar</Button>
      </Form>
    </Card>
  </Container>
);

export default Dashboard;
