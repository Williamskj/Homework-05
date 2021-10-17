# Homework-05

##What I did and How I did it

This assignment was relatively simple from a first glance. The HTML is primarly built for you and All you need to do is add the corresponding container and time boxes/butons, then copy-paste them to however many hours you wish to keep track of. In my case, I kept track of 12 hours; 8 am to 8 pm. The js was difficult to find a way to loop through the time and monitoring the current hour. Luckily I found a lovely example on using parseInt, which still gave me trouble with the proper coloring of the text inputs, till I descovered that in order to monitor my time blocks, I needed to change their name to hour#, in order for the .split(hour)[1] to keep track of the specific hours, which was annoying, but relatively an easy solution. After that, I used my code quiz as a resource for local storage and the rest was cake. One of the easier assignments I've been given
