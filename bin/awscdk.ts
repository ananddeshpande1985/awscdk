#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { AwscdkStack } from '../lib/awscdk-stack';
import { ECSStack } from '../lib/ecsstack';

const app = new cdk.App();
new AwscdkStack(app, 's3stack');
new ECSStack(app, 'ecsstack');
