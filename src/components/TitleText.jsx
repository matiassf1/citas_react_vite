import { Pacientes } from "./Pacientes"

const TitleText = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:h-screen overflow-y-auto">

        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className=" font-semibold text-xl mt-5 mb-10 text-center">Administra tus {" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>



      { pacientes.map( paciente => (
        <Pacientes 
          key = {paciente.id}
          paciente = {paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />)
      )}


    </div>
  )
}

export default TitleText