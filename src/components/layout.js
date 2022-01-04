import * as React from "react"
import {AppBar, Toolbar, Typography} from '@mui/material';
import {Button} from "gatsby-theme-material-ui";

const Layout = ({children }) => {
  return (
    <div className="global-wrapper">
      <header>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <Button style={{textTransform: 'none', backgroundColor: 'transparent'}} to="/" sx={{ flexGrow: 1 }} disableRipple>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >Jin Moon</Typography>
          </Button>


          <Button color="inherit" to="/blog">Blog</Button>
          <Button color="inherit" to="/projects">Projects</Button>
          <Button color="inherit" to="/resume">Resume</Button>
        </Toolbar>
      </AppBar>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout


