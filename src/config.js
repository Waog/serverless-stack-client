export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_VJFsQHu2KmLhGE131Y2PWMDR00tnFwDru0",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "waog-serverless-stack-tutorial"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://3wvyqbbntg.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_kbYKKeok7",
    APP_CLIENT_ID: "t7tdcakv6cop5p4n11bsjcb9o",
    IDENTITY_POOL_ID: "us-east-1:2d919867-9e36-40df-a7b8-69d301ec51e2"
  }
};
