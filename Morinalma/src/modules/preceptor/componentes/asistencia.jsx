import React, { useState } from "react";
import { StyleSheet } from 'react-native';

const Asistencia = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <button style={styles.backButton}>←</button>
        <div style={styles.headerBar}>
          <div style={styles.purpleBar}></div>
          <span style={styles.headerTitle}>1°3 - Asistencia</span>
        </div>
        <button style={styles.menuButton}>≡</button>
      </div>

      <div style={styles.content}>
        <h2 style={styles.title}>Planilla de Asistencia</h2>
        
        <select style={styles.select}>
          <option>Fecha</option>
        </select>

        <h3 style={styles.asistenciaTitle}>Asistencia</h3>
        
        <div style={styles.listContainer}>
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} style={styles.row}>
              <span style={styles.name}>Julio Menteniuk</span>
              <input type="checkbox" style={styles.checkbox} />
            </div>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button style={styles.cancelButton}>Cancelar</button>
          <button style={styles.guardarButton}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#F8F0FA',
    width: '100%',
  },
  headerBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: 1,
    marginLeft: '10px',
  },
  purpleBar: {
    width: '4px',
    height: '20px',
    backgroundColor: '#833D8E',
    borderRadius: '2px',
  },
  backButton: {
    border: 'none',
    background: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  menuButton: {
    border: 'none',
    background: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  headerTitle: {
    fontSize: '16px',
  },
  content: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  title: {
    color: '#833D8E',
    fontSize: '20px',
    margin: 0,
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  asistenciaTitle: {
    color: '#833D8E',
    fontSize: '18px',
    margin: 0,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flex: 1,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  name: {
    fontSize: '14px',
    color: '#000',
  },
  checkbox: {
    width: '18px',
    height: '18px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: 'auto',
  },
  cancelButton: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  guardarButton: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#833D8E',
    color: 'white',
    cursor: 'pointer',
  }
});

export default Asistencia;