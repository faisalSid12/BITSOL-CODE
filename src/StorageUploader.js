import React from "react";
import { Box, Button, Text } from "grommet";
import * as AWS from "aws-sdk";

import awsConfig from "./awsConfig";

const BUCKET_NAME = awsConfig.bucketName;
const FOLDER_NAME = awsConfig.folderName;

/* Upload images using `aws-sdk`.
 */
const StorageUploader = () => {
  const [imageFile, setImageFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [loadingProgress, setLoadingProgress] = React.useState(0);

  const uploadImage = (img, fileName) => {
    
    let bucket = new AWS.S3({
      params: { Bucket: BUCKET_NAME }
    });

    let params = {
      Key: fileName,
      ContentType: img.type,
      Body: img
    };

    setLoading(true);

    bucket
      .upload(params)
      .on("httpUploadProgress", evt => {
        let progress = parseInt((evt.loaded * 100) / evt.total);
        setLoadingProgress(progress);
      })
      .send(err => {
        err
          ? console.log(`File Upload Error`, err)
          : console.log(`File Upload Successfuly`);

        setLoading(false);
        setLoadingProgress(0);
      });
  };

  let content = loading ? (
    <Box fill align="center" justify="center">
      <Text weight="bold">{`Uploading (${loadingProgress}%)...`}</Text>
    </Box>
  ) : (
    <>
      <Box margin={{ vertical: "16px" }}>
        <input
          type="file"
          onChange={event => {
            setImageFile(event.target.files[0]);
          }}
        />
      </Box>

      <Box margin={{ vertical: "16px" }}>
        <Button
          primary
          label="Upload"
          style={{ width: "120px", height: "54px" }}
          disabled={imageFile === null}
          onClick={() => {
            imageFile &&
              uploadImage(imageFile, `${FOLDER_NAME}/${imageFile.name}`);
          }}
        />
      </Box>
    </>
  );

  return (
    <Box fill background="#3F3F3F" align="center" justify="center">
      {content}
    </Box>
  );
};

export default StorageUploader;
