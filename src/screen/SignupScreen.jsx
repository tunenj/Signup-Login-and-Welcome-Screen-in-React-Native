import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native'
import { colors } from '../utils/color';
import { fonts } from '../utils/font';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleLogin = () => {
    navigation.navigate ("LOGIN")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={25}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>
      {/* form */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={30} color={colors.secondary}/>
          <TextInput style={styles.textInput} placeholder='Enter your email'
           placeholderTextColor={colors.secondary}
           keyboardType='email-address'/>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"lock-closed-outline"} size={30} color={colors.secondary}/>
          <TextInput style={styles.textInput} placeholder='Enter your password'
           placeholderTextColor={colors.secondary}
           secureTextEntry={secureEntry}
           />
           <TouchableOpacity onPress={()=>
            setSecureEntry((prev) => !prev)
           }>
            <SimpleLineIcons name={"eye"} size={20} color={colors.secondary}/>
           </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"phone-portrait-outline"} size={30} color={colors.secondary}/>
          <TextInput style={styles.textInput} placeholder='Enter your phone no'
          keyboardType='phone-pad'
           placeholderTextColor={colors.secondary}/>
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>

        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image source={require("../assets/google.png")} 
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>


        <View style={styles.footContainer}>
          <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.textAccount}>Already have an account? <Text style={styles.signupText}>Login</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },

  backButtonWrapper: {
    height: 50,
    width: 50,
    backgroundColor: colors.grey,
    marginTop: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    marginVertical: 20,
  },

  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },

  formContainer: {
    marginTop: 20, 
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 20,
  },

  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },

  forgotPasswordText: {
    textAlign: "right",
    color: colors.primary,
    fontFamily: fonts.Bold,
    marginVertical: 10,
  },

  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
  },

  loginText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 10,
  },

  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },

  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },

  googleText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },

  footContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    gap: 2,
  },

  signupText: {
    color: 'blue',
    fontWeight: 'bold'
  },

  textAccount: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },

});