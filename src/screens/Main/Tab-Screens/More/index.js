import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppIcon, AppText, AppThemeScreen} from '../../../../components';
import AppHeader from '../../../../components/common/AppHeader';
import useThemeToggler from '../../../../../theme/hooks/useThemeToggler';
import {ThemeColors} from '../../../../../theme';
import {RFValue} from '../../../../../utils/npm-helper/react-native-responsive-fontsize';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'native-base';
import {hp} from '../../../../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';
import ChevronRightSvgComponent from '../../../../assets/svg/common/chevron-right';
import AccountCircleSvgComponent from '../../../../assets/svg/common/account-circle';
import TicketSvgComponent from '../../../../assets/svg/common/ticket';
import NotificationSvgComponent from '../../../../assets/svg/common/notification';
import KnowledgeSvgComponent from '../../../../assets/svg/common/knowledge';
// import Animated, {
//   Easing,
//   FadeInDown,
//   FadeOut,
//   Layout,
// } from 'react-native-reanimated';

export default function More() {
  const {isThemeDark} = useThemeToggler();
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <AppThemeScreen>
      <AppHeader
        headerName={t('headers:more')}
        hideProfile={false}
        hideArrowdown={true}
      />
      <ScrollView>
        {/* <Animated.View
          entering={FadeInDown}
          layout={Layout.easing(Easing.bounce).delay(1 * 100)}
          exiting={FadeOut.duration(150)}> */}
        <View style={styles.container}>
          <View style={styles.headercontainer}>
            <View style={styles.header}>
              <View style={styles.profile}>
                <AppText style={styles.profileText}>J</AppText>
              </View>
              <View style={styles.profileInfo}>
                <AppText
                  style={{
                    fontSize: RFValue(14),
                    color: isThemeDark
                      ? ThemeColors.darkMode.primaryText
                      : ThemeColors.lightMode.headerBlack,
                    fontFamily: 'GoogleSans-Medium',
                  }}>
                  Jhon Doe
                </AppText>
                <AppText
                  style={{
                    fontSize: RFValue(10),
                    color: ThemeColors.lightMode.text,
                    marginTop: hp(3),
                  }}>
                  test@inboxkitten.com
                </AppText>
                <AppText
                  style={{
                    fontSize: RFValue(10),
                    color: ThemeColors.lightMode.text,
                    marginTop: hp(3),
                  }}>
                  Status -{' '}
                  <AppText
                    style={{
                      fontSize: RFValue(10),
                      color: '#21C9AF',
                      marginTop: hp(3),
                    }}>
                    Active
                  </AppText>
                </AppText>
              </View>
            </View>
            <View style={styles.listheader}>
              <View
                style={[
                  styles.listbox,
                  {
                    borderWidth: isThemeDark ? 0.18 : 1,
                    backgroundColor: isThemeDark
                      ? ThemeColors.darkMode.menubarPrimary
                      : ThemeColors.lightMode.inputBorder,
                  },
                ]}>
                <View
                  style={{
                    marginTop: hp(16),
                    marginLeft: hp(23),
                  }}>
                  <AppText
                    style={{
                      fontSize: RFValue(14),
                      color: isThemeDark
                        ? ThemeColors.darkMode.primaryText
                        : ThemeColors.lightMode.headerBlack,
                      fontFamily: 'GoogleSans-Medium',
                    }}>
                    Test
                  </AppText>
                  <AppText
                    style={{
                      fontSize: RFValue(10),
                      color: isThemeDark
                        ? ThemeColors.darkMode.secondaryText
                        : ThemeColors.lightMode.text,
                      marginTop: hp(3),
                    }}>
                    123456
                  </AppText>
                </View>
                <ChevronRightSvgComponent
                  style={{alignSelf: 'center', marginRight: hp(16)}}
                />
              </View>
              <View
                style={[
                  styles.listbox,
                  {
                    borderWidth: isThemeDark ? 0.17 : 1,
                  },
                ]}>
                <View
                  style={{
                    marginTop: hp(16),
                    marginLeft: hp(23),
                  }}>
                  <AppText
                    style={{
                      fontSize: RFValue(14),
                      color: isThemeDark
                        ? ThemeColors.darkMode.primaryText
                        : ThemeColors.lightMode.headerBlack,
                      fontFamily: 'GoogleSans-Medium',
                    }}>
                    Test
                  </AppText>
                  <AppText
                    style={{
                      fontSize: RFValue(10),
                      color: isThemeDark
                        ? ThemeColors.darkMode.secondaryText
                        : ThemeColors.lightMode.text,
                      marginTop: hp(3),
                    }}>
                    123456
                  </AppText>
                </View>
                <ChevronRightSvgComponent
                  style={{alignSelf: 'center', marginRight: hp(16)}}
                />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.border,
              {
                borderColor: isThemeDark
                  ? ThemeColors.darkMode.secondaryText
                  : '#00000029',
              },
            ]}
          />
          <View style={styles.listcontainer}>
            <TouchableOpacity delayPressIn={0} style={styles.list}>
              <AccountCircleSvgComponent />
              <AppText style={styles.listText}>{t('more:myprofile')}</AppText>
            </TouchableOpacity>
            <TouchableOpacity delayPressIn={0} style={styles.list}>
              <TicketSvgComponent />
              <AppText style={styles.listText}>{t('more:tickets')}</AppText>
            </TouchableOpacity>
            <TouchableOpacity delayPressIn={0} style={styles.list}>
              <NotificationSvgComponent />
              <AppText style={styles.listText}>
                {t('more:notification')}
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity delayPressIn={0} style={styles.list}>
              <KnowledgeSvgComponent />
              <AppText style={styles.listText}>{t('more:knowledge')}</AppText>
            </TouchableOpacity>
            <Pressable
              unstable_pressDelay={0}
              style={styles.list}
              onPress={() => navigation.navigate('LanguageSelector')}>
              <AppIcon name={'language'} size={hp(24)} color={'#5f6368'} />
              <AppText style={styles.listText}>{t('headers:language')}</AppText>
            </Pressable>
          </View>
        </View>
        {/* </Animated.View> */}
      </ScrollView>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headercontainer: {
    marginLeft: hp(28),
    marginRight: hp(28),
  },
  header: {
    flexDirection: 'row',
    marginTop: hp(24),
  },
  profile: {
    height: hp(60),
    width: hp(60),
    borderRadius: hp(30),
    backgroundColor: '#FF9932',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: RFValue(31),
    color: 'white',
    alignSelf: 'center',
  },
  profileInfo: {
    marginLeft: hp(8),
  },
  listheader: {
    marginTop: hp(17),
  },
  listbox: {
    height: hp(71),
    borderWidth: 0.5,
    borderColor: ThemeColors.lightMode.inputBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  listcontainer: {
    marginLeft: hp(28),
    marginRight: hp(28),
    marginTop: hp(20),
    marginBottom: hp(30),
  },
  list: {
    marginTop: hp(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: RFValue(12),
    marginLeft: hp(8),
    color: ThemeColors.lightMode.text,
  },
  border: {
    marginTop: hp(10),
    borderWidth: 0.5,
  },
});
