import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import TeamCard from '../../components/TeamCard/TeamCard'
import { Helmet } from 'react-helmet'


/**
 * @type {Array<{name: string, position: string, image: string, linkedin: string, mail: string}>}
 */
const coordinatorsList = [
  {
    name: 'Roshan Sahani',
    position: 'Cloud Community Coordinator',
    image: '/coordinators/Roshan_Sahani.jpg',
    linkedin: 'https://www.linkedin.com/in/felixhud/',
    mail: 'roshansahani226@gmail.com',
  },
  {
    name: 'Samikshya Upadhyay',
    position: 'Cybersecurity and Networking Community Coordinator',
    image: '/coordinators/Samikshya_Upadhyay.jpg',
    linkedin: 'https://www.linkedin.com/in/samikshyaupadhyay/',
    mail: 'su58071320@gmail.com',
  },
  {
    name: 'Shaswot Paudel',
    position: 'Cybersecurity and Networking Community Coordinator',
    image: '/coordinators/Shaswot_Paudel.jpg',
    linkedin: '#',
    mail: 'shaswotpaudel58@gmail.com',
  },
  {
    name: 'Shaswat Pant ',
    position: 'Dart Community Coordinator',
    image: '/coordinators/Shaswat_Pant.jpg',
    linkedin: 'https://www.linkedin.com/in/shaswat-pant-5b03a3269/',
    mail: 'pantshaswat@gmail.com',
  },
  {
    name: 'Aayush Pokhrel',
    position: 'Design Community Coordinator',
    image: '/coordinators/Aayush_Pokhrel.jpg',
    linkedin: 'https://www.linkedin.com/in/aayush-pokhrel-532a96268/',
    mail: 'aayushpokhreld@gmail.com',
  },
  {
    name: 'Krishita Pandey',
    position: 'Design Community Coordinator',
    image: '/coordinators/Krishita_Pandey.png',
    linkedin:
      'https://www.linkedin.com/in/krishita-pandey-a149b5211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjXxA8PtCQHKS73MwPYeX4g%3D%3D',
    mail: 'pandeykrishita@gmail.com',
  },
  {
    name: 'Anusha Rajlawat',
    position: 'Documentation Community Coordinator',
    image: '/coordinators/Anusha_Rajlawat.jpeg',
    linkedin: 'https://www.linkedin.com/in/anusha-rajlawat-9961b7279',
    mail: 'anusharajlawat@gmail.com',
  },

  {
    name: ' Abhyudit Adhikari',
    position: 'Entrepreneurship and Monetization Community Coordinator',
    image: '/coordinators/Abhyudit_Adhikari.jpg',
    linkedin: 'http://www.linkedin.com/in/abhyudit-adhikari',
    mail: 'abhyu.adhikari@gmail.com',
  },
  {
    name: 'Regal Adhikari ',
    position: 'Game Development Community Coordinator',
    image: '/coordinators/Regal_Adhikari.jpeg',
    linkedin: 'https://www.linkedin.com/in/regal-adhikari-03b958254/',
    mail: 'regalbrt@gmail.com',
  },
  {
    name: 'Dipen Khatri',
    position: 'Health Informatics Community Coordinator',
    image: '/coordinators/Dipen Khatri.jpEg',
    linkedin: 'https://www.linkedin.com/in/dipenkhatri7/',
    mail: 'khatridipen7@gmail.com',
  },
  {
    name: 'Sushan Adhikari',
    position: 'Health Informatics Community Coordinator',
    image: '/coordinators/Sushan_Adhikari.jpg',
    linkedin: 'http://www.linkedin.com/in/sushan-adhikari',
    mail: 'sushan.adhikari2060@gmail.com',
  },
  {
    name: 'Nischal Baral',
    position: 'Java and Kotlin Community Coordinator',
    image: '/coordinators/Nischal_Baral.jpg',
    linkedin: 'https://www.linkedin.com/in/nischal-baral-6b8404229/',
    mail: 'nischalbaral267@gmail.com',
  },
  {
    name: 'Pranish Kafle',
    position: 'Java and Kotlin Community Coordinator',
    image: '/coordinators/Pranish_Kafle.jpg',
    linkedin: 'https://www.linkedin.com/in/pranish-kafle-024475232/',
    mail: 'pranishkafle1@gmail.com',
  },
  {
    name: 'Asim Shrestha',
    position: 'Javascript Community Coordinator',
    image: '/coordinators/Asim_Shrestha.jpg',
    linkedin: 'https://www.linkedin.com/in/asim-shrestha-33665b150/',
    mail: 'ashim.shrestha.55@gmail.com',
  },
  {
    name: 'Bigyan Byanju Shrestha',
    position: 'Machine Learning Community Coordinator',
    image: '/coordinators/Bigyan_Byanju_Shrestha.jpg',
    linkedin: 'https://www.linkedin.com/in/bigyan-byanju-shrestha-3651081b6/',
    mail: 'byanjubigyan9841@gmail.com',
  },
  {
    name: 'Manish Shivabhakti',
    position: 'Machine Learning Community Coordinator',
    image: '/coordinators/Manish_Shivabhakti.jpg',
    linkedin: 'https://www.linkedin.com/in/manishshivabhakti/',
    mail: 'manish.shivabhakti.99@gmail.com',
  },
  {
    name: 'Prajwal Gaire',
    position: 'Music Informatics Community Coordinator',
    image: '/coordinators/Prajwal_Gaire.jpeg',
    linkedin: 'https://www.linkedin.com/in/prajwal-gaire-42b46420a/',
    mail: 'prajwalgaire617@gmail.com',
  },
  {
    name: 'Reewaj Khanal',
    position: 'Music Informatics Community Coordinator',
    image: '/coordinators/Reewaj_Khanal.jpg',
    linkedin: 'https://www.linkedin.com/in/reewaj-khanal-91874b230/',
    mail: 'rk26071320@student.ku.edu.np',
  },
  {
    name: 'Abiral Adhikari',
    position: 'Python and Data Science Community Coordinator',
    image: '/coordinators/Abiral_Adhikari.jpg',
    linkedin: 'https://www.linkedin.com/in/abiral-adhikari/',
    mail: 'abiraladhikari1222@gmail.com',
  },
  {
    name: 'Siddharth Chaudhary',
    position: 'Python and Data Science Community Coordinator',
    image: '/coordinators/Siddharth_Chaudhary.jpg',
    linkedin: 'https://www.linkedin.com/in/siddharth-chaudhary-107764191/',
    mail: 'sidartchy203@gmail.com',
  },
  {
    name: 'Rishad Baniya',
    position: 'Rust Community Coordinator',
    image: '/coordinators/Rishad Baniya.jpg',
    linkedin: 'https://www.linkedin.com/in/rishad-baniya-7b869b22b/',
    mail: 'rbdroid01@gmail.com',
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
