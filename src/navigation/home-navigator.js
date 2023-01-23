import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from '../../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../../utils/dimensions';
import {ThemeColors} from '../../theme';
import HomeMoreSvgComponent from '../assets/svg/home-more';
import useThemeToggler from '../../theme/hooks/useThemeToggler';
import {View} from 'native-base';
import {AppText} from '../components';
import {useTranslation} from 'react-i18next';
import More from '../screens/Main/Tab-Screens/More';

const Tab = createBottomTabNavigator();
export default function HomeTabNavigation() {
  const {isThemeDark} = useThemeToggler();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={{
        tabBarActiveBackgroundColor: isThemeDark
          ? ThemeColors.tabactive
          : ThemeColors.tabactive,
        tabBarInactiveBackgroundColor: isThemeDark
          ? ThemeColors.darkMode.menubarPrimary
          : ThemeColors.subHeaderBlack,
        tabBarLabelStyle: {
          fontSize: RFValue(12),
          fontFamily: 'GoogleSans-Regular',
          marginBottom: hp(10),
        },
        tabBarStyle: [
          {
            display: 'flex',
            height: Platform.OS === 'ios' ? hp(84) : hp(64),
            borderTopColor: isThemeDark
              ? ThemeColors.darkMode.background
              : ThemeColors.lightMode.background,
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          // tabBarLabel: 'More',
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({color}) => <HomeMoreSvgComponent />,
          tabBarIcon: ({color}) => (
            <View alignItems={'center'}>
              <HomeMoreSvgComponent />
              <AppText
                style={{
                  fontSize: RFValue(12),
                  color: 'white',
                  marginTop: hp(2),
                }}>
                {t('headers:more')}
              </AppText>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
