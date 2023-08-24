import { useEffect, useState } from "react"
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"

const App = () => {
  const [user, setUser] = useState('x')
  let defaultValue = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
  }
  const [data, setData] = useState(defaultValue)

  const contentH = (e, i) => {
    if (data[i] === "") {
      setData((prevData) => ({
        ...prevData,
        [i]: e,
      }))
      if (user === 'x') {
        setUser('o')
      } else {
        setUser('x')
      }
    }
  }
  useEffect(() => {
    if (data.one === 'x' && data.two === 'x' && data.three === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.four === 'x' && data.five === 'x' && data.six === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.seven === 'x' && data.eight === 'x' && data.nine === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.one === 'x' && data.four === 'x' && data.seven === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.two === 'x' && data.five === 'x' && data.eight === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.three === 'x' && data.six === 'x' && data.nine === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.one === 'o' && data.two === 'o' && data.three === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.four === 'o' && data.five === 'o' && data.six === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.seven === 'o' && data.eight === 'o' && data.nine === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.one === 'o' && data.four === 'o' && data.seven === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.two === 'o' && data.five === 'o' && data.eight === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.three === 'o' && data.six === 'o' && data.nine === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.one === 'o' && data.five === 'o' && data.nine === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.three === 'o' && data.five === 'o' && data.seven === 'o') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('o is the winner')
    }
    else if (data.one === 'x' && data.five === 'x' && data.nine === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.three === 'x' && data.five === 'x' && data.seven === 'x') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('x is the winner')
    }
    else if (data.one !== '' && data.two !== '' && data.three !== '' && data.four !== '' && data.five !== '' && data.six !== '' && data.seven !== '' && data.eight !== '' && data.nine !== '') {
      setData(defaultValue)
      setUser('x')
      Alert.alert('Draw Try Again')
    }
    else {
    }
  }, [data])
  return (
    <ImageBackground style={style.bg} source={require('./src/images/adeel.jpg')}>
      <ScrollView style={style.parent}>
        <Text style={style.headingText}>Rana Adeel King</Text>
        <View style={style.game}>
          <View style={style.boxP}>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'one')}>{data.one}</Text></View>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'two')}>{data.two}</Text></View>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'three')}>{data.three}</Text></View>
          </View>
          <View style={style.boxP}>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'four')}>{data.four}</Text></View>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'five')}>{data.five}</Text></View>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'six')}>{data.six}</Text></View>
          </View>
          <View style={style.boxP}>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'seven')}>{data.seven}</Text></View>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'eight')}>{data.eight}</Text></View>
            <View style={style.box}><Text style={style.gameContent} onPress={() => contentH(user, 'nine')}>{data.nine}</Text></View>
          </View>
        </View>
        <View style={style.gameSite}>
          <View style={[style.x, user === 'x' ? { backgroundColor: 'blue' } : { backgroundColor: 'gray' }]}>
            <Text style={style.xtext}>X</Text>
          </View>
          <View style={[style.x, user !== 'x' ? { backgroundColor: 'blue' } : { backgroundColor: 'gray' }]}>
            <Text style={style.xtext}>0</Text>
          </View>
        </View>
      </ScrollView>
      <View style={style.intro}>
        <Text style={style.introText}>By Ameen_Ansari & Rana_Shakeel</Text>
      </View>
    </ImageBackground>
  )
}
const style = StyleSheet.create({
  bg: {
    width: '100%',
    height: "100%",
  },
  parent: {
    width: '100%',
    height: "100%",
  },
  headingText: {
    color: 'white',
    fontSize: 36,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 50
  },
  game: {
    marginTop: 70

  },
  gameContent: {
    color: 'black',
    fontSize: 72,
    fontWeight: "bold",
    textAlign: 'center',
    width: '100%',
    height: "100%",
  },

  boxP: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10
  },
  box: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 5,
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameSite: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20
  },
  x: {
    width: 50,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  o: {
    width: 50,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  xtext: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  intro: {
    position: 'absolute',
    bottom: 5,
    width: "100%"
  },
  introText: {
    color: 'white',
    textAlign: 'center'
  }

})

export default App