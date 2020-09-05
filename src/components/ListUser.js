import React from 'react';
import User from './User';
import SwipeableViews from 'react-swipeable-views';
import { Box } from '@material-ui/core';

function ListUser(props) {

  const {users, selectedTab, categories} = props;

  return (

    <SwipeableViews
      axis={'x'}
      index={selectedTab}
    >
      {

        categories.map((category, tab) => {
          return (
            <Box key={tab}>
              {
              users
                .filter(user => {
                  return user.category === tab;
                })
                .map((user, idx) => {
                  return <User key={idx} user={user}></User>
                })
              }
            </Box>
          )
        })
      }
    </SwipeableViews>
  );
}

export default ListUser;
