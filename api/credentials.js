function getFromBase64(base64String) {
  return Buffer.from(base64String, "base64").toString("utf-8");
}

function getCredentials() {
  const email = getFromBase64("bnNhLnVzYS5jb3JlY29kZUBnbWFpbC5jb20=");
  const password = getFromBase64(
    "WW91SnVzdEhhY2tlZFRoZU5zYUFjY291bnRZb3VBcmVBd2Vzb21lIQ=="
  );

  return {
    email,
    password,
  };
}

module.exports = getCredentials;
