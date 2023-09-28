import Veterinario from "../models/veterinarioModel.js";
import generarJWT from "../helpers/generarJWT.js";

const registrar = async (req, res) => {
  const { email } = req.body;

  // Prevenir usuarios duplicados.
  const existeUsuario = await Veterinario.findOne({ email });

  if (existeUsuario) {
    console.log(existeUsuario);
    const error = new Error("Usuario ya registrado :(");
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Guardar Vet
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    //El await detiene la ejecución hasta que se guarde esa línea. Para que la siguiente no se ejecute sin que la info haya sido guardada.

    res.json({
      msg: veterinarioGuardado,
    });
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({ token });

  if (!usuarioConfirmar) {
    const error = new Error("Token no válido");
    return res.status(400).json({ msg: error.message });
  }

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;

    await usuarioConfirmar.save();

    res.json({ msg: "Usuario confirmado correctamente." });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Veterinario.findOne({ email });

  //Comprobar si el usuario existe
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(403).json({ msg: error.message });
  }

  //Comprobar si el correo ya fue confirmado.
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  //Autenticar al usuario
  if (await usuario.comprobarPassword(password)) {
    console.log(usuario);
    res.json({ token: generarJWT(usuario.id) });
  } else {
    const error = new Error("Tu password no es correcta");
    return res.status(403).json({ msg: error.message });
  }

  console.log(req.body);
};

export { registrar, perfil, confirmar, autenticar };
