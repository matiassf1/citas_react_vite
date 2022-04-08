import { Pacientes } from "./Pacientes"
import TitleText from "./TitleText"
import SecondTitleText from "./SecondTitleText"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">

      {pacientes && pacientes.length ? <TitleText 
                                                  pacientes={pacientes}
                                                  setPaciente={setPaciente}
                                                  eliminarPaciente={eliminarPaciente}/> :  <SecondTitleText />}




    </div>
  )
}

export default ListadoPacientes