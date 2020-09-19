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
router.get("/specialities",SpecialityController.getSpecialities);
router.get("/speciality/:id",SpecialityController.getSpecialityById);


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
                route:"/specialities",
                description:"Recupera todas as especialidades"
            },
            {
                method: "get",
                route:"/speciality/:id",
                description:"Recupera a especialidade com o id passado como parâmetro"
            },
        ]
    });
});


module.exports = router;