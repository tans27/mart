export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "https://localhost:5000/api"
    : "somedeployurl";

export const LOCAL_STORAGE_TOKEN_NAME = 'hiphop4life'