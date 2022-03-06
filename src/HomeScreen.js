import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import COLOR from './Const/Color';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  btnprimary: {
    backgroundColor: COLOR.primary,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

},
titleText:{
  fontSize: 20,
  
},
});

const HomeScreen = ({navigation}) => {

     const [reviews, setReviews] = useState([
       { title: ' Welcome Krishna', rating: 5, key:'1'},
        
     ]);

  return (
    <View style={{ marginHorizontal: 20}}>
      <FlatList style ={styles.list}
       data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <Text style={styles.titleText}>{ item.title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            
            <View style={styles.btnprimary}>
                <Text style={{ fontWeight: "bold", color: COLOR.white, fontSize: 18 }}> Edit</Text>
            </View>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
       /> 
    </View>
  );
}



export default HomeScreen;