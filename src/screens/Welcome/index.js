import React, {useEffect} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {setToken} from '../../../utils/storage-helpers';
import {AppIcon, AppText} from '@components';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../utils/dimensions';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import {ThemeColors} from '../../../theme';
import useThemeToggler from '../../../theme/hooks/useThemeToggler';
import { useTranslation } from 'react-i18next';

const slides = [
  {
    key: 1,
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    key: 2,
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    key: 3,
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    key: 4,
    title: 'Lorem Ipsum is simply dummy text',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
];

function IntroScreen(props) {
  const {isThemeDark} = useThemeToggler();
  let navigation = useNavigation();
  const {t, i18n} = useTranslation();

  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    // getData();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               Onchange Section                             */
  /* -------------------------------------------------------------------------- */

  // const getData = async () => {
  //   let user = await getToken('user');
  //   let info = user && JSON.parse(user);
  //   if (getValue(info,`id`,'')) {
  //     let resp = await adminGetSpecificUser(getValue(info,`id`,''));
  //     if (getValue(resp, `statusCode`) != 401) {
  //     if (resp) {
  //       navigation.navigate('Main');
  //     } else {
  //       await removeToken('user');
  //       await removeToken('access_token');
  //       await removeToken('refresh_token');
  //       navigation.navigate('Intro');
  //     }
  //   } else {
  //     await removeToken('user');
  //     await removeToken('access_token');
  //     await removeToken('refresh_token');
  //     props.navigation.navigate('Intro');
  //   }
  // }else{
  //   navigation.navigate('Intro');
  // }
  // }
  const renderItems = ({item}) => {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.headerView}>
          <AppText>Logo</AppText>
        </View>
        
        <AppText
          style={[
            styles.subheaderText,
            {
              color: isThemeDark
                ? ThemeColors.darkMode.primaryText
                : ThemeColors.lightMode.subHeaderBlack,
            },
          ]}>
            
          {t('auth:welcomeHeader1')}
          <AppText style={{color: ThemeColors.blue}}>{' '}{t('auth:welcomeHeader2')}</AppText>{' '}
          {t('auth:welcomeHeader3')}
        </AppText>
        {/* <Image
          source={require(`@assets/images/login-logo.png`)}
          resizeMode={'contain'}
          style={styles.logoView}
          alt={'logo'}
        />  */}
        <AppText
          style={[
            styles.textView,
            {
              color: isThemeDark
                ? ThemeColors.darkMode.secondaryText
                : ThemeColors.lightMode.text,
            },
          ]}>
           {t('auth:welcomeDescription')}
        </AppText>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AppIcon name="arrow-forward-outline" color="white" size={25} />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AppIcon name="checkmark-outline" color="white" size={25} />
      </View>
    );
  };

  const handleDone = async () => {
    await setToken('intro', 'done');
  };

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
      <AppIntroSlider
        renderItem={renderItems}
        data={slides}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        onDone={handleDone}
        dotStyle={[styles.dotStyle, {backgroundColor: '#DADCE0'}]}
        activeDotStyle={[styles.dotStyle, {backgroundColor: '#FD9933'}]}
        showNextButton={false}
        showDoneButton={false}
      />
      <View style={styles.buttonWrapper}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          unstable_pressDelay={0}
          >
          <AppText style={{color: ThemeColors.white, fontSize: RFValue(14)}}>
          {t('common:signin')}
          </AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    marginTop: hp(40),
    alignSelf: 'center',
    width: '90%',
  },
  headerView: {
    // height: hp(120),
    // width: wp(202),
    alignSelf: 'center',
  },
  headerTextView: {
    color: ThemeColors.headerBlack,
    fontSize: RFValue(30),
    fontFamily: 'GoogleSans-Bold',
    alignSelf: 'center',
    marginTop: hp(2),
    fontWeight: '500',
  },
  subheaderText: {
    fontSize: RFValue(18),
    color: ThemeColors.subHeaderBlack,
    marginTop: hp(50),
    textAlign: 'center',
    fontFamily: 'GoogleSans-Medium',
  },
  logoView: {
    marginTop: hp(46),
    height: hp(212),
    width: wp(255),
    // backgroundColor: ThemeColors.green,
    alignSelf: 'center',
    // position:'absolute'
  },
  textView: {
    fontSize: RFValue(12),
    color: ThemeColors.text,
    marginTop: hp(8),
    textAlign: 'center',
    fontFamily: 'GoogleSans-Regular',
  },
  dotStyle: {
    marginBottom: hp(180),
    backgroundColor: '#DADCE0',
    height: hp(8),
    width: hp(8),
    borderRadius: hp(4),
  },

  button: {
    position: 'absolute',
    bottom: hp(50),
    fontSize: RFValue(16),
    height: hp(50),
    backgroundColor: ThemeColors.blue,
    color: ThemeColors.white,
    fontWeight: '500',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(5),
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCircle: {
    position: 'absolute',
    bottom: hp(60),
    width: hp(40),
    height: hp(40),
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
});

export default IntroScreen;
