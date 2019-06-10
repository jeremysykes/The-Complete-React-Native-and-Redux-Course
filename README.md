# The-Complete-React-Native-and-Redux-Course

The Complete React Native and Redux Course.
There are separate setup instructions for [windows](https://www.udemy.com/the-complete-react-native-and-redux-course).

# Getting Started

Have the following tools installed:

[xcode](https://developer.apple.com/xcode/)<br/>
[homebrew](https://brew.sh/)<br/>
[node/npm](https://nodejs.org/en/download/)<br/>
watchman>br/>
```
brew install watchman
```
RN CLI<br/>
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
In xcode:
* Go to xcode > preferences > locations 
* select your Xcode version from the dropdown and exit Xcode
* Run your project again and you should see an iphone simulator pop up
<br/><br/>

Your first build will take a while to fully compile. After compiling if for whatever reason the simulator doesn't launch directly into your app, slide the homescreen until you see your app and launch it. If your app isn't appearing have a look at your terminal it could still be compiling.

# How to fix »EACCES« errors with npm on Mac OS X
If you installed Node.js and npm using root permissions, you might end up with some nasty npm ERR! Error: EACCES errors as soon as you’re trying to install packages from npm. Consequently, you need to prefix your npm commands using sudo every time you want to install a package—which is anything but ideal. It seems that those problems are a result of using the .pkg installer provided on the Node.js website.

So, instead of running sudo npm install … each and every time, you can address the underlying issue by changing the permissions/ownership of two directories on your machine.

```
sudo chown -R `whoami` ~/.npm
sudo chown -R `whoami` /usr/local/lib/node_modules
```

Now you should be able to use npm without sudo.

# Install ESLint

Install eslint globally:
```
npm install -g eslint
```
If you're using Sublime 3 follow the instructions to [install package control](https://packagecontrol.io/installation). 

In Sublime hit CMD+SHIFT+P and look for "Install Package" and then "Sublime Linter".
Do the same thing as above but look for "sublimelinter-contrib-eslint".

Next you will setup your eslint config:
```
cd yourappname
npm install --save-dev eslint-config-rallycoding
```
To use the rallycoding eslint rules create a file in your project called .eslintrc and add the following:
```
{
	"extends": "rallycoding"
}
```
Restart your IDE after doing this

# For Additional Setup Troubleshooting
https://rallycoding.com/blog/troubleshooting-react-native-startup/
