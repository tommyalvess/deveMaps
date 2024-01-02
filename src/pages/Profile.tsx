import { useRoute } from '@react-navigation/native';
import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {

  const route = useRoute(); 
  const githubusername = route.params.github_username  

  return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubusername}` }} />
}

export default Profile;