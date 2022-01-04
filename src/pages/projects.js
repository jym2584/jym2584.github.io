import * as React from "react"
import { graphql } from "gatsby"
import {AppBar, Toolbar, Typography, Button, Card, Box, CardContent, Link, Popover, Fade, Paper, CardMedia, CardHeader, Avatar, IconButton, Grid} from '@mui/material';
import {GitHub, Mail, LinkedIn} from '@mui/icons-material';
import Layout from "../components/layout"
import Seo from "../components/seo"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
<Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Grid container spacing={2} direction="row">

      <Grid item xs={12}>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent>
            <Typography variant="h4">
              Projects
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <Grid item xs={6}>
            <Link to={post.fields.slug} className="bloglink">
            <Card>
              <CardContent>
              <Typography variant="h5" color="text.secondary">
                {title}
              </Typography>
              
              <Typography>
                {post.frontmatter.date}
              </Typography>
              <br/>
              <Typography>
                {post.frontmatter.description || post.excerpt}
              </Typography>
              </CardContent>
          </Card>
          </Link>
          </Grid>
        )
      })}
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
