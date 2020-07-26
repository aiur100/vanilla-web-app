# My Vanilla Focused Framework

@Author Christopher R. Hill (Chill)

I'm tired of the mental stress of trying to stay on-top of the latest JS tooling trends.
I do love a lot of them, but I when I just want to hack-out an idea, I am not particularly good creating the starter apps again, and understanding framework architectures.

So, I made me own *stupid* simple that works for me.

This is my own starter framework that allows me to create a web-app without the use 
of webpack and other bundlers.  I can't keep track of every bundler and best practice when I am trying to just quickly prototype something.  Of course, in many cases, after creating an idea, you might want to leverage Vue, or Angular to really build something -- or you can just doing things this way.

I use ES6 import modules and focus on having a specific JS file per page. 
There is no HTML templating. In some cases I will render HTML using JavaScript, but for the most part, that's only for some interactions. 

Every webpage is an HTML document that references the CSS you want to use, and the JavaScript you want to use. 

## Controversial Things I am doing
* I use Bootstrap 5.
* ES6 Modules Works, so I just map the node_module directory of my UI framework and deploy. **However, I do not put the node_modules directory in this repo** -- **Example below...**
	* This means, my JavaScript reference is `<script type="module" src="main.js"></script>`
	* And the `main.js` script will use `import` statements to bring in code.  This may seem obvious to many of you, but when I found out that browsers could do that now, I flipped out.
* Each HTML page should only use JS that is needed.  No big bundles, except for Bootstrap, right.  But I might be using the various modules where I need them. 

## Using this
* Clone it.
* Then, `cd` into the directory and `rm -rf .git` so you can use your own repo.
* `index.html`,`login.html`,`sign-up.html` change the "My App" values to your app.
* Get a local http server going and start hacking. 




