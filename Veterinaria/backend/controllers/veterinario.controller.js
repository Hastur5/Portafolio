import Veterinario from "../models/veterinarioModel.js";

const registrar = async (req, res) => {
  // const { nombre, email, password } = req.body;
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

export { registrar, perfil };
