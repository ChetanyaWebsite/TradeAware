import { Typography, Container, Stack, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Stack spacing={3}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1">
          If you have any questions or feedback, feel free to reach out to us. We'd love to hear from you!
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />

          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;
