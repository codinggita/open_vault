import React from 'react'
import Stat from './Stat'
import { Box, Link } from '@mui/material'

import Hero from './Hero'

function Home() {
  return (
    <Box className="Home" sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <Hero />
      <Stat />
    </Box>
  )
}

export default Home
