# Node.js Starter Overview

The Node.js Starter demonstrates a simple, reusable Node.js web application based on the Express framework.

## Run the app locally

1. [Install Node.js][]
2. Download and extract the starter code from the Bluemix UI
3. cd into the app directory
4. Run `npm install` to install the app's dependencies
5. Run `npm start` to start the app
6. Access the running app in a browser at http://localhost:6001

[Install Node.js]: https://nodejs.org/en/download/


Run app on cloud foundry

From the folder that has the manifest file
1. run 'cf push'
2. If it fails with the following error:
Done uploading               
FAILED
Error processing app files: Error uploading application.
The resource file mode is invalid: File mode '0555' is invalid.

Run this command as sudo:
chmod -R 744 ./node_modules/*


