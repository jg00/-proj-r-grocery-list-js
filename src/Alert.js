import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

/*
Note:
setTimeout() is invoked everytime the component is rendered
[list] dependency added so that everytime the list changes we get a new setTimeout of three seconds
When something changes on the list, we clear out the timeout and then we set up a new one.
*/
