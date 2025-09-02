import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Stories(): ReactNode {
  return (
    <Layout
      title="Stories"
      description="Creative stories and narratives by Jawad Ateeq">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Stories</Heading>
            <p>
              Welcome to my collection of creative stories and narratives. 
              This space is dedicated to fictional works, personal anecdotes, 
              and imaginative explorations.
            </p>
            <p>
              <em>Stories will be added here soon...</em>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
