import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneAll from '@mui/icons-material/DoneAll';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { markSolved, markUnsolved } from '../actions'

export default function ProblemCard({ data }) {

  const dispatch = useDispatch()

  const markSolvedOrUnsolved = (id, solve) => () => {
    solve ? dispatch(markSolved({ id })) : dispatch(markUnsolved({ id }))
  }

  return (
    <Grid item>
      <Card sx={{ width: 320, maxHeight: 380 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Q {data.id}: {data.statement}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {data.remark ? `Remark: ${data.remark}` : null}
          </Typography>
          <Typography variant="button" color="text.primary">
            {data.tag} ({data.level})
          </Typography>
          <br />
          <Typography variant="overline" color="text.secondary">
            {data.companies ? data.companies : null}
          </Typography>
        </CardContent>
        <CardActions>

          {data.solved ?
            (<IconButton title='Mark as Unsolved' onClick={markSolvedOrUnsolved(data.id, false)}>
              <DoneAll />
            </IconButton>) :
            (<IconButton title='Mark as Solved' onClick={markSolvedOrUnsolved(data.id, true)}>
              <CheckCircleIcon />
            </IconButton>)}

          <IconButton href={data.url} aria-label="Solve" title='Solve' target="_blank">
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
