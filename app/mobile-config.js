/**
 * Created by aarondrup on 7/15/15.
 */
App.info({
    name: 'BookReader',
    description: 'An Android app built with Meteor',
    version: '0.0.1',
    author: 'Jr Reyes',
    website: 'http://localhost:3000/'
});
App.accessRule('https://localhost:3000');

App.icons({

    // Android
    'android_hdpi': 'resources/icons/android/drawable-hdpi/ic_launcher.png',
    'android_ldpi': 'resources/icons/android/drawable-ldpi/ic_launcher.png',
    'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
    'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png',
    'android_xxhdpi': 'resources/icons/android/drawable-xxhdpi/ic_launcher.png',
    'android_xxxhdpi': 'resources/icons/android/drawable-xxxhdpi/ic_launcher.png',
    'iphone': 'icons/icon-60.png',
    'iphone_2x': 'icons/icon-60@2x.png',
});


App.launchScreens({
    'iphone': 'splash/Default~iphone.png',
    'iphone_2x': 'splash/Default@2x~iphone.png',
    // ... more screen sizes and platforms ...
});


// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
