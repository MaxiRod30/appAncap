import React from 'react'
import { StyleSheet, View, Image , TouchableOpacity} from 'react-native'
import { colors } from '../global/colors'
import { useGetProfileimageQuery } from '../services/apiInfoServices'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, CommonActions } from '@react-navigation/native';

const Header = ({ navigation }) => {

  const defaultImageRoute = "../../assets/user.png";

  const { imageCamera, localId } = useSelector((state) => state.auth.value)
  const { data: imageFromBase } = useGetProfileimageQuery(localId)

  const handleButton = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'My Buttom Profile' }],
      })
    );
  };

  return (
    <View style={styles.container}>

      <Image
        style={styles.logoAncap}
        source={require('../../assets/ancap-logo.png')}
      />
      <TouchableOpacity onPress={handleButton}>
        {imageFromBase || imageCamera ? (
          <Image
            source={{ uri: imageFromBase?.image || imageCamera }}
            style={styles.img}
            resizeMode="cover"
          />
        ) : (
          <Image
            style={styles.img}
            resizeMode="cover"
            source={require(defaultImageRoute)}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  logoAncap: {
    width: '70%',
    height: '100%',
    resizeMode: 'contain',
    marginRight: 35
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginTop: 0
  }
})
