# week-4-homework
Taking a crack at the homework from week4 of the NU Web Developer Bootcamp

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

5) I left a lot of comments and console.log statements on purpose, to help better explain my thoughts.
