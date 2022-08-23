import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { hover } from '@testing-library/user-event/dist/hover';
import { grey } from '@mui/material/colors';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Cards.css"
import { ClassNames } from '@emotion/react';
export default function ActionAreaCard(props) {
  return (
    <Card className='carda' sx={{ width:180 ,backgroundColor:'GrayText',height:200,hoverbackgroundColor:grey}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.icon} <h4> {props.head}</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <b>  {  props.text } </b>
                          <h4><b>join now</b></h4> < ArrowRightAltIcon className='arrow'/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
