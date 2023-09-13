import Veterinario from "../models/veterinarioModel.js";

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

const confirmar = (req, res) => {
  console.log(req.params.token); //params se usa para leer la url.
  res.json({ msg: "Confirmando cuenta..." });
};

export { registrar, perfil, confirmar };
