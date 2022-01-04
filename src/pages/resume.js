import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Alert, AlertTitle, Typography, Card, CardContent, Grid} from '@mui/material';

const Resume = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
<Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <Grid container spacing={2} direction="row">

      <Grid item xs={12}>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent>
            <Typography variant="h4">
              Resume
            </Typography>
          </CardContent>
        </Card>
        <Alert severity="info"> 
          <AlertTitle>Work in progress</AlertTitle>
            :(
        </Alert>
      </Grid>


      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography>
              Do I plan to have something here? Yes. How soon? Yes. 😔
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      </Grid>
    </Layout>
  )
}

export default Resume;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
