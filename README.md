# Install Homebrew & Git
Reference [Homebrew](https://medium.com/mycostech/%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-homebrew-%E0%B8%9A%E0%B8%99-macbook-m1-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8A%E0%B8%B2%E0%B8%A7-dev-%E0%B8%81%E0%B8%B1%E0%B8%99-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-node-js-%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A2-d33a7444eb53)


* Install Homebrew
```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

* set path environment ให้มองเห็น Homebrew
```
   touch ~/.zshrc
```

* ทำการ export path ในไฟล์ .zshrc
```
   export PATH=/opt/homebrew/bin:$PATH
```

* ทดสอบรัน brew
```
   brew --version
```

* Install Git 
```
   brew install git
```
```
   git --version
```
---

# Setting Up React Native 😢
Reference [React Native Setup Environment](https://reactnative.dev/docs/environment-setup)
`ตัดส่วน Simulator`

* Node 12 or newer
```
   brew install node
```
```
   node --version
```

* Watchman
```
   brew install watchman
```
```
   watchman --version
```

#### Android

* Java Development Kit ( JDK 11 or newer )
```
   brew install --cask adoptopenjdk/openjdk/adoptopenjdk11
```
```
   java --version
```

#### iOS

* Xcode command line tools

  `Reference`  https://docs.fastlane.tools/getting-started/ios/setup/
```
   sudo xcode-select --install
```
```
   xcodebuild -version
```

* CocoaPods
```
   sudo gem install cocoapods
```
```
   pod --version
```

#### React Native Command Line Interface (ติดตั้งมาพร้อม Nodejs)
   
`ตัวอย่าง` การใช้งาน command
```
   npx react-native <command>
```

---

# Run project 😄
* Clone project
```
   git clone git@gitlab.com:ivlyfe-th/frontend/lyfetrack-app.git
```

* Install dependency
```
   yarn install
```

* Testing Unit Test
```
   yarn run jest --coverage
```
---

# Build Artifact 😲
### Build Android

* `Develop Environment`

แบบใช้ประจำ
```
   yarn run android:release:dev
```
แบบเต็ม
```
   yarn clean:android && npx react-native run-android --variant=developmentrelease --appIdSuffix=development
```

* `Alpha Environment`

แบบใช้ประจำ
```
   yarn run android:release:alpha
```
แบบเต็ม
```
   yarn clean:android && npx react-native run-android --variant=alpharelease --appIdSuffix=alpha
```
* `Staging Environment`

แบบใช้ประจำ
```
   yarn run android:release:staging
```
แบบเต็ม
```
   yarn clean:android && npx react-native run-android --variant=stagingrelease --appIdSuffix=captest
```
* `Production Environment`

แบบใช้ประจำ 
```
   yarn run android:release:prod
```
แบบเต็ม
```
   yarn clean:android && npx react-native run-android --variant=productionrelease
```

> หลังจาก build แล้วจะนำ .apk ส่งไปทดสอบ ให้ไปที่ Folder android/app/build/outputs/apk/development/release
### Build iOS

* `Develop Environment`


```
   yarn run ios:release:dev
```
```
   ENVFILE=.env.development react-native run-ios --configuration Release --verbose
```

* `Alpha Environment`

```
   yarn run ios:release:alpha
```
```
   ENVFILE=.env.alpha react-native run-ios --configuration Release
```
* `Staging Environment`

```
   yarn run ios:release:staging
```
```
   ENVFILE=.env.staging react-native run-ios --configuration Release
```
* `Production Environment`

```
   yarn run ios:release:prod
```
```
   ENVFILE=.env.production react-native run-ios --configuration Release
```

> iOS ไม่เคยใช้ command ส่วนใหญ่จะใช้ Xcode ซึ่ง command ด้านบนสามารถรันได้ แต่ยังไม่ทราบที่อยู่ไฟล์ .ipa

# CI/CD with Fastlane
