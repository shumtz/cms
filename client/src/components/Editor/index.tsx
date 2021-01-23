import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface Props {
  editorChange: any;
  initialValue: any;
}

const EditorComponent: React.FC<Props> = ({ editorChange, initialValue }) => (
  <Editor
    apiKey="sr7pi472l09htcjfcm4ggostq1xs8q6c5e1s0wb7u62t681l"
    initialValue={initialValue}
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
    onEditorChange={editorChange}
  />
);

export default EditorComponent;
