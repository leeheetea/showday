import { Box, Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLogin = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      axios
        .post("http://localhost:3000/", { code })
        .then(({ data }) => {
          console.log(data);
        });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <Box>
      <Box>
        <Button onClick={googleSocialLogin}>Google Button</Button>
      </Box>
    </Box>
  );
};

export default GoogleLogin;