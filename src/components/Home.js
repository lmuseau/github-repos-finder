import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Container } from 'semantic-ui-react'
import './Home.css';


function Home() {

  return (
    <Container text className='get-started'>
      <Button fluid as={Link} to='/search' animated>
        <Button.Content visible>Search For Repositories</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </Container>
  );
}

export default Home;
