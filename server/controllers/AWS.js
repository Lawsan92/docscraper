const { S3Client, GetObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const AWS = require('aws-sdk');

// retrieve AWS IAM credentials
const credentials = AWS.config.loadFromPath('./config.json');
const config = (credentials);

// instantiate new S3 Client
const s3Client = new S3Client(config);


// -GET image urls from S3 bucket
const getS3List = async () => {
  const command = new ListObjectsV2Command({
    Bucket:'lawstextfilestorage'
  });
  const response = await s3Client.send(command);
  return response;
}

const getS3Object = async () => {
  const command = new GetObjectCommand({
    Bucket: "lawstextfilestorage",
    Key: "file1"
  });

  try {
    const response = await s3Client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    // console.log('object:', str, typeof str);
    return str;
  } catch (err) {
    console.error(err);
  }
};


module.exports = { getS3List, getS3Object }


