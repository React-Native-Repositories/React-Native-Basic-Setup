/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { LogBox, StyleSheet, Text, View} from 'react-native';
 import React, {useEffect, useState} from 'react';
 import {
   NativeBaseProvider,
 } from 'native-base';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
 import {
   colorModeManager,
   NativeBaseTheme,
   PreferencesContext,
 } from './theme';
 import useColorScheme from './theme/hooks/useColorScheme';
 import { useNavigation} from '@react-navigation/native';
 import AuthStackNavigator from './src/navigation/auth-navigator';
 import {getToken} from './utils/storage-helpers';
 import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
 import './src/language/DCSLocalize';
 import {useNetInfo} from '@react-native-community/netinfo';
 import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   ApolloLink,
   from,
   HttpLink
 } from '@apollo/client';
 import {onError} from '@apollo/client/link/error';
 import OfflineNotice from './src/components/OfflineNotice';
 import {removeToken} from './utils/storage-helpers';
 import {getValue} from './utils/lodash';
 export default function App() {
   const netInfo = useNetInfo();
   const navigation = useNavigation();
   /* -------------------------------------------------------------------------- */
   /*                                    Log Section                             */
   /* -------------------------------------------------------------------------- */
   LogBox.ignoreLogs(['Setting a timer for a long period of time']);
   LogBox.ignoreLogs(['NativeBase: The contrast ratio of']);
   LogBox.ignoreAllLogs(true);
   LogBox.ignoreLogs([
     "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
   ]);

   const AuthContext = React.createContext();
   /* -------------------------------------------------------------------------- */
   /*                               UseEffect Section                            */
   /* -------------------------------------------------------------------------- */
 
   useEffect(() => {
     getData();
   }, []);

   const getData = async () => {
     const theme = await colorModeManager.get();
     setIsThemeDark(theme === 'dark' ? true : false);
     async function prepare() {
       try {
         // Pre-load fonts, make any API calls you need to do here
         await initialiseData();
       } catch (e) {
         // console.warn(e);
       } finally {
         // Tell the application to render
         setAppIsReady(true);
       }
     }
     prepare();
   };
 
   /* -------------------------------------------------------------------------- */
   /*                              Usestate Section                              */
   /* -------------------------------------------------------------------------- */
   const [user, setUser] = useState(false);
   const [appIsReady, setAppIsReady] = useState(false);
 
   const colorScheme = true ? useColorScheme() : 'light';
   const [isThemeDark, setIsThemeDark] = React.useState();
   /* -------------------------------------------------------------------------- */
   /*                               On change Section                            */
   /* -------------------------------------------------------------------------- */
   const toggleTheme = React.useCallback(async () => {
     return setIsThemeDark(!isThemeDark);
   }, [isThemeDark]);
 
   const preferences = React.useMemo(
     () => ({
       toggleTheme,
       isThemeDark,
     }),
     [toggleTheme, isThemeDark],
   );
 
   const initialiseData = async () => {
     const user = await getToken('access_token');
     if (user) setUser(user);
   };
 
   if (!appIsReady) {
     return null;
   }
   /* -------------------------------------------------------------------------- */
   /*                                  Toast Section                             */
   /* -------------------------------------------------------------------------- */
 
   /*
    1. Create the config
  */
   const toastConfig = {
     /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
     success: props => (
       <BaseToast
         {...props}
         style={{borderLeftColor: '#22c55e'}}
         contentContainerStyle={{paddingHorizontal: 15}}
         text1Style={{
           fontSize: 15,
           fontWeight: '400',
         }}
       />
     ),
     /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
     error: props => (
       <ErrorToast
         {...props}
         style={{borderLeftColor: '#ef4444'}}
         text1Style={{
           fontSize: 17,
         }}
         text2Style={{
           fontSize: 15,
         }}
       />
     ),
     /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
     tomatoToast: ({text1, props}) => (
       <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
         <Text>{text1}</Text>
         <Text>{props.uuid}</Text>
       </View>
     ),
   };
 
   /* -------------------------------------------------------------------------- */
   /*                                Graphql Section                             */
   /* -------------------------------------------------------------------------- */
   const API = new HttpLink({
     uri: '',
   });
   const middleWareLink = new ApolloLink(async (operation, forward) => {
     const authToken = await getToken('accessToken');
     operation.setContext(context => ({
       ...context,
       headers: authToken
         ? {
             'Content-Type': 'application/json',
             Authorization: 'Bearer ' + authToken,
           }
         : {
             'Content-Type': 'application/json',
           },
     }));
 
     return forward(operation);
   });
   const afterWareLink = onError(
     ({operation, response, graphQLErrors = [], networkError = {}}) => {
       const status =
         networkError && networkError.statusCode
           ? networkError.statusCode
           : null;
       if (status === 401) {
         removeToken('user');
         removeToken('accessToken');
 
         Toast.show({
           type: 'error',
           text1: 'error',
           text2: 'Session Expired',
         });
         setTimeout(() => {
           navigation.navigate('Login');
         }, 500);
       } else {
         if (getValue(graphQLErrors, `length`, 0) > 0) {
           graphQLErrors.forEach(item => {
             Toast.show({
               type: 'error',
               text1: 'error',
               text2: getValue(item, `message`, ''),
             });
           });
         }
       }
     },
   );
   const client = new ApolloClient({
     // uri: "https://flyby-gateway.herokuapp.com/",
     link: from([middleWareLink, afterWareLink, API]),
     cache: new InMemoryCache(),
   });
 
   return (
     <SafeAreaProvider>
       <NativeBaseProvider
         theme={NativeBaseTheme}
         colorModeManager={colorModeManager}>
         <PreferencesContext.Provider value={preferences}>
           <ApolloProvider client={client}>
             {netInfo.type !== 'unknown' &&
             netInfo.isInternetReachable === false ? (
               <OfflineNotice />
             ) : (
               <AuthStackNavigator />
             )}
             <Toast config={toastConfig} position="bottom" bottomOffset={20} />
           </ApolloProvider>
         </PreferencesContext.Provider>
       </NativeBaseProvider>
     </SafeAreaProvider>
   );
 }
 
 const styles = StyleSheet.create({});
 