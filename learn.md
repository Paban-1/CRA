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

<pre><code>
  userSchema.pre(<span style="color:green;">/^find/</span>, function (next) {
    this.<span style="color:yellow;">where</span>({ removed: false })
    next()
  })
</code></pre>

## What dose <span style="color:green;"> /^find/</span>  mens ? 
+ This will tergate all find queries to do somthing, like in this case add <b>{ removed : false }</b>

## What dose <span style="color:yellow;"> where</span> do ?
+ This is responsible to add { removed : false } this line to the queries, basically this do add this like after what ever another queries passed <b>User.findById({ _id: id, removed: false })</b> so after add id, <span style="color:yellow;"> where</span> will add <b>removed: false.</b>
