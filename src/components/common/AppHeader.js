import React, {useEffect, useState} from 'react';
import {Pressable, View, TouchableOpacity} from 'react-native';
import {Box, Button, HStack} from 'native-base';
import {hp} from '@utils/dimensions';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import {getToken, removeToken} from '@utils/storage-helpers';
import {getValue} from '@utils/lodash';
import ProfileModal from './ProfileModal';
import {useNavigation} from '@react-navigation/native';
import {ThemeColors} from '@theme';
import AnimatedPressable from '../AppAnimatedPressable';
import useThemeToggler from '@theme/hooks/useThemeToggler';
import {RFValue} from '@utils/npm-helper/react-native-responsive-fontsize';
import SearchSvgComponent from '@assets/svg/common/search';
import FiltersSvgComponent from '@assets/svg/common/filters';
import ArrowDownSvgComponent from '@assets/svg/common/arrow-down';
import NotificationSvgComponent from '@assets/svg/common/notification';

function AppHeader(props) {
  const {
    // navigation,
    headerName,
    search,
    submit,
    isSubmitLoading,
    handleSubmit,
    handleCloseSearch,
    hideProfile,
    filter,
    hideArrowdown,
    headerDesc,
    notification,
  } = props;
  const navigation = useNavigation();
  const {isThemeDark} = useThemeToggler();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let user = await getToken('user');
    // let info = user && JSON.parse(user);
    let info = {
      name: 'Ramesh',
      email: 'ramesh@gmail.com',
    };
    setUserInfo(info ? info : {});
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const logout = async () => {
    closeModal();
    await removeToken('user');
    await removeToken('accessToken');
    await removeToken('refreshToken');
    navigation.navigate('Intro');
  };

  return (
    <Box
      style={{
        borderBottomWidth: 0.5,
        zIndex: 1,
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowColor: '#000000',
        elevation: 12,
        borderColor: isThemeDark
          ? ThemeColors.darkMode.menubarPrimary
          : ThemeColors.common.darkShadow,
        height: hp(64),
        backgroundColor: isThemeDark
          ? ThemeColors.darkMode.menubarPrimary
          : ThemeColors.lightMode.background,
        justifyContent: 'center',
      }}>
      <HStack
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <View alignItems="center" marginLeft={hp(28)}>
          <View style={{alignSelf: 'flex-start'}}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <AppText
                fontWeight="bold"
                style={{
                  fontFamily: 'GoogleSans-Medium',
                  fontSize: RFValue(14),
                  color: isThemeDark
                    ? ThemeColors.lightMode.background
                    : ThemeColors.darkMode.background,
                }}>
                {headerName ? headerName : 'Home'}
              </AppText>
              {!hideArrowdown && (
                <ArrowDownSvgComponent
                  color={isThemeDark ? 'white' : '#5f6368'}
                />
              )}
            </View>
          </View>
          {headerDesc && (
            <AppText
              style={{
                fontSize: RFValue(10),
                alignSelf: 'flex-start',
                color: isThemeDark
                  ? ThemeColors.darkMode.secondaryText
                  : '#3C4043',
              }}>
              {headerDesc}
            </AppText>
          )}
        </View>

        <HStack marginRight={hp(28)} alignItems={'center'}>
          {submit &&
            (isSubmitLoading ? (
              <Button variant="unstyled" isLoading>
                Button
              </Button>
            ) : (
              <Pressable onPress={() => handleSubmit()} unstable_pressDelay={0}>
                <AppIcon
                  name={'checkmark-circle'}
                  size={hp(35)}
                  color={'#15803d'}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </Pressable>
            ))}
          {search && (
            <View style={{marginRight: hp(16)}}>
              <AnimatedPressable onPress={handleCloseSearch} >
                <SearchSvgComponent />
              </AnimatedPressable>
            </View>
          )}
          {filter && (
            <AnimatedPressable onPress={handleCloseSearch} >
              <FiltersSvgComponent />
            </AnimatedPressable>
          )}
          {notification && (
            <AnimatedPressable
              onPress={() => navigation.navigate('Notifications')}>
              <NotificationSvgComponent />
            </AnimatedPressable>
          )}
          {!hideProfile && (
            <Pressable
              style={{
                height: hp(32),
                width: hp(32),
                borderRadius: hp(16),
                // backgroundColor: isThemeDark
                //   ? ThemeColors.darkMode.background
                //   : ThemeColors.headerBlack,
                backgroundColor: '#FF9932',
                marginLeft: hp(18),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              unstable_pressDelay={0}
              onPress={() => setModalVisible(!modalVisible)}>
              <AppText style={{color: 'white', fontSize: RFValue(14)}}>
                {getValue(userInfo, `email`, 'R') &&
                  getValue(userInfo, `email`, 'R').charAt(0).toUpperCase()}
              </AppText>
            </Pressable>
          )}
        </HStack>
      </HStack>
      <ProfileModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        logout={logout}
      />
    </Box>
  );
}

export default AppHeader;
