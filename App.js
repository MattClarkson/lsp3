import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const indexHTML = `
  <!DOCTYPE HTML>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
      <meta charset="utf-8">
      <title>Smoosic Editor</title>
      <link href="https://aarondavidnewman.github.io/Smoosic/build/styles/fonts.css" rel="stylesheet">
          <link href="../styles/media.css" rel="stylesheet">
          <link href="../styles/ribbon.css" rel="stylesheet">
          <link href="https://aarondavidnewman.github.io/Smoosic/build/styles/dialogs.css" rel="stylesheet">
          <link href="https://aarondavidnewman.github.io/Smoosic/build/styles/menus.css" rel="stylesheet">
          <link href="https://aarondavidnewman.github.io/Smoosic/build/styles/piano.css" rel="stylesheet">
          <link href="https://aarondavidnewman.github.io/Smoosic/build/styles/tree.css" rel="stylesheet">
          <script type="text/javascript" src="https://aarondavidnewman.github.io/vexflow_smoosic/releases/vexflow-debug.js"></script>
          <!-- script src="https://unpkg.com/vexflow@4.0.1/build/cjs/vexflow-debug.js"></script -->
          <!-- script type="text/javascript" src="../../../vx1446/vexflow/build/cjs/vexflow-debug.js"></script -->
          <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.js" ></script>
          <script type="text/javascript" src="../jszip.js"></script>
          <script type="text/javascript" src="../midi-parser.js"></script>
      <script type="text/javascript" src="../smoosic.js" ></script>
      <script type="text/javascript">
             document.addEventListener("DOMContentLoaded", function (event) {
               Smo.SuiDom.createUiDom(document.getElementById('smoo'));
                 var config = { mode: 'application', leftControls: 'controls-left', topControls: 'controls-top'
                  , scoreDomContainer: 'smo-scroll-region'  };
               Smo.SuiApplication.configure(config);
             });
         </script>
  </head>
  <body>
    <sub id="link-hdr"><a href="https://github.com/AaronDavidNewman/smoosic">Github site</a> | 
      <a href="https://aarondavidnewman.github.io/Smoosic/release/docs/modules.html">source documentation</a> | 
      <a href="https://aarondavidnewman.github.io/Smoosic/changes.html">change notes</a> |
       <a href="https://aarondavidnewman.github.io/Smoosic/release/html/smoosic.html">application</a><button class="close-header"><span class="icon icon-cross"></span></button></sub>
    <!-- audio crossOrigin="anonymous" id="sample" src="https://aarondavidnewman.github.io/Smoosic/build/sound/piano_middle_C.mp3" / -->
  <div id="smoo">
    <div>
      <audio crossOrigin="anonymous" id="samplecn4" data-pitch="c/4" data-patch="piano"
        src="https://aarondavidnewman.github.io/SmoSounds/piano/piano-c4-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="samplebb4" data-pitch="bb/4" data-patch="piano"
        src="https://aarondavidnewman.github.io/SmoSounds/piano/piano-bb4-iowa.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-cello-bb3" data-pitch="bb/3" data-patch="cello"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/cello-bb3-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-cello-c4" data-pitch="c/4" data-patch="cello"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/cello-c4-iowa.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-violinshort-e5" data-pitch="e/5" data-patch="violin"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/violin-e5-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-violinshort-e6" data-pitch="e/6" data-patch="violin"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/violin-e6-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-violin-e5" data-pitch="e/5" data-patch="violin"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/violin-e5-sso.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-violin-c4" data-pitch="c/4" data-patch="violin"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/violin-c4-sso.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-violin-e6" data-pitch="e/6" data-patch="cello"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/violin-e6-sso.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-bass-b1" data-pitch="b/1" data-patch="bass"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/bass-B1-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-bass-e2" data-pitch="e/2" data-patch="bass"
        src="https://aarondavidnewman.github.io/SmoSounds/strings/bass-E2-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-trumpet-c4" data-pitch="c/4" data-patch="trumpet"
        src="https://aarondavidnewman.github.io/SmoSounds/brass/trumpet-c4-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-trumpet-c5" data-pitch="c/5" data-patch="trumpet"
        src="https://aarondavidnewman.github.io/SmoSounds/brass/trumpet-c5-iowa.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-horn-c3" data-pitch="c/3" data-patch="horn"
        src="https://aarondavidnewman.github.io/SmoSounds/brass/horn-c3-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-horn-c4" data-pitch="c/4" data-patch="horn"
        src="https://aarondavidnewman.github.io/SmoSounds/brass/horn-c4-iowa.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-tuba-c2" data-pitch="c/2" data-patch="tuba"
        src="https://aarondavidnewman.github.io/SmoSounds/brass/tuba-c2-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-tuba-c3" data-pitch="c/3" data-patch="cello"
        src="https://aarondavidnewman.github.io/SmoSounds/brass/tuba-c3-iowa.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-clarinet-c4" data-pitch="c/2" data-patch="clarinet"
        src="https://aarondavidnewman.github.io/SmoSounds/woodwind/clarinet-c4-iowa.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="sample-clarinet-c5" data-pitch="c/5" data-patch="clarinet"
        src="https://aarondavidnewman.github.io/SmoSounds/woodwind/clarinet-c5-iowa.mp3"> </audio>
    </div>
    <div>
      <audio crossOrigin="anonymous" id="pad-c4-vita" data-pitch="c/4" data-patch="pad"
        src="https://aarondavidnewman.github.io/SmoSounds/synth/pad-c4-vita.mp3">
    </div>
    <div>
      <audio crossOrigin="anonymous" id="pad-c5-vita" data-pitch="c/5" data-patch="pad"
        src="https://aarondavidnewman.github.io/SmoSounds/synth/pad-c5-vita.mp3">
    </div>
  </div>
  </body>
  </html>  
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
