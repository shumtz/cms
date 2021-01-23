import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: any;
}

const HelmetComponent: React.FC<Props> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default HelmetComponent;
