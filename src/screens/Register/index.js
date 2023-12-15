import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import{colors, fontType} from '../../theme';
import {Eye, EyeSlash} from 'iconsax-react-native';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSignupDisabled, setSignupDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [paddingVertical, setPaddingVertical] = useState(60);
  const navigation = useNavigation();

  const handleRegister = async () => {
    let errorMessage = '';

    if (password !== confirmPassword) {
      errorMessage = 'Password and password confirmation do not match.';
    } else if (password.length < 8) {
      errorMessage = 'Password length must be at least 8 characters.';
    } else {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        errorMessage =
          'Password must contain a combination of capital letters, numbers and symbols.';
      }
    }

    if (errorMessage) {
      Alert.alert('Error', errorMessage);
      return;
    }

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({
          fullName,
          email,
          photoUrl: `https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          wallet: 0,
          totalPoint: 0,
          createdAt: new Date(),
        })
        .then(() => {
          console.log('User added!');
        });
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      console.log('Registration Error:', error);
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email is registered!';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password weak';
      }
      Alert.alert('Error', errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const updateSignupButtonStatus = () => {
    if (
      fullName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim()
    ) {
      setSignupDisabled(false);
    } else {
      setSignupDisabled(true);
    }
  };

  useEffect(() => {
    updateSignupButtonStatus();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setPaddingVertical(0);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setPaddingVertical(60);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [fullName, email, password, confirmPassword]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {paddingVertical}]}>
          <View>
            <Text style={styles.header}>Sign up</Text>
            <Text style={styles.caption}>
              Join the Need to Eat app! Easy food ordering.
            </Text>
            <View style={styles.form}>
              <View>
                <Text style={textinput.label}>Full Name</Text>
                <View style={textinput.container}>
                  <TextInput
                    placeholder="Enter full name"
                    placeholderTextColor={colors.grey}
                    value={fullName}
                    onChangeText={text => {
                      setFullName(text);
                      updateSignupButtonStatus();
                    }}
                    style={textinput.text}
                  />
                </View>
              </View>
              <View>
                <Text style={textinput.label}>Email</Text>
                <View style={textinput.container}>
                  <TextInput
                    placeholder="Enter your email address"
                    placeholderTextColor={colors.grey}
                    value={email}
                    onChangeText={text => {
                      setEmail(text);
                      updateSignupButtonStatus();
                    }}
                    inputMode="email"
                    keyboardType="email-address"
                    style={textinput.text}
                  />
                </View>
              </View>
              <View>
                <Text style={textinput.label}>Password</Text>
                <View
                  style={[
                    textinput.container,
                    {
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 10,
                    },
                  ]}>
                  <TextInput
                    placeholder="Enter password"
                    placeholderTextColor={colors.grey}
                    value={password}
                    onChangeText={text => {
                      setPassword(text);
                      updateSignupButtonStatus();
                    }}
                    secureTextEntry={!passwordVisible}
                    style={[textinput.text, {flex: 1}]}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    {passwordVisible ? (
                      <EyeSlash
                        variant="Linear"
                        color={colors.grey}
                        size={20}
                      />
                    ) : (
                      <Eye variant="Linear" color={colors.grey} size={20} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={textinput.label}>Confirm Password</Text>
                <View
                  style={[
                    textinput.container,
                    {
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 10,
                    },
                  ]}>
                  <TextInput
                    placeholder="Re-type password"
                    placeholderTextColor={colors.grey}
                    value={confirmPassword}
                    onChangeText={text => {
                      setConfirmPassword(text);
                      updateSignupButtonStatus();
                    }}
                    secureTextEntry={!confirmPasswordVisible}
                    style={[textinput.text, {flex: 1}]}
                  />
                  <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    {confirmPasswordVisible ? (
                      <EyeSlash
                        variant="Linear"
                        color={colors.grey}
                        size={20}
                      />
                    ) : (
                      <Eye variant="Linear" color={colors.grey} size={20} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{gap: 10}}>
            <TouchableHighlight
              style={[
                button.container,
                {
                  backgroundColor: isSignupDisabled
                    ? colors.transparentPrimary
                    : colors.primary,
                },
              ]}
              underlayColor={colors.primary}
              onPress={handleRegister}
              disabled={isSignupDisabled}>
              {loading ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                <Text style={button.label}>SIGN UP</Text>
              )}
            </TouchableHighlight>
            <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
              <Text style={[button.label, {color: colors.black}]}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[button.label, {color: colors.primary}]}>
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 32,
    fontFamily: 'Itr-ExtraBold',
    color: colors.black,
  },
  caption: {
    fontFamily: 'Itr-Regular',
    color: colors.grey,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 40,
  },
  form: {
    gap: 20,
  },
});
const textinput = StyleSheet.create({
  label: {
    fontFamily: 'Itr-Medium',
    fontSize: 14,
    color: colors.grey,
    marginBottom: 5,
  },
  container: {
    backgroundColor: colors.grey,
    height: 52,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    paddingVertical: 0,
    color: colors.black,
    fontFamily: 'Itr-Regular',
  },
});
const button = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'Itr-SemiBold',
  },
});
