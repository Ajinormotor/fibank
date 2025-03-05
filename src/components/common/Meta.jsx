import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, keywords, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
<meta name="description" content={description} />

    </Helmet>
  );
};

export default Meta;

Meta.defaultProps = {
  title: 'Secure Online Banking - FiBank',
  description: 'Experience secure, fast, and convenient online banking with Ajino Bank. Manage your accounts, transfer funds, and access financial services anytime, anywhere.',
  keywords: 'online banking, secure banking, digital banking, financial services, money transfer, mobile banking',
};
