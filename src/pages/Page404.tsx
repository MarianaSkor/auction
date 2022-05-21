import { Box, Typography, Link } from "@mui/material";
import { ROUTES } from "src/constants/routes";

export const Page404 = () => (
  <Box sx={{ m: 3, textAlign: 'center' }} data-testid="page-404">
    <Typography variant="h1" sx={{ mb: 2 }}>
      404
    </Typography>
    <Typography variant="h4" sx={{ mb: 2 }}>
      SORRY THIS PAGE ISN'T AVAILIBLE.
    </Typography>
    <Typography variant="h6" sx={{ mb: 2 }}>
      The link you followed may be broken or the page may have been removed.
    </Typography>
    <Link href={ROUTES.HOME}>Go back to home page</Link>
  </Box>
)