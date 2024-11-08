import {useState, useEffect} from 'react';
import {db} from '../utils/firebase';
import firestore from '@react-native-firebase/firestore';

const useAdministradores = administradores => {

    const useAdministrador = administradores => {
        const [data, setData] = useState([]);
      
        useEffect(() => {
          const unsubscribe = db.collection(administradores).onSnapshot(snapshot => {
            const items = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setData(items);
          });
      
          return () => unsubscribe();
        }, [administradores]);
      
        return data;
      };
      
    const createAdministrador = administradores =>{
        firestore().collection('adminisradores').add({
    
            name: 'John Doe',   //llamando a la propiedad voy trayendo las cosas de los formularios como input
            
            age: 25,
            
            }).then(() => {
            
            console.log('Usuario agregado!');
            
            });
    }
}




export default useAdministradores;
