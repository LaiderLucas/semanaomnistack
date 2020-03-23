import React from 'react';
import { WebView } from 'react-native-webview';

function Profile( { navigation } ) {
    const githubUsername = navigation.getParam('github_username');
    return <WebView style={{ flex: 1 }} source={{ uri: `http://cidadaoonline.ponteselacerda.mt.gov.br:5005/sat_v1.388/main.html` }} />
}

export default Profile;