import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Header, Image, Table, Loader } from 'semantic-ui-react'
import './Search.css';


function Search() {

  const [inputValue, setInputValue] = useState('');
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    if (!inputValue) {
      return;
    }
    setIsLoading(true);
    setIsError(false);
    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch(err => {
        setIsError(true);
      })
  }

  const addRepo = (repo) => {
    let displayedRepos = localStorage.getItem('myData')
    displayedRepos = JSON.parse(displayedRepos)
    console.log(displayedRepos)
    if (!displayedRepos) {
      displayedRepos = [repo]
    } else {
      if (displayedRepos.indexOf(repo) === -1) {
        displayedRepos.push(repo)
        console.log(displayedRepos)
      }
    }
    localStorage.setItem('myData', JSON.stringify(displayedRepos))
  }


  return (
    <Container text>
      <Form className='search-form' onSubmit={handleSubmit}>
        <Form.Input
          placeholder='Search for repositories'
          onChange={handleSearch}
        />
        <Button type='submit'>Search</Button>
        <Button as={Link} to='/'>Back</Button>
      </Form>
      {isLoading ? <Loader active inline='centered' size='large' />: null}
      {isError ? <div>There's an error</div> : null}
      {!isLoading && repos.length > 0 && <Table basic='very' celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repository</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
            <Table.HeaderCell>Add To Home Page</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {repos.map(repo => {
        return <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={repo.owner.avatar_url} rounded size='mini' />
            <Header.Content>
              {repo.full_name}
              <Header.Subheader>{repo.owner.login}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{repo.updated_at}</Table.Cell>
        <Table.Cell><Button onClick={() => addRepo(repo)}>Add</Button></Table.Cell>
        </Table.Row>
        })}
        </Table.Body>
      </Table>}
    </Container>
  );
}

export default Search;
