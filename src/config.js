const dev = {
  STRIPE_KEY: "pk_test_VJFsQHu2KmLhGE131Y2PWMDR00tnFwDru0",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-d12m847d8jo1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://cpd5z6g7bl.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_4WAG84YO5",
    APP_CLIENT_ID: "42lra1gfefs2vb67t9l61f7kui",
    IDENTITY_POOL_ID: "us-east-1:bafb5fca-41e1-4da5-b6df-d2178d02243f"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_VJFsQHu2KmLhGE131Y2PWMDR00tnFwDru0",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-3nikpmo82gdu"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://t3levqlfkb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PPzFqeG18",
    APP_CLIENT_ID: "6e1trfh5u7ptg1mkef7om6guk6",
    IDENTITY_POOL_ID: "us-east-1:ee72df4c-1f30-4c9d-a745-6b0c196de62d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
