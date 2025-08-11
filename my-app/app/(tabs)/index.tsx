import {View , Text , StyleSheet} from 'react-native'
const app = () => {
  return(
    <View style={style.container}>
      <Text style={style.text}>Saad Amin</Text>
    </View>
  )
}
export default app

const style = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 41,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})