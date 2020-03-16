import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useAxios from "axios-hooks";
import Axios from "axios";
import ReactHtmlParser from 'react-html-parser'; 
const jwtDecode = require('jwt-decode');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
  },
});

export default function Types(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {!props.catagory ? null : (
      <Typography variant="h4" gutterBottom>
        {props.catagory}
      </Typography>
    )}
      {!props.subtitle ? null : (
      <Typography variant="subtitle2" gutterBottom>
{props.subtitle}      </Typography>
      )}
      {!props.body1 ? null : (
      <Typography variant="body1" gutterBottom>
        {props.body1}
      </Typography>
      )}
      {!props.body2 ? null : (
      <Typography variant="body1" gutterBottom>
        {props.body2}
      </Typography>
      )}
      {/* {!props.link ? null : (
      <Typography variant="button" display="block" gutterBottom>
        {props.link}
      </Typography>
      )} */}
      {/* <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography> */}
      {/* <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography> */}
    </div>
  );
}