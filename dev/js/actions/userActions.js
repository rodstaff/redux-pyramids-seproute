export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Anthony",
      age: 2033
    }
  };
}
export function setUserName() {
  return {
    type: "SET_USER_NAME",
    payload: name
  };
}
export function setUserAge() {
  return {
    type: "SET_USER_AGE",
    payload: age
  };
}
    