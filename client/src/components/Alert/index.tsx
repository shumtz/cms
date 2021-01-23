import React from 'react';
import { Card, Text, Button } from './style';

interface Props {
  content: string;
  click: any;
}

const Message: React.FC<Props> = ({ content, click }) => (
  <>
    <Card>
      <Text>{content}</Text>
      <Button onClick={click} type="button">X</Button>
    </Card>
  </>
);

export default Message;
