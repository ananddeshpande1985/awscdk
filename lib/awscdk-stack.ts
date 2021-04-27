import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
export class AwscdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

new s3.Bucket(this, 'bucket1',{
  bucketName: 'jshdsad9d8080',
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
});
    // The code that defines your stack goes here
  }
}
