const urlApi = process.env.REACT_APP_URL || "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    loginPaciente:urlApi +"api/pacientes/login",  
    datosPacientes:urlApi +"api/pacientes/buscarpaciente",
    registrarPaciente:urlApi +"api/pacientes/registration",
    listadoPacientes:urlApi +"api/pacientes/",
    cambiarPass:urlApi +"api/pacientes/resetpassword",
    bajaPaciente:urlApi +"api/pacientes/bajas/",
    deletePaciente:urlApi +"/api/pacientes/",
    updateAntecedentesPaciente:urlApi +"api/pacientes/antecedentesPaciente",
    createConsultaPaciente:urlApi +"api/pacientes/nuevaconsulta",
    loginUsers:urlApi +"api/users/login",   
    datosUsers:urlApi +"api/users/buscaruser",
    registrarPersonal:urlApi +"api/users/registration",
    listadoUsers:urlApi +"api/pacientes/",
    cambiarPassUSers:urlApi +"api/users/resetpassword",


}

export default urlWebServices;