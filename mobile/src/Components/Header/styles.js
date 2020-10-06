import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    height: 180,
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    backgroundColor: '#A06D51',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  
  logo: {
    height: 90,
    width: 80,
    marginHorizontal: 10,
    marginVertical: 8
  },

  infoContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  portuense: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -5,
  },

  address: {
    marginTop: 4,
    fontSize: 12,
  },
});



