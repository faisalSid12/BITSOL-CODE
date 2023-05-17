import * as AWS from "aws-sdk";

import awsConfig from "./awsConfig";

export default () => {
  AWS.config.update({
    region: awsConfig.region,
    credentials: new AWS.Credentials({
      accessKeyId: awsConfig.accessKeyId,
      secretAccessKey: awsConfig.secretAccessKey
    })
  });
};
