import React from 'react';
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
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
let post1 = <p>first blog post</p>
let post2 = <p>second blog post</p>
let post3 = <p>third blog post</p>
const useStyles = makeStyles(theme => ({
  mainGrid: {
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
  title: 'Welcome to Motgomery Capital',
  description:
    "Small business loans quick, safe and easy.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Apply Now',
};

const featuredPosts = [
  {
    title: 'Get Funds',
    date: 'Apply Now',
    description:
      'Enter your details and apply in minutes.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Check your applications',
    date: 'Check',
    description:
      'We will email you when your application is reviewed. You can always check your applications here.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Our team is always there for you. Serving the Montgomery County since 2019, with the ethics and morals in line with the great values of America',
  archives: [
    { title: 'About', url: '/home/:about' },
    { title: 'How it Works', url: '/home/:howitworks' },
    { title: 'Funding Options', url: '/home/:fundingoptions' },
    { title: 'Blog', url: '/home/:blog' },
    { title: 'Faq', url: '/home/:faq' },
    { title: 'Reviews', url: '/home/:reviews' },
    { title: 'Values', url: '/home/:values' },
    { title: 'Privacy Policy', url: '/home/:privacypolicy' },
    { title: 'Terms of Use', url: '/home/:termsofuse' },
    { title: 'Contact', url: '/home/:contact' },
    { title: 'Mission Statement', url: '/home/:missionstatement' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog(props) {
  console.log(props.match.params.name)
  const classes = useStyles();
  // const [selectedDashboard, setSelectedDashboard] = React.useState(props.match.params.name)

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
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Your Details" tab={props.match.params.name} /> 
            {/* {props.selectedDashboard === "about" && <About />} */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}