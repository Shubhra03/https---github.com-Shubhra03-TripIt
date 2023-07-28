import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'; // Import the CSS file

const Header = () => {
  return (
    <AppBar className="AppBar">
      <Toolbar className="Toolbar">
        <Typography  variant="h6" className="Logo">
          Travel Advisor
        </Typography>
        <Box>
          <Typography variant="h6" className="ExploreText">
            Explore new places
          </Typography>
          <div className="SearchContainer">
            <div className="SearchIcon">
              <SearchIcon />
            </div>
            <InputBase className="SearchInput" placeholder="Search…" />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
