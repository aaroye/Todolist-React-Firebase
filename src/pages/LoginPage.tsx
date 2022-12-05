import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../firebase/utils";
const LoginPage = () => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Login
        </Typography>
        <Typography variant="body2">
          Login with Google account to continue...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={signInWithGoogle}
          sx={{ textTransform: "none" }}
        >
          <GoogleIcon />
          <Typography variant="body2" component="div">
            Login with Google
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginPage;
