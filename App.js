// import { View } from 'react-native'
// import React, { Component } from 'react'
// import Braj from './Src/Component/braj'
// import { Safearea } from './Src/Component/safearea'
// import NetflixCard from './NetflixCard'

// export default class App extends Component {
//   render() {
//     return (
//       <View>
      
//         <Braj textData="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//         imgSrc={{uri:"https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_4a2624b5bed2cbae04dfab1b7f7bef14/indus-net-technologies-pvt-ltd.jpg"}}
//         head ="Indus net technology chennai"/>
//           <Braj textData="Kusum Sarovar is a sacred water reservoir with a historic sand monument in its backdrop. It is situated on the holy Govardhan Hill between Manasi Ganga and Radha Kund in Mathura district of Uttar Pradesh, India.[1] Kusum Sarovar is considered one of the sacred spots that witnessed the pastimes of Hindu deities Radha and Krishna. It is also the place of Jat ruler Maharaja Suraj Mal's memorial chhatri. Kusum Sarovar has Narada Kund, where Bhakti Sutra verses were written by Narada and the Shri Radha Vana Bihari Temple in the vicinity."
//         imgSrc ={{ uri: 'https://www.teahub.io/photos/full/133-1338927_mathura-vrindavan.jpg' }}
//         head="Braj : Heaven of universe" 
//         />
//       </View>
//     )
//   }
// }



// const image = {uri:"https://img.freepik.com/free-photo/front-view-elegant-businesswoman-holding-clipboard-with-copy-space_23-2148788842.jpg?size=626&ext=jpg&ga=GA1.2.299352468.1640476800"}
// import { registerRootComponent } from 'expo';
import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity}  from "react-native";
import { Entypo } from '@expo/vector-icons';

// const image = { uri: "https://www.imageconsultinginstitute.com/wp-content/uploads/2021/12/smiling-confident-businesswoman-posing-with-arms-folded.jpg" };

const App = () => (

  <View style={styles.container}>

    <ImageBackground source={require('./Src/Component/mypic.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.content}>
      {/* <Text style={styles.head}>Karla Black</Text>
      <Text style={styles.text}>PHOTOGRAPHY MODEL</Text>
      <Text style={styles.location}><Entypo name="location-pin" size={14} color="white" style={{marginRight:"1%"}}/>USA California</Text>
      <Text style={styles.details}>Dedicated and energetic Photographer with years of experience in custom and specialized photography.</Text>
      <TouchableOpacity style={styles.btn}>Follow Karla</TouchableOpacity> */}
       <Text style={styles.head}>Shailaja Tripathi</Text>
      <Text style={styles.text}>Software Engineer</Text>
<View style={{display:'flex',flexDirection:'row'}}>
      <Entypo name="location-pin" size={14} color="grey" style={{ marginTop:"2%"}}/> 
      <Text style={styles.location}>Chennai, Tamilnadu</Text>
      </View>
      <Text style={styles.details}>Dedicated and energetic software engineer with years of experience in custom and specialized Web Development.</Text>
      <TouchableOpacity style={styles.btn}><Text>Follow Shailaja</Text></TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // width:"100%",
  },
  content:{
    width:"90%",
    marginHorizontal:'5%',
    marginTop:"75%",
    // backgroundColor:"#26466D",
backgroundColor:"#F2F3F5",


    padding:"2%",
    borderRadius:5,
    
    alignItems:'center'
    // textAlign:"center"
  },
  image: {
    flex: 1,
    justifyContent: "center",

  },
  head:{
    fontSize: 25,
    marginTop:"2%",
    textAlign:"center",   
    color:"#777",
  },
location:{
  marginTop:"2%",
  fontSize:13,
  fontWeight:'500',
  color:"#777",
},
  text: {
    marginTop:"2%",
    color: "black",
    fontSize: 15,
   
    textAlign:"center",
    color:"#777",
  },
  details:{
    marginTop:"5%",
    marginLeft:"5%",
    fontSize:18,
    color:"#777",
    fontWeight:'100',
    letterSpacing:3,
    textAlign:"left"
  },
  btn:{
    margin: 10,
    display: "flex",
    width: 150,
    backgroundColor: "#BCC2C2",
    borderColor:"#FB3365",
    padding:16,
    borderRadius:20,
    color:"black",
    justifyContent:'center',
    alignItems:'center'
   
  
  },
});

export default App;  