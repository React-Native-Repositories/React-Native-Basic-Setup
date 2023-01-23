import React, {useEffect, useState} from 'react';
import {getToken} from '../../utils/storage-helpers';
import {AppLoading, AppThemeScreen} from '../components';
import { useNavigation } from '@react-navigation/native';

export default function IntroLoader(props) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const token = await getToken('accessToken');
    if (token && token) {
      navigation.navigate('Main');
      setIsLoading(false);
    } else {
      navigation.navigate('Intro');
      setIsLoading(false);
    }
  }

  return (
    <AppThemeScreen>
      <AppLoading visible={isLoading} />
    </AppThemeScreen>
  );
}
