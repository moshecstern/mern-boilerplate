import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../../components/Material-ui/Header';
import MainFeaturedPost from '../../components/Material-ui/MainFeaturedPost';
import FeaturedPost from '../../components/Material-ui/FeaturedPost';
import Main from '../../components/Material-ui/Main'; 
import Sidebar from '../../components/Material-ui/Sidebar';
import Footer from '../../components/Material-ui/Footer';
import About from '../../components/Features/Resources'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {
  Button,
} from "@material-ui/core";
import Cookies from 'js-cookie';
const jwtDecode = require('jwt-decode');

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
      sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
      },
      sidebarSection: {
        marginTop: theme.spacing(3),
      },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome to Montgomery Capital',
  description:
    "Small business loans quick, safe and easy.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Apply Now',
};

const featuredPosts = [
  {
    title: 'Get Funds',
    catagory: 'application',
    date: 'Apply Now',
    description:
      'Enter your details and apply in minutes.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Check your applications',
    catagory: 'myapplication',
    date: 'Check',
    description:
      'We will email you when your application is reviewed. You can always check your applications here.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Our team is always there for you. Serving the Montgomery County since 2019, with the ethics and morals in line with the great values of America',
  archives: [
    { title: 'About', url: 'about' },
    { title: 'How it Works', url: 'howitworks' },
    { title: 'Funding Options', url: 'fundingoptions' },
    { title: 'Blog', url: 'blog' },
    { title: 'Faq', url: 'faq' },
    { title: 'Reviews', url: 'reviews' },
    { title: 'Values', url: 'values' },
    { title: 'Privacy Policy', url: 'privacypolicy' },
    { title: 'Terms of Use', url: 'termsofuse' },
    { title: 'Contact', url: 'contact' },
    { title: 'Mission Statement', url: 'missionstatement' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Home(props) {
  console.log(props.match.params.name)
  const classes = useStyles();
  const [selectedDashboard, setSelectedDashboard] = React.useState('about')

  let accessString = localStorage.getItem('JWT')
  if(accessString == null){
    accessString = Cookies.get("JWT");
  }
  // let yourDetails = jwtDecode(accessString).username || "Guest"
  // function getUsersDetails() {
      //   useEffect(() => {
        
      //     if(jwtDecode(accessString).username !== null){
      //       let yourDetails = jwtDecode(accessString).username
      //     } else {
      //       let yourDetails = "Guest"
      //     }
      // }, []);
// }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <br />
        {/* <Header title="Blog" sections={sections} /> */}

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title={"Welcome"} tab={selectedDashboard} /> 
            {/* {props.selectedDashboard === "about" && <About />} */}
            {/* {sidebar.archives.map(arch => ( */}
            <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {sidebar.title}
        </Typography>
        <Typography>{sidebar.description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Resources
      </Typography>
      {sidebar.archives.map(archive => (
        <Button display="block" variant="outlined" onClick={(e)=> setSelectedDashboard(archive.url)} key={archive.title}>
          {archive.title}
        </Button>
      ))}
      {/* {sidebar.archives.map(archive => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
        {/* <Button display="block" key={archive.title} onClick={(e)=> setSelectedDashboard(archive.url)}>{archive.title}</Button> */}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {sidebar.social.map(network => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
    
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}