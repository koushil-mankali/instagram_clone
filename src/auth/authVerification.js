let authVerification = (props) => {
  let { email, name, password } = props;

  if (email === "" || name === "" || password === "") {
    return {
      status: "fail",
      message: "Please fill all the fields with proper details!",
    };
  } else if (password.length < 7) {
    return {
      status: "fail",
      message: "Passowrd length should be minimum 7.",
    };
  } else if (password.match("/^w/")) {
    return {
      status: "fail",
      message:
        "Password should contain atleast 1 capital and 1 small letter also digits.",
    };
  } else {
    return {
      status: "success",
    };
  }
};

export default authVerification;
