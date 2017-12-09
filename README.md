# 147activated

Activated is application designed by us over the course of taking Stanford's Introduction to Human Computer Interaction class (CS 147, Fall 2017). High school students, especially those in low-income communities, may have very little access to personal counseling and feel lost or misguided in their path to get to college. It is designed to be a personal counselor, agenda, and motivator all in one to provide assistance in the face of a deficit of personalize academic guidance.

## Development
This application was written using React Native and relies on a number of open-source packages for some of the features in the mobile application. With React Native, this application can be deployed on both iOS and Android devices.

### Prerequisites
The application is deployed using a third-party application, Expo XDE, which must be installed first.

Expo can be installed on both desktop and mobile devices: https://expo.io/tools

If running on desktop, to simulate the iOS version, you must have Xcode installed: https://developer.apple.com/xcode/downloads/
If running on desktop, our package manager must be installed as well. Packages were installed and managed using npm: https://www.npmjs.com

## Running

### Mobile
Within the Expo mobile application, scan the QR code found here: https://expo.io/@jennylihan/activated

### Desktop
In terminal, type in the following commands:

```
$ git clone https://github.com/jennylihan/147activated.git
$ npm install
$ react-native link
```

Open the project within the Expo XDE application, and click the 'Device' button to simulate it on your desktop.

## Testing

### End-to-end tests
* Users will be able to click through goals on the Map screen and see their tasks associated with each goal.
* Users will be able to click through those tasks and see more information on it, with the option to share and edit (edit has not been implemented).
* Users will be able to see their goals for the week on the Calendar screen.
* Users will be able to see tasks shared with them on the Notification screen and then add them to their calendar (completed add functionality has not be implemented).
* Users will be able to add their own task on the Add screen, personalizing it with their own details and add it to their list of tasks (completed add functionality has not be implemented).

## Built With
* [React Native](https://facebook.github.io/react-native/) - Libraries that allowed us to build a mobile application using only Javascript
* [Expo XDE](https://expo.io/tools) - Deployment tool
* [npm](https://www.npmjs.com) - Package manager

## Authors
* Jenny Han
* Cindy Nguyen
* Angelica Willis
* Flora Wang

## Acknowledgments
* CS 147 Instructors
* Section peers for their feedback
* Students at Fremont High and Independence High
