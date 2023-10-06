import React, { useEffect, useState } from 'react'

import Layout from '../components/layout'

const TestingGround = () => {
  const [functionResponseData, setFunctionResponseData] = useState(null);

  useEffect(() => {
    (async () => {
        const response = await fetch('/api/goodbye-horses');
        const responseJson = await response.json();

        setFunctionResponseData(responseJson.message);
    })();
  }, []);

    return (
        <Layout location={''}>
            data from netlify function: {functionResponseData}
        </Layout>
    );
}

export default TestingGround;