import React from 'react'
import Helmet from "helmet";
import SectionOne from '../section-1';

const Home = () => {
  return (
    <div>
          <Helmet>
          <title>Home Page</title>
          <meta name="description" content="My home page" />
        </Helmet>
<SectionOne/>
    </div>
  )
}

export default Home