import { Amplify } from "aws-amplify";

export const configureAmplify = () => {
  debugger;
  Amplify.configure({
    Auth: {
      region: process.env.REGION,
      identityPoolRegion: process.env.IDENTITY_POOL_REGION,
      userPoolId: process.env.USER_POOL_ID,
    },
  });
};
// You can get the current config object
// const currentConfig = Auth.configure();
