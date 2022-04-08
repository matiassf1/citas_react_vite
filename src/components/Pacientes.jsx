import swal from "sweetalert";

export const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
      
      swal({
        title: "Estas seguro?",
        text: "Una vez eliminado no podras recuperar a este paciente",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("El paciente fue eliminado correctamente", {
            icon: "success",
          })
          eliminarPaciente(id);
        } else {
          swal("El paciente no fue eliminado");
        }
      });
    }


  return (
    
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl mx-5 my-8">
    <p className="font-bold text-gray-700 uppercase mb-2">Nombre: {' '}
      <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold text-gray-700 uppercase mb-2">Dueño: {' '}
      <span className="font-normal normal-case">{propietario}</span>
    </p>
    <p className="font-bold text-gray-700 uppercase mb-2">Email: {' '}
      <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold text-gray-700 uppercase mb-2">Alta: {' '}
      <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold text-gray-700 uppercase mb-2">Sintomas: {' '}
      <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-between md:justify-center lg:justify-between mt-10 mb-0">
      <button 
      type="button"
      className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold uppercase rounded-md md:w-1/3 md:mr-4"
      onClick={() => setPaciente(paciente)}>
        Editar
      </button>
      <button 
      type="button"
      className="py-2 px-3 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold uppercase rounded-md md:w-1/3"
      onClick={handleEliminar}>
        Eliminar
      </button>
    </div>

  </div>
  )
}
