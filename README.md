### Start application with Expo
`expo start`
Run application on Android
### Start sanity development server
`cd sanity`
`yarn sanity start`

### Whitelist localhost:19000
whitelist wherever localhost endpoint you're working with you can do this from sanity.io/manage in API and add the url or by running the command:

`yarn sanity cors add http://localhost:19000`

### To deploy sanity
You can simply run the command and access from anywhere

`yarn sanity deploy`
