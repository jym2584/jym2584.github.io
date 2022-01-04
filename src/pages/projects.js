import * as React from "react"
import { graphql } from "gatsby"
import {Alert, AlertTitle, Typography, Button, Card, CardContent, CardMedia, CardActions, Grid} from '@mui/material';

import Layout from "../components/layout"
import Seo from "../components/seo"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
<Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <Grid container spacing={2} direction="row">

      <Grid item xs={12}>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent>
            <Typography variant="h4">
              Projects
            </Typography>
          </CardContent>
        </Card>
        <Alert severity="info">
          <AlertTitle>Work in progress</AlertTitle>
            Planning to support markdown on this page in the future :)
        </Alert>
      </Grid>

          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://i.imgur.com/BabqvuQ.jpeg"
                alt="background"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Example card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is my ideal setup of the page. Cards would dynamically be updated either through some markdown or fetching my repository and popluating the content via the readme file.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Repository</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://i.imgur.com/02t9VNg.jpeg"
                alt="background"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Anotha one!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It would also (ideally) include a short description about the project!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Repository</Button>
              </CardActions>
            </Card>
          </Grid>



      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
