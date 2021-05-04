# gulp-docker-notify

When running Gulp inside a container, you can use this plugin to get desktop notifications on your host. 

# Installation
Add this plugin as a devDepenency with `npm install --save-dev gulp-docker-notify`.
See the `gulpfile.js` in the examples folder for a simple example.
When notifying about an errror, the `dockerNotify` function takes a third parameter `error` (Default: **false**).


# Host setup
On your host you need to have the agent running which receives the notifications and relays them to the notification daemon of your operating system.
 - Use [macos-gulp-notifications](https://github.com/codemonauts/macos-gulp-notifications) for macOS

 - Use [linux-gulp-notifications](https://github.com/codemonauts/linux-gulp-notifications) for Linux

Build with with ❤ by [codemonauts](https://codemonauts.com)
