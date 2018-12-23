// https://facebook.github.io/react-native/docs/native-modules-android#register-the-module
package com.navigationbar;

//https://www.javatips.net/api/SalesforceMobileSDK-Android-master/libs/SalesforceReact/src/com/salesforce/androidsdk/reactnative/app/SalesforceReactSDKManager.java
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.*;

public class NavigationBarPackage implements ReactPackage {
    // adding module into the list
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new NavigationBarModule(reactContext));
        return modules;
    }

    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}