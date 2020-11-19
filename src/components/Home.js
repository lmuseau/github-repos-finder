import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Container, Table } from 'semantic-ui-react'
import './Home.css';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    let data = localStorage.getItem('myData');
    data = JSON.parse(data)
    console.log(data)
    this.state.repos = data
    console.log(this.state.repos)
  }

  render() {
    return (
      <Container text className='get-started'>
        <Button fluid as={Link} to='/search' animated>
          <Button.Content visible>Search For Repositories</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Git Repository</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name='folder' /> node_modules
              </Table.Cell>
              <Table.Cell>Initial commit</Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                10 hours ago
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Home;
