import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AvatarUser from "components/AvatarUser/AvatarUser";
import { CommentsProp } from "./types";

const Comments: React.FC<CommentsProp> = ({
  name,
  date,
  title,
  text,
}) => {
  return (
  
    <Card sx={{ maxWidth: 950 }}>
      <CardHeader
        
        avatar={
          <AvatarUser size="Small"></AvatarUser>
        }
        titleTypographyProps={{ variant: 'h6', fontSize: 20, mr: 1 }}
        title={name}
        sx={{ pb: 0, pt: 1 }}
        
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" fontWeight="bold" style={{  fontSize: '22px' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={2} component="div" sx={{  fontSize: '20px', mt: '-10px' }}>
          {date}
        </Typography>
        <Typography variant="body2" style={{ fontSize: '18px' }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Comments;