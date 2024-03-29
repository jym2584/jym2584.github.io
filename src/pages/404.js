import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Grid, Alert, AlertTitle, Typography, Card, CardContent} from '@mui/material';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404" />
      <Grid container spacing={2} direction="row">

      <Grid item xs={12}>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent>
            <Typography variant="h4">
              404 - Page not found
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography>
              Feelsbadman
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      </Grid>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
