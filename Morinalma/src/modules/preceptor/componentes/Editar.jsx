import React, { useState } from "react";
import { StyleSheet } from 'react-native';

const Editar = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <button style={styles.backButton}>←</button>
          <div style={styles.purpleBar}></div>
          <span style={styles.headerTitle}>1°3 - Alumnos</span>
        </div>
        <button style={styles.menuButton}>≡</button>
      </div>

      <div style={styles.contentWrapper}>
        <h2 style={styles.title}>Editar Alumno</h2>
        
        <div style={styles.cardAndButtons}>
          <div style={styles.card}>
            <h3 style={styles.subtitle}>Alumnos</h3>
            
            <div style={styles.alumnosList}>
              {Array.from({ length: 11 }, (_, i) => (
                <div key={i} style={styles.alumnoRow}>
                  <span style={styles.alumnoName}>Julio Menteniuk</span>
                  <div style={styles.editIconWrapper}>
                    <button style={styles.editButton}>✎</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.buttonContainer}>
            <button style={styles.cancelButton}>Cancelar</button>
            <button style={styles.guardarButton}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#F8F0FA',
    borderBottom: '1px solid #E0E0E0',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
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
  mainContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px 20px',
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#833D8E',
    fontSize: '24px',
    margin: 0,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  alumnosList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  alumnoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  alumnoName: {
    fontSize: '16px',
  },
  editButton: {
    border: 'none',
    background: 'none',
    fontSize: '18px',
    color: '#833D8E',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginTop: '20px',
  },
  cancelButton: {
    flex: 1,
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  guardarButton: {
    flex: 1,
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#833D8E',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  editIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#833D8E',
    cursor: 'pointer',
  },
});

export default Editar;