import { Amplify } from "aws-amplify";

export const configureAmplify = () => {
  Amplify.configure({
    Auth: {
      region: process.env.NEXT_PUBLIC_REGION,
      identityPoolRegion: process.env.NEXT_PUBLIC_IDENTITY_POOL_REGION,
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID, // Add the clientId property
    },
  });
};
// You can get the current config object
// const currentConfig = Auth.configure();
