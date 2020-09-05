import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function FilterCategory( props ) {

  const {categories, selectedTab, setSelectedTab} = props;
  const handleClick = (event, selectedTab) => {
    setSelectedTab(selectedTab);
  }

  return (
    <AppBar position="static">
      <Tabs
        value={selectedTab}
        variant="fullWidth"
        onChange={handleClick}
      >

        { categories.map( (category, idx) => {
          return <Tab
            key={idx}
            label={category.description} />
        })}

      </Tabs>
    </AppBar>
  );
}

export default FilterCategory;
