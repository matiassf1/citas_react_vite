import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes , setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre]           = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail]             = useState('');
  const [fecha, setFecha]             = useState('');
  const [sintomas, setSintomas]       = useState('');

  const [error, setError]             = useState(false);

  useEffect(() => {
    if ( Object.keys(paciente).length > 0 ) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    }else{

    }

  }, [paciente])

  useEffect(() => {
    console.log('Algo cambio');
  },[Formulario])
  


  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      // Validacion del Formulario

      if ([nombre, propietario, email, fecha, sintomas].includes('')) {
        console.log('Hay al menos un campo vacio');
        
        setError(true);
        return;
      }
      setError(false);

      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas   
      }

      if (paciente.id) {
          // Editando el registro
        objetoPaciente.id = paciente.id;
        console.log(objetoPaciente);
        console.log(paciente);

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
          paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})
      }else{
          // Nuevo registro
        objetoPaciente.id = generarID();
        setPacientes([...pacientes, objetoPaciente]);
      }

     

      // Reiniciar Formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
  }




  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center ">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center font-semibold">Añade Pacientes y {" "} 
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-10 mx-5">
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">

          <label htmlFor="nombreMascota" 
          className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

          <input 
          type="text" 
          id="nombreMascota" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          placeholder="Nombre de la Mascota"
          value = {nombre}
          onChange = {(e) => setNombre(e.target.value)} />

        </div>

        <div className="mb-5">

          <label htmlFor="nombreDueño" 
          className="block text-gray-700 uppercase font-bold">Nombre Dueño</label>

          <input 
          type="text" 
          id="nombreDueño" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          placeholder="Nombre del Dueño"
          value = {propietario}
          onChange = {(e) => setPropietario(e.target.value)} />

          </div>


          <div className="mb-5">

          <label htmlFor="email" 
          className="block text-gray-700 uppercase font-bold">Email</label>

          <input 
          type="email" 
          id="email" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          placeholder="Email Contacto Dueño" 
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}/>

          </div>

          <div className="mb-5">

          <label htmlFor="alta" 
          className="block text-gray-700 uppercase font-bold">Alta</label>

          <input 
          type="date" 
          id="alta" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          value = {fecha}
          onChange = {(e) => setFecha(e.target.value)}/>

          </div>

          <div className="mb-5">

          <label htmlFor="sintomas" 
          className="block text-gray-700 uppercase font-bold">Sintomas</label>

          <textarea 
          name="sintomasMascota" 
          id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" 
          placeholder="Describe los sintomas" 
          value = {sintomas}
          onChange = {(e) => setSintomas(e.target.value)} />

          </div>

          <input type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md" 
          value={ paciente.id ? 'Editar paciente':'Agregar paciente'}
          />

      </form>
    </div>
  )
}

export default Formulario;
