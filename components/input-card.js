import * as React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import styles from '../styles/card.module.css'
import { makeStyles } from "@material-ui/core/styles";

const timestamp = Date.now

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));


export default function Comment(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);

  const { onChange, type} = props;
  const classes = useStyles();

  };
  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
       
        }
        title="What's on your mind?"
        subheader={timestamp}
      />
      <CardContent>
        <TextField fullWidth 
        label="Type anything" 
        id="fullWidth" 
        classes={{notchedOutline:classes.input}} className={classes.textField} 
        InputProps={{
          classes:{notchedOutline:classes.noBorder}
        }}/>
      </CardContent> 
      {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
     
    </Card>
  );
}
