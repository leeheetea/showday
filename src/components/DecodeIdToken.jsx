export function decodeIdToken(idToken) {
  const payloadBase64Url = idToken.split('.')[1];
  const payloadBase64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payloadString = atob(payloadBase64);
  
  // return JSON.parse(payloadString);
  console.log(JSON.parse(payloadString));
}
