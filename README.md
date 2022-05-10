# Timer-App-with-JavaScript

This is an application that allows you to set a timer. It works like a stop watch and will count down from a number of seconds. I created it with vanilla JavaScript.

<h3>Issues faced & resolution:</h3>
I struggled with finding a way to give the circle's stroke attribute a gradient color. However, I was able to resolve this by setting the linearGradient in the <b>def</b> attribute like so:

                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#43919B" />
                    <stop offset="100%" stop-color="#30AADD" />
                    </linearGradient>
                </defs>

<h3>Technology used:</h3>

- HTML
- CSS
- JavaScript
- GitHub
- Netlify

<h3>Link to site:</h3>
https://timer-app1.netlify.app/

<h3>Screenshot:</h3>
<img width="729" alt="Screen Shot 2022-04-05 at 9 28 23 PM" src="https://user-images.githubusercontent.com/40691059/161817490-6f4f54de-6234-4c1e-a119-f24f332aa2d5.png">
