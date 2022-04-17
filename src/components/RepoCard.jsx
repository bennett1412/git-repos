import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/card.css';
const RepoCard = ({ name, stars, forks, language, description, owner, repoUrl }) => {
  return <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {owner}
      </Typography>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Stars:{stars}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Forks:{forks}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Language:{language}
      </Typography>
      <Typography variant="body2">
        {description}

      </Typography>
    </CardContent>
    <CardActions>
      <a className='repo-link' target='_blank' href={repoUrl}>
        <Button size="small">Go To Repo</Button>
      </a>
    </CardActions>
  </>
}

export default RepoCard