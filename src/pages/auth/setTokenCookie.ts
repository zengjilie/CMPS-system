import { v4 as uuid } from "uuid";

const setTokenCookie = () => {
  //Update session table, sessionId, studentId
  const sessionId = uuid();

  // Set cookie
  fetch("/api/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: sessionId }),
  });
};

export default setTokenCookie;
