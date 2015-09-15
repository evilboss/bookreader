App.info({
    name: 'Book Reader',
    description: 'An BookReader Android app For SNC',
    version: '0.0.1',
    author: 'Jr Reyes',
    email: 'jr.evilboss@gmail.com',
    website: 'http://snc-e-book-library.meteor.com/'
});
App.accessRule('http://snc-e-book-library.meteor.com/*');
App.icons({
    // Android
    'android_hdpi': 'resources/icons/android/drawable-hdpi/ic_launcher.png',
    'android_ldpi': 'resources/icons/android/drawable-ldpi/ic_launcher.png',
    'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
    'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png'
});

App.launchScreens({
    'android_ldpi_portrait': 'resources/splash/splash.png',
    'android_ldpi_landscape': 'resources/splash/splash.png',
    'android_mdpi_portrait': 'resources/splash/splash.png',
    'android_mdpi_landscape': 'resources/splash/splash.png',
    'android_hdpi_portrait': 'resources/splash/splash.png',
    'android_hdpi_landscape': 'resources/splash/splash.png',
    'android_xhdpi_portrait': 'resources/splash/splash.png',
    'android_xhdpi_landscape': 'resources/splash/splash.png'
})

// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');