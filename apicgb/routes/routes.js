const router = require("express").Router();
const DoctorController = require("../controllers/DoctorController");
const SpecialityController = require("../controllers/SpecialityController");


//Doctor
router.get("/doctor",DoctorController.getDoctors);
router.get("/doctor/:crm",DoctorController.getDoctorByCrm);

router.post("/doctor",DoctorController.create);
router.delete("/doctor/:id",DoctorController.delete);
router.put("/doctor/:id",DoctorController.update);


//Specialities
router.get("/speciality",SpecialityController.getSpecialities);
router.get("/speciality/:id",SpecialityController.getSpecialityById);


// Especialidades do doutor
router.get("/doctorSpeciality/:id",SpecialityController.getDoctorSpecialities);
router.post("/doctorSpeciality",SpecialityController.createDoctorSpeciality);
router.delete("/doctorSpeciality/:doctor_id/:speciality_id",SpecialityController.deleteDoctorSpecialities);


//Home
router.get("/",(req,res)=>{
    res.json({
        routes:[
            {
                method:"get",
                route:"/doctor",
                description:"Recupera todos os médicos"
            },
            {
                method:"get",
                route:"/doctor/:crm",
                description:"Recupera o médico com o crm passado como parâmetro"
            },
            {
                method: "post",
                route:"/doctor",
                description:"Cadastra um médico"
            },
            {
                method: "put",
                route:"/doctor/id",
                description:"Atualiza os dados do médico com o id igual ao passado pelo parâmetro"
            },
            {
                method: "delete",
                route:"/doctor/:id",
                description:"Deleta o médico com o id passado como parâmetro"
            },
            {
                method: "delete",
                route:"/doctor/:id",
                description:"Deleta o médico com o id passado como parâmetro"
            },
            {
                method: "get",
                route:"/speciality",
                description:"Recupera todas as especialidades"
            },
            {
                method: "get",
                route:"/speciality/:id",
                description:"Recupera a especialidade com o id passado como parâmetro"
            },
            {
                method: "get",
                route:"/doctorSpeciality",
                description:"Recupera as especialidades do médico"
            },
            {
                method: "post",
                route:"/doctorSpeciality",
                description:"Adiciona uma nova especialidade ao médico"
            },
            {
                method: "Delete",
                route:"/doctorSpeciality/:doctor_id/:speciality_id",
                description:"Deleta uma especialidade do médico"
            },
        ]
    });
});


module.exports = router;