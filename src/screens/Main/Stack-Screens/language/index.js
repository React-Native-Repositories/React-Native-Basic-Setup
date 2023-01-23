import {StyleSheet} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {AppThemeScreen} from '../../../../components';
import CreateHeader from './Header';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'native-base';
import LanguageSelector from '../../../../language/selector';
// import Animated, {
//   Easing,
//   FadeInDown,
//   FadeOut,
//   Layout,
// } from 'react-native-reanimated';

export default function LanguageSelectorPage() {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.navigate('More');
  };
  return (
    <AppThemeScreen>
      <CreateHeader
        leftHeader={t('headers:language')}
        close={true}
        handleClose={handleClose}
      />
      <ScrollView style={styles.container}>
        {/* <Animated.View
          entering={FadeInDown}
          layout={Layout.easing(Easing.bounce).delay(1 * 100)}
          exiting={FadeOut.duration(150)}> */}
          <LanguageSelector />
        {/* </Animated.View> */}
      </ScrollView>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
