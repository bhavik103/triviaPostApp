package io.ionic.triviapost;

import android.app.Application;

import androidx.multidex.MultiDex;

public class Singleton extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        MultiDex.install(this);
    }
}
