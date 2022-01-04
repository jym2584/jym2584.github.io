import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Grid, Card, CardContent, Typography, Breadcrumbs, Tooltip} from '@mui/material';
import {Button} from "gatsby-theme-material-ui";
import {NavigateNext, NavigateBefore} from '@mui/icons-material';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Grid container spacing={2} direction="column" >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      

      <Grid item>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link to="/blog">Blog</Link>
            <Typography color="text.primary">{post.frontmatter.title}</Typography>
          </Breadcrumbs>

          <Typography variant="h4">
          {post.frontmatter.title}
        </Typography>
        <Typography>
        {post.frontmatter.date}
        </Typography>
          </CardContent>
        </Card>
      </Grid>

        <Grid item>
        <Card>
          <CardContent sx={{width: '97%'}} style={{ margin: 'auto' }}>
        <Typography dangerouslySetInnerHTML={{ __html: post.html }}/>
        </CardContent>
        </Card>
        </Grid>
        
        <Grid item>
        <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Tooltip title="Older Post" placement="top">
              <Button variant="outlined" to={previous.fields.slug} rel="prev" startIcon={<NavigateBefore/>}>
                {previous.frontmatter.title}
              </Button>
              </Tooltip>
            )}
          </li>
          <li>
            {next && (
              <Tooltip title="Newer Post" placement="top">
              <Button variant="outlined" to={next.fields.slug} rel="next" endIcon={<NavigateNext/>}>
                {next.frontmatter.title}
              </Button>
              </Tooltip>
            )}
          </li>
        </ul>
      </nav>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
