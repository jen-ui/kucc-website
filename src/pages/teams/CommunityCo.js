import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from '../../components/TeamCard/TeamCard'
import { Helmet } from 'react-helmet'


/**
 * @type {Array<{name: string, position: string, image: string, linkedin: string, mail: string}>}
 */
const coordinatorsList = [
  {
    name: 'jk',
    position: 'gs',
    image: '',
    linkedin: 'ga',
    mail: 'adf',
  },
]

const CommunityCo = () => {
  return (
    <>
      <Helmet>
        <title> Community Coordinators - KUCC</title>
      </Helmet>
      <Container sx={{ py: 8 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="subtitle1" color="text.secondary">
            KUCC Board 2020-21
          </Typography>
          <Typography variant="h4">Coordinators</Typography>
        </Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {coordinatorsList.map((coordinator) => (
            <Grid item md={4} sm={6} xs={12}>
              <TeamCard{...coordinator} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default CommunityCo
