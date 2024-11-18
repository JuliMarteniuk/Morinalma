import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomePreceptor = () => {
  const cursos = [
    {
      grado: "1°3",
      turno: "Turno Mañana"
    },
    {
      grado: "5°3",
      turno: "Turno Vespertino"
    },
    {
      grado: "3°3",
      turno: "Turno Tarde"
    },
    {
      grado: "6°3",
      turno: "Turno Vespertino"
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="menu" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cursos.map((curso, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={styles.purpleBorder} />
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {`${curso.grado} - ${curso.turno}`}
                </Text>
                <Text style={styles.subtitle}>
                  Ver información del curso
                </Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  card: {
    width: '100%',
    height: 80,
    backgroundColor: '#f6edfa',
    borderRadius: 12,
    marginBottom: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#833D8E',
    borderRadius: 12,
    borderLeftWidth: 0,
  },
  textContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 24,
    color: '#833D8E',
    marginLeft: 10,
  },
  purpleBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 12,
    backgroundColor: '#833D8E',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  }
});

export default HomePreceptor;
