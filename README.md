# Additional Lecture Code: React 1
Additional examples demonstrating basic features of React components.

**The example code from the lecture is located in the `*.jsx` files under `/static/js/`. You can change the file `templates/main.html` to load up different `*.jsx` files in order to demo the various React features.**

(Last Updated 10/20/22)
## Setup 
These examples are just HTML and Javascript, but they need to be run from a server in order to prevent issues with [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). (This isn't too important to understand now - just know that you have to run a server in order for it to work!)
 
	virtualenv env
	source env/bin/activate
	pip3 install -r requirements.txt
	python3 server.py

Open a browser and navigate to `localhost:5000`. 
