# deploy-staging.sh
#! /bin/bash

SHA1=$1

# Deploy image to Docker Hub
docker push <DOCKER_USER>/<PROJECT_NAME>_web:$SHA1
docker push <DOCKER_USER>/<PROJECT_NAME>_node:$SHA1

# Create new Elastic Beanstalk version
EB_BUCKET=<PROJECT_NAME>
DOCKERRUN_FILE=Dockerrun-$SHA1.aws.json
sed "s/<TAG>/$SHA1/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE
aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/$DOCKERRUN_FILE
aws elasticbeanstalk create-application-version --application-name <PROJECT_NAME> \
  --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$DOCKERRUN_FILE

# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name <PROJECT_NAME>-web \
    --version-label $SHA1
