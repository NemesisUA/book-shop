import React from 'react';
import { Box, Container, AppBar } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >Footer
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer