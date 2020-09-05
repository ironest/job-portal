import React, { useState } from 'react';
import '../styles/App.scss';
import { CssBaseline } from '@material-ui/core';
import FilterCategory from './FilterCategory';
import ListUser from './ListUser';
import data from '../api/data';
import Container from '@material-ui/core/Container';

function App() {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container maxWidth="lg">
      <FilterCategory
        categories={data.categories}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></FilterCategory>
      <ListUser
        users={data.users}
        selectedTab={selectedTab}
        categories={data.categories}
      ></ListUser>
    </Container>
  );
}

export default App;
