import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/color'
import { fonts } from '../utils/font'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/log.png")} style={styles.logo}/>
      <Image source={require("../assets/Image.png")} style={styles.bannerImage}/>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.SubTitle}>We're delighted to have you join us as we collaborate to create remarkable success stories.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
         style={[styles.loginButtonWrapper,{ backgroundColor: colors.primary}
         ]}
         onPress={handleLogin}
         >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup}
        >
          <Text style={styles.signUpButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  logo: {
    marginVertical: 50,
    height: 50,
    width: 200,
    borderRadius: 10,
  },

  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },

  title: {
    fontSize: 36,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    marginTop: 40,
  },

  SubTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 20,

  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },

  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },

  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },

  signUpButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
})