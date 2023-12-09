# N320Final

- To be completely honest, I think I made a massive mistake at the beginning of this assignment, and didn't realize how much of a problem it was until way to late to start over. The mistake was mostly in the structuring of the website itself, having the data being held in the parent, and using the provide/inject method to send the data to child components
- The issue mainly came somewhat with transferring data between parent to child, in it's current state, I am able to send data from the child component (the selectedSessions array) into the parent function, and I am able to use the provide/inject method to send it back to the UserView child component. The problem is that it is static, and cannot easily be updated, so it is permanantly stuck with an empty array
- The other features work, like filtering out sessions, routing between pages, and adding sessions to another array/changing properties for them. As a small consolation, I have a part at the bottom of SessionView that displays the selected sessions.
- I understand that this final is pretty underbaked, and that my fatal flaw was realizing the critical mistake in my programming until it was too late to restart the project.

# Web 4 Link

https://in-info-web4.informatics.iupui.edu/~eplagge/N320/final/src
