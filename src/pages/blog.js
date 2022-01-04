import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import {Grid, Card, CardContent, Typography} from '@mui/material';
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Grid container spacing={2} direction="column">

      <Grid item>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent>
            <Typography variant="h4">
              Blog
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <Grid item>
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
