import React from 'react'
import { useSelector } from 'react-redux';
import { ProblemCard } from '../../components';
import Grid from '@mui/material/Grid';

const Problems = () => {
  const problems = useSelector(state => state.problems);

  return (
    <Grid container spacing={2}>
      {problems.map((data, i) => <ProblemCard key={i} data={data} />)}
    </Grid>
  )
}

export default Problems