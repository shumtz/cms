import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import SideBar from '../../../components/Sidebar';
import { Container } from '../style';
import {
  Button, Card, Input, Form, Switch, Label,
} from '../../../components/styles';

const Dashboard: React.FC = () => (
  <Container>
    <SideBar />
    <Card margin="02%">
      <Form>
        <Input placeholder="Titulo" />
        <Editor
          apiKey="sr7pi472l09htcjfcm4ggostq1xs8q6c5e1s0wb7u62t681l"
          init={{
            height: 620,
            menubar: false,
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
        />
        <Label>
          Rascunho
          <Switch type="checkbox" />
        </Label>
        <Button>Enviar</Button>
      </Form>
    </Card>
  </Container>
);

export default Dashboard;
