import splitbee from "@splitbee/web"

// This initiliazes Splitbee.js
splitbee.init({
    // To use Splitbee on another subdomain.
    // Token can be found in project settings
    token: process.env.Splitbee_Token, 
    
    // Enable cookie-less mode. Defaults to `false`
    disableCookie: false,
    
    // // Set custom urls when using proxying
    // scriptUrl: "https://cdn.splitbee.io/sb.js",
    // apiUrl: "https://hive.splitbee.io",
  })
