import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../../../../utils/dimensions';
import {colors} from '../../../common/colors';
import * as Yup from 'yup';
import {
  AppButton,
  AppForm,
  AppFormField,
  AppText,
  ErrorMessage,
  SubmitButton,
  // ErrorMessage,
  // SubmitButton,
} from '../../../components';
import {useNavigation} from '@react-navigation/native';
// import Animated, {
//   Easing,
//   FadeIn,
//   FadeInDown,
//   FadeOut,
//   Layout,
// } from 'react-native-reanimated';
import {ThemeColors} from '../../../../theme';
import useThemeToggler from '../../../../theme/hooks/useThemeToggler';
import { useTranslation } from 'react-i18next';
import { setToken } from '../../../../utils/storage-helpers';
import {getValue} from '../../../../utils/lodash';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../../services/Graphql/auth.service';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().min(1).label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function Login() {
  const {isThemeDark} = useThemeToggler();
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /* -------------------------------------------------------------------------- */
  /*                                   API Section                              */
  /* -------------------------------------------------------------------------- */
  const [request, setRequest] = useState({
		identifier: "testuser@inboxkitten.com",
		password: "asdfASDF@1234",
	});

  const handleSubmit = async ({email:identifier, password}) => {
    setLoginFailed(false);
    setErrorMessage(null);
    setRequest({
			...request,
			identifier: identifier,
      password:password
		});
    // let user_type = 'VENDOR';
    // const response = await adminLogin({email, password, user_type});
    // if (response) {
    //   setLoginFailed(false);
    //   await setToken(
    //     'access_token',
    //     getValue(response, `data.data.accessToken`, ''),
    //   );
    //   await setToken(
    //     'refresh_token',
    //     getValue(response, `data.data.refreshToken`, ''),
    //   );
    //   await setToken(
    //     'user',
    //     JSON.stringify(getValue(response, `data.data.user`, '')),
    //   );
    //   navigation.navigate('Main');
    //   Toast.show({
    //     type: 'success',
    //     text1: 'Success',
    //     text2: 'Logged in successfully',
    //   });
    // }
    mutateFunction();
    setLoginFailed(true);
    // setErrorMessage('Invalid email and/or password.');
  };
  const [mutateFunction, { data, loading, error }] = useMutation(USER_LOGIN, {
		variables: { input: request },
		onCompleted: (res) => {
			if (getValue(res, `login.jwt`, "")) {
				setToken("accessToken", getValue(res, `login.jwt`, ""));
				setToken(
					"user",
					JSON.stringify(getValue(res, `login.user`, ""))
				);
        navigation.navigate('Main')
				// window.location.href = `/`;
			}
		},
	});


  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isThemeDark
            ? ThemeColors.darkMode.background
            : ThemeColors.lightMode.background,
        },
      ]}>
      {/* <StatusBar animated={true} backgroundColor={colors.white} /> */}
      <View style={{width: '85%', marginTop: '5%'}}>
        {/* <Animated.View
          entering={FadeInDown}
          layout={Layout.easing(Easing.bounce).delay(1 * 100)}
          exiting={FadeOut.duration(150)}> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.logo}>
             
            </View>
            <AppText
              style={[
                styles.text,
                {
                  color: isThemeDark
                    ? ThemeColors.darkMode.primaryText
                    : ThemeColors.lightMode.headerBlack,
                },
              ]}>
              {t('auth:signinHeader')}
            </AppText>
            <AppForm
              initialValues={{
                email: 'testuser@inboxkitten.com',
                password: 'asdfASDF@1234',
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              <AppFormField
                name="email"
                autoComplete={'email'}
                autoCapitalize="none"
                autoCorrect={false}
                // icon="mail"
                placeholder="Enter Your e-mail address / Mobile Number"
                label={t('auth:emailLabel')}
                keyboardType="email-address"
                paddingLeft={3}
                backgroundColor={
                  isThemeDark
                    ? ThemeColors.darkMode.background
                    : ThemeColors.lightMode.background
                }
                color={
                  isThemeDark
                    ? ThemeColors.lightMode.background
                    : ThemeColors.darkMode.background
                }
                placeholderTextColor={
                  isThemeDark
                    ? ThemeColors.darkMode.secondaryText
                    : ThemeColors.lightMode.placeholderTextColor
                }
                borderColor={
                  isThemeDark
                    ? ThemeColors.lightMode.inputBorder
                    : ThemeColors.lightMode.inputBorder
                }
                borderWidth={isThemeDark ? 0.18 : 1}
                height={hp(56)}
                borderRadius={2}
                fontSize={RFValue(12)}
              />
              <AppFormField
                name="password"
                label={t('auth:passwordLabel')}
                autoComplete={'password'}
                autoCapitalize="none"
                autoCorrect={false}
                // icon="lock-closed"
                innerIcon={showPassword ? 'eye-off' : 'eye'}
                placeholder="Enter Your Password"
                textContentType="password"
                secureTextEntry={!showPassword}
                handleInnerIconClicked={() => setShowPassword(!showPassword)}
                submitOnEnter={true}
                paddingLeft={3}
                backgroundColor={
                  isThemeDark
                    ? ThemeColors.darkMode.background
                    : ThemeColors.lightMode.background
                }
                color={
                  isThemeDark
                    ? ThemeColors.lightMode.background
                    : ThemeColors.darkMode.background
                }
                borderColor={
                  isThemeDark
                    ? ThemeColors.lightMode.inputBorder
                    : ThemeColors.lightMode.inputBorder
                }
                placeholderTextColor={
                  isThemeDark
                    ? ThemeColors.darkMode.secondaryText
                    : ThemeColors.lightMode.placeholderTextColor
                }
                borderWidth={isThemeDark ? 0.18 : 1}
                height={hp(56)}
                borderRadius={2}
                fontSize={RFValue(12)}
              />
              <ErrorMessage error={errorMessage} visible={loginFailed} />
              <SubmitButton
                title={loading?t('common:loading'):t('common:signin')}
                style={styles.submit}
                color={ThemeColors.white}
              />
            </AppForm>
            <AppButton
              title={t('common:home')}
              color={ThemeColors.blue}
              style={[
                styles.button,
                {
                  borderColor: isThemeDark
                  ? ThemeColors.lightMode.inputBorder
                  : ThemeColors.lightMode.inputBorder,
                  borderWidth: isThemeDark ? 0.18 : 1,
                },
              ]}
              onPress={() => navigation.navigate('Main')}
            />
            <AppButton
              title={t('common:forgot')}
              color={ThemeColors.blue}
              style={[
                styles.button,
                {
                  borderColor: isThemeDark
                  ? ThemeColors.lightMode.inputBorder
                  : ThemeColors.lightMode.inputBorder,
                  borderWidth: isThemeDark ? 0.18 : 1,
                },
              ]}
            />
            <AppButton
              title={t('common:resendOtp')}
              color={ThemeColors.blue}
              style={[
                styles.button,
                {
                  borderColor: isThemeDark
                  ? ThemeColors.lightMode.inputBorder
                  : ThemeColors.lightMode.inputBorder,
                  borderWidth: isThemeDark ? 0.18 : 1,
                },
              ]}
            />
          </ScrollView>
        {/* </Animated.View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    marginTop: hp(28),
    alignSelf: 'center',
  },
  button: {
    height: hp(56),
    // borderColor: ThemeColors.buttonBorder,
    // borderWidth: 0.5,
    marginTop: hp(16),
  },
  text: {
    textAlign: 'center',
    marginTop: hp(16),
    color: ThemeColors.headerBlack,
    fontFamily: 'GoogleSans-Medium',
    fontSize: RFValue(16),
    marginBottom: hp(16),
  },
  headerText: {
    alignSelf: 'center',
    fontSize: RFValue(30),
    marginTop: hp(110),
    fontWeight: '700',
    color: 'white',
    fontFamily: 'GoogleSans-Regular',
  },
  submit: {
    marginTop: hp(24),
    height: hp(50),
    backgroundColor: ThemeColors.blue,
    color: ThemeColors.white,
    fontSize: RFValue(14),
    fontFamily: 'GoogleSans-Medium',
    borderRadius: 5,
  },
  footerContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  footerLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(15),
    fontSize: RFValue(12),
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'GoogleSans-Regular',
    marginBottom: hp(30),
  },
});
