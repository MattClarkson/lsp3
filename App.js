import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const indexHTML = `
    <div id="embed-container"></div>
    <script src="https://prod.flat-cdn.com/embed-js/v1.1.0/embed.min.js"></script>
    <script>
      var container = document.getElementById('embed-container');
      var embed = new Flat.Embed(container, {
        score: '56ae21579a127715a02901a6',
        embedParams: {
          mode: 'edit',
          appId: '59e7684b476cba39490801c2',
          // Simple customizations
          branding: false,
          controlsPosition: 'top',
          layout: 'page',
          controlsPlay: 'true',
        }
      });
    </script>
    `;
  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.webview}
        originWhitelist={['*']}
        source={{ html: indexHTML }}
        javaScriptEnabled={true}
        allowFileAccessFromFileURLs={true}
        allowFileAccess={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1, 
  }
});
