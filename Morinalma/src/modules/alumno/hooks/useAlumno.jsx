import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
//update insert

const useAlumnoInsert = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState(""); 
  const [tutor, setTutor] = useState("");
  cont [habilitar, setHabilitar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
      nombre,
      apellido,
      email,
      telefono,
      dni,
      tutor,
      habilitar,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    //update en vez de delete y habilitar cambia a cero 

    try {
      await firebase.firestore().collection("alumnos").add(nuevoAlumno);
      alert("Alumno registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
      setDni("");
      setTutor("");
      setHabilitar("1");
    } catch (error) {
      console.error("Error al registrar al alumno: ", error);
    }
  };}

const useAlumnoDelete = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState(""); 
  const [tutor, setTutor] = useState("");
  cont [habilitar, setHabilitar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
      nombre,
      apellido,
      email,
      telefono,
      dni,
      tutor,
      habilitar,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    //update en vez de delete y habilitar cambia a cero 

    try {
      await firebase.firestore().collection("alumnos").update(nuevoAlumno);
      alert("Alumno registrado exitosamente");
      setNombre("");
      setApellido("");
      setEmail("");
      setTelefono("");
      setDni("");
      setTutor("");
      setHabilitar("1");
    } catch (error) {
      console.error("Error al registrar al alumno: ", error);
    }
  };}