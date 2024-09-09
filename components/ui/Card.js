import { View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    // sombra no android
    elevation: 4,
    // sombra no IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Card
