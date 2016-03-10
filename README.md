# Meteor React Native Starter Boilerplate
Helpful examples for using [Meteor](http://meteor.com) with [React Native](https://facebook.github.io/react-native/) written in ES6.

Read about why and how [React Native & Meteor work together](https://github.com/meteor-factory/awesome-react-native-meteor/).

### What's in the box
* **Onboarding** - swipe through welcome panels
* **Accounts** - create accounts & sign up
* **CRUD** - (in progress) add, update, items to a collection
* [**Tinder**](https://github.com/meteor-factory/react-native-tinder-swipe-cards) - swipe happily through colors
* [**Messaging**](https://github.com/FaridSafi/react-native-gifted-messenger/) - Actually, it's more like a forum, but you get the point

![Meteor + React Native](https://raw.githubusercontent.com/meteor-factory/react-native-meteor-starter/develop/screenshots/react-native-meteor-starter-1.gif)
![Meteor + React Native](https://raw.githubusercontent.com/meteor-factory/react-native-meteor-starter/develop/screenshots/react-native-meteor-starter-2.gif)
![Meteor + React Native](https://raw.githubusercontent.com/meteor-factory/react-native-meteor-starter/develop/screenshots/react-native-meteor-starter-3.gif)

### Quick Start
##### 0. Prerequisites
* [Meteor is installed](https://www.meteor.com/install)
* [React Native cli is installed](https://facebook.github.io/react-native/docs/getting-started.html#content) `npm install -g react-native-cli`

##### 1. Start the Meteor backend server
`cd meteor && meteor`

--> **Open a new terminal tab**  <--
##### 2. Run on iOS (Mac only. Very easy)
`cd Starter && npm install && npm run ios` then click the 'Play' button on Xcode.

### Todos
- [ ] Android support
- [ ] Client-side validation for email ([tcomb-form](https://github.com/gcanti/tcomb-form-native)?)
- [ ] Create profile page when click on chat image
- [ ] Improve 'Load new messages' loading experience
- [ ] Globalize some styles e.g. colors
- [ ] Chat doesn't scroll down when you receive a new message
- [ ] Icon font
- [ ] Ensure ES6 throughout
- [ ] Fix menu
- [ ] Visualize matches data
- [ ] Fix tabs styling
- [ ] Implement basic CRUD
- [ ] Add images
- [ ] CONSTANTS for app name etc.
- [ ] Gravatar (`npm i gravatar`)


### Contributors
This repo was inspired by and relies heavily on the code from [@spencercarli](https://github.com/spencercarli/)'s awesome [Meteor Todos](https://github.com/spencercarli/meteor-todos-react-native)
