import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Image source={require('./assets/menu.png')} style={styles.menuIcon} />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/BanCoppel-Logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const ContenidoCentral = () => {
  return (
    <View style={styles.contenidoCentral}>
      <Text style={styles.textoCentral}>¡Buenas noches!</Text>
      <Text>LUIS MARIO</Text>
      <Image source={require('./assets/huella.png')} style={styles.iconoHuella} />
      <Text style={styles.mensajeHuella}>Ingresa con tu contraseña</Text>
    </View>
  );
};

const PieDePagina = () => {
  return (
    <View style={styles.pieDePagina}>
      <View style={styles.iconoPieDePaginaContainer}>
        <Image source={require('./assets/tarjeta.png')} style={styles.iconoPieDePagina} />
        <Text style={styles.textoPie}>Compras por internet</Text>
      </View>
      <View style={styles.iconoPieDePaginaContainer}>
        <Image source={require('./assets/codi.png')} style={styles.iconoPieDePagina} />
        <Text style={styles.textoPie}>CoDi°</Text>
      </View>
      <View style={styles.iconoPieDePaginaContainer}>
        <Image source={require('./assets/token.png')} style={styles.iconoPieDePagina} />
        <Text style={styles.textoPie}>Token Digital</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F3F4',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 80,
    paddingHorizontal: 20,
    width: '100%',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 250,
    height: 45,
  },
  contenidoCentral: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCentral: {
    fontSize: 30,
    textAlign: 'center',
    color: 'navy',
  },
  iconoHuella: {
    marginTop: 50,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  mensajeHuella: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    color: 'navy',
  },
  pieDePagina: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F0F3F4',
    paddingVertical: 30,
  },
  iconoPieDePaginaContainer: {
    alignItems: 'center',
  },
  iconoPieDePagina: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textoPie: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Encabezado />
      <ContenidoCentral />
      <PieDePagina />
    </View>
  );
}
