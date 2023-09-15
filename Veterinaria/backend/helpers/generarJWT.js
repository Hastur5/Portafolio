import jwt from "jsonwebtoken";

const generarJWT = () => {
  return jwt.sign({ nombre: "Mau" }, process.env.JWT_SECRET,{
    expiresIn: "30d"
  });
};

export default generarJWT;
