# The-Complete-React-Native-and-Redux-Course

The Complete React Native and Redux Course.
There are separate setup instructions for [windows](https://www.udemy.com/the-complete-react-native-and-redux-course).

# Getting Started

Have the following tools installed:

[xcode](https://developer.apple.com/xcode/)
[homebrew](https://brew.sh/)
[node/npm](https://nodejs.org/en/download/)
watchman
```
brew install watchman
```
RN CLI
Try this first...
```
npm install -g react-native-cli
```
...but if there's write permission errors use sudo
```
sudo npm install -g react-native-cli
```

# Create Your First Project
To create your first project enter the following in the terminal:
```
react-native init yourappname
```
# Run Your First Project
To run your first project enter the following in the terminal:
```
cd yourappname
react-native run-ios
```
# Fixing Xcode Command Line Tools Location
If you were able to run your first project you don't need to do this,
but if you run your first project and see an error like this in the terminal:
```
info Found Xcode project albums.xcodeproj
xcrun: error: unable to find utility "instruments", not a developer tool or in PATH
error Command failed: xcrun instruments -s
xcrun: error: unable to find utility "instruments", not a developer tool or in PATH
. Run CLI with --verbose flag for more details.
```
Then in Xcode, go to xcode > preferences > locations and select your Xcode version from the dropdown and exit Xcode.
Run your project again and you should see an iphone simulator pop up. Your first build will take a while.
If for whatever reason the simulator doesn't launch directly into your app, slide the homescreen until you see your app and launch it. If you app isn't appearing have a look at your terminal it could still be compiling.