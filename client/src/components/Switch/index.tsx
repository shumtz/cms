import React from 'react';
import { Switch } from '../styles';

interface Props {
  onChange: any
}

// eslint-disable-next-line no-unused-vars
const SwitchToggle: React.FC<Props> = ({ onChange }: Props) => {
  const [data, setData] = React.useState(false);
  function handleChange() {
    setData(!data);
  }
  return (
    <Switch
      type="checkbox"
      defaultChecked={data}
      onChange={handleChange}
    />
  );
};

export default SwitchToggle;
