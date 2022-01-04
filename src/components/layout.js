import * as React from "react"
import {AppBar, Toolbar, Typography, Card, Box, CardContent, Popover, Fade, Paper, CardMedia, CardHeader, Avatar, IconButton, Grid} from '@mui/material';
import {Button, Link} from "gatsby-theme-material-ui";
const Layout = ({children }) => {
  return (
    <div className="global-wrapper">
      <header>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}><Link to="/" className="bloglink">Jin Moon</Link></Typography>
          <Button color="inherit" to="/blog">Blog</Button>
          <Button color="inherit" to="/projects">Projects</Button>
          <Button color="inherit">Resume</Button>
        </Toolbar>
      </AppBar>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout


