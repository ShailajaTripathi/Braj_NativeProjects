import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App({head,textData,imgSrc}) {  // destructuring without writing props.
  return (
    <View style={styles.container}>
      <Image source={imgSrc}
        style={{ width: 700, height: 400, borderRadius: "2%" }} />
      <Text style={{ marginTop: "35px", color: "#4682B4", fontSize: "27px" }} >{head}</Text>
      <Text style={{ color: "#708090", fontSize: "17px", width: "95%", height: "auto", marginTop: "3%" }} >{textData}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom:"5%",
    marginLeft:"3%",
    justifyContent: 'center',
  },
});