import * as React from "react"
import {Typography, Card, CardContent, CardMedia, CardHeader, Avatar, IconButton, Grid} from '@mui/material';
import {GitHub, Mail, LinkedIn} from '@mui/icons-material';
import Layout from "../components/layout"
import Seo from "../components/seo"

const App = () => {
  return (
    <Layout className="content">
      <Seo title="Main" />
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Card>
          
          <CardMedia component="img" height="150" image="https://i.imgur.com/vMpaWhX.jpeg" alt="background"/>
          <div className="cardHeader">
            <Avatar alt="avatar" src="https://avatars.githubusercontent.com/u/67706639" sx={{ width: 128, height: 128}}/>
          </div>

          <CardContent>
            <Typography sx={{ fontSize: 20, height:65 }} color="text.secondary" gutterBottom align="center">
              Jin Moon <br/>
                <IconButton className="icon" alt="GitHub profile" sx={{ fontSize: 30 }} href="https://github.com/jym2584">
                  <GitHub fontSize="inherit" href="https://github.com/jym2584"/>
                </IconButton>
                <IconButton className="icon" alt="Email" sx={{ fontSize: 30 }} href="mailto:jym2584@rit.edu">
                  <Mail fontSize="inherit" />
                </IconButton>
                <IconButton alt="LinkedIn profile" sx={{ fontSize: 30 }} href="https://www.linkedin.com/in/jym2584/">
                  <LinkedIn fontSize="inherit" />
                </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Hello
            </Typography>
            
            <Typography variant="body1">
              I'm not exactly sure how to populate this content but welcome! :) <br/><br/>
              The buttons on the Navbar doesn't have any webpages associated to them but I plan to get around to them whenever
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Layout>
  )
}

export default App;