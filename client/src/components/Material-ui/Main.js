import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Resources from '../Features/Resources'


// import Markdown from './Markdown';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const Main = props => {
  const classes = useStyles();
  const { tab, title } = props;
  // const [{ data: mydata, loading }, runmainfunc] = useAxios({
  //   url: "/api/userbooks/" + jwtDecode(accessString).id,
  //   headers: { Authorization: `JWT ${accessString}` }
  // });
  // const [selectedDashboard, setSelectedDashboard] = React.useState(props.selectedDashboard)
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
{tab === ":about" && 
<Resources
catagory={'about'}
 />}
      {/* {posts.map(post => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
export default Main;