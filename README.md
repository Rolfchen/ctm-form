# CTM Form Test

## Requirements

A basic two-step form, that captures user details and address and then displays the result after submission.

The website must not use form building libraries or polyfill.

## NPM Actions

`npm start` to start the application on port 9002

`npx run test` to run unit tests

`npm run functest` to run functional tests using cypress

`npm run build` to build the application to dist

## Technology

This is a simple SPA website setup using React Router and uses React Context for state management.

## Distribution Usage

Run an `npm run build` to build the bundle in the **dist** directory. The bundle is setup as a library with a **mountForm** function. At the bottom of the hosting page (i.e. index.html, index.php), add a `<script>` tag with the following:

```javascript
// domId is the ID of the dom element to mount (<div id="domId">). The default is "root"
ctmForm.mountForm("domId");
```

Please note that you may need to setup necessary config files (i.e. .htaccess) to route all traffic to the index.html.
