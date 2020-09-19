CREATE DATABASE GCB;
USE GCB;

CREATE TABLE doctor(
    id INT(5) NOT NULL AUTO_INCREMENT,
    name VARCHAR(35),
    crm VARCHAR(15) UNIQUE,
    phone VARCHAR(12),
    state VARCHAR(2),
    city VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE speciality(
    id INT(2) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    PRIMARY KEY(id)
);

CREATE TABLE doctorsSpeciality(
    id INT(1) NOT NULL AUTO_INCREMENT,
    doctor_id INT(5),
    speciality_id INT(1),
    PRIMARY KEY(id),
    FOREIGN KEY(doctor_id) REFERENCES doctor(id),
    FOREIGN KEY(speciality_id) REFERENCES speciality(id)
);

INSERT INTO speciality VALUES (null,"ALERGOLOGIA");
INSERT INTO speciality VALUES (null,"ANGIOLOGIA");
INSERT INTO speciality VALUES (null,"BUCO MAXILO");
INSERT INTO speciality VALUES (null,"CARDIOLOGIA CLÍNICA");
INSERT INTO speciality VALUES (null,"CARDIOLOGIA INFANTIL");
INSERT INTO speciality VALUES (null,"CIRURGIA CABEÇA E PESCOÇO");
INSERT INTO speciality VALUES (null,"CIRURGIA CABEÇA E PESCOÇO");
INSERT INTO speciality VALUES (null,"CIRURGIA DE TORAX");
INSERT INTO speciality VALUES (null,"CIRURGIA GERAL");
INSERT INTO speciality VALUES (null,"CIRURGIA PEDIÁTRICA");
INSERT INTO speciality VALUES (null,"CIRURGIA PLÁSTICA");
INSERT INTO speciality VALUES (null,"CIRURGIA TORÁCIC");
INSERT INTO speciality VALUES (null,"CIRURGIA VASCULAR");
INSERT INTO speciality VALUES (null,"CLÍNICA MÉDICA");
