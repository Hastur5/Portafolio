const checkAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("sí tiene bearer");
  } else {
    const error = new Error("No hubo token o Bearer");
    return res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
