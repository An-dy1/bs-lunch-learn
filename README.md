1. First run:

- with all default configs
- run through test results (viewports, labels, where they're saved, bitmaps)
- point out: top image not loading

2. Second run:

- Add a one second delay
- run `backstop accpet` // TODO: check this is the command

3. Third run:

- Additional delay to get a different picture up top; maybe other things different as well

4. Fourth run:

- Run non-headless
- Also ignore typed paragraph

5. Fifth run:

- I'm not seeing this little animation
- Inspect and see that they aren't unique except for their content
- Question: can I select the first or second, etc. of these elements?
- I don't know
- A few ways of handling:
  1. Let's scroll to and then add a post-interaction wait
  2. Look at only this element and add a delay