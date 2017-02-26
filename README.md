# [Star-Wars RPG](http://www.bambielli.com/star-wars-rpg/)
Prep for "live coding" session to happen later this week at the bootcamp.
This was week4 homework for students.

Thoughts:

1) [Delegated events](https://learn.jquery.com/events/event-delegation/) are pretty awesome! Allows you to attach events to elements that haven't been added to the dom yet.

```
$('#element-in-dom').on('click', 'selector-for-dynamic-element', function(){
  ...
})
```

2) Make click handlers generic! Don't write separate ones for each element on the page.

3) Keep as much data out of the dom as possible.

4) I don't like how much DOM manipulation I'm doing.

5) Testing this would be an absolute nightmare.

6) I left a lot of comments and console.log statements on purpose, to help better explain my design decisions / thoughts.

7) Students should not only deploy their static sites to heroku, but should also deploy to github pages!

