import { Typography, Container, Stack } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Trade Aware is a platform designed to help users stay informed about market trends and trading strategies. Our mission is to provide timely and accurate information to help traders make better decisions.
        </Typography>
        <Typography variant="body1">
          Our team is dedicated to offering valuable insights and analytics, ensuring our users have the tools they need to succeed in the world of trading.
        </Typography>
      </Stack>
    </Container>
  );
};

export default About;
