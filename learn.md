<pre><code>
"scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js --ignore public/",
    "production": "NODE_ENV=production",
    <span style="color:green;">"setup": "node src/setup/setup.js", </span>
    "upgrade": "node src/setup/upgrade.js",
    "reset": "node src/setup/reset.js"
  },
</code></pre>

## Why setup.js code here ?
This code is abale to create first user at the database
this is for internal user/owner creation with open any public API/endpoint