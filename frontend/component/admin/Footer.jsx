// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'end', p: '24px 16px 0px', mt: 'auto' }}>
      {/* <Typography variant="caption">
        &copy; All rights reserved{' '}
        <Link href="https://codedthemes.com/" target="_blank" underline="hover">
          CodedThemes
        </Link>
      </Typography> */}
      <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="subtitle2" color="secondary">
         © 2025 {' '}
          <Link href="https://advancedentalexport.com/" target="_blank" underline="hover" sx={{color:"rgba(0, 102, 153, 1)"}}>
            Advance Dental Export
          </Link>
          . All Rights Reserved
        </Typography>
      </Stack>
    </Stack>
  );
}
