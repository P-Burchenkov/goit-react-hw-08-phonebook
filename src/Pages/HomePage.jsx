import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <>
      <Typography variant="h1" component="h1">
        PhoneBook
      </Typography>
      <Typography variant="h5">
        Wellcome to application for storing phonenumbers!!!{' '}
      </Typography>
      <Typography variant="h6">
        This is my first React application! For developing this application I
        used next technologies: React, Redux,Redux-persist, Formic and Yup,
        Material UI, React-Router-Dom. This application isn't production app, I
        create it for demonstrated of my skills!
      </Typography>
    </>
  );
}
