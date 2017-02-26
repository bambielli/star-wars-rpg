# [Star-Wars RPG](http://www.bambielli.com/week-4-homework/)
Taking a crack at the homework from week4 of the NU Web Developer Bootcamp.
Prep for "live coding" session to happen later this week.

Thoughts:

1) [Delegated events](https://learn.jquery.com/events/event-delegation/) are pretty awesome! Allows you to attach events to elements that haven't been added to the dom yet.

```
$('#element-in-dom').on('click', 'selector-for-dynamic-element', function(){
  ...
})
```

2) Keep as much data out of the dom as possible.

3) I don't like how much DOM manipulation I'm doing.

4) Testing this would be an absolute nightmare.

5) I left a lot of comments and console.log statements on purpose, to help better explain my design decisions / thoughts.

6) Make click handlers generic! Don't write separate ones for each element on the page.
