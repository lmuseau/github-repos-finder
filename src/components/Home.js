import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Container, Table, Image } from 'semantic-ui-react'
import Moment from 'react-moment';
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
    if (!data) {
      this.state.repos = data
    } else {
      this.setState({
        repos: data
      })
    }
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
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Git Repository</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
              <Table.HeaderCell>Latest Release Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {this.state.repos.map(repo => {
              return <Table.Row key={repo.id}>
              <Table.Cell collapsing textAlign='center'><Image src={repo.owner.avatar_url} rounded size='mini' /></Table.Cell>
              <Table.Cell textAlign='center'>{repo.name}</Table.Cell>
              <Table.Cell textAlign='center'>{repo.owner.login}</Table.Cell>
              <Table.Cell textAlign='left'><Moment format='YYYY/MM/DD'>{repo.releaseDate}</Moment></Table.Cell>
            </Table.Row>
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Home;
