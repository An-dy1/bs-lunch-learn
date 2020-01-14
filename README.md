# 0. Introduction:

- "BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time."
- Easy to use, easy to get started with, easy to integrate with CI/CD and, as their documentation notes, their test reports come with a cool scrubber thingy
- Node Package; if you have node you can have backstopjs in one easy payment of npm install -g!
- From there, you generate the config and data files by running backstop init within your project directory
- And now we can run our first tests
- Now, you'll notice that I have my backstop suite separate from my code base. That was just because my portfolio is standalone and for demonstration purposes I wanted to be able to mess around separately. But I could easily have generated these files within my project. So, one thing I'd like to hit on is that this tool is just as useful for developers as it is for testers. And you'll kind of see why as I continue on. Or, I could have initialized these backstop files from within a test suite, which is what we've done here on the projects that have this implemented on it.

# 1. First run:

- So please do not look too closely at this, but I'm going to run some sample tests on this little portfolio website I made a year ago when I was applying to this job! And the reason I chose it is because I can run this live locally, kind of emulating a developer's workflow, and because I don't have time to wait for code changes I push to move up to Github, which I'm using to host this site.
- with all default configs
- run through test results (viewports, labels, where they're saved, bitmaps)
- point out: top image not loading

# 1. First.Five run:

- Make a change to .contactButton on the page

# 2. Second run:

- Notice that loader appears in screenshot; Add a one second delay
- run `backstop approve` because this screenshot looks good
- Talk about file structure - it's all saved here in reference, test and html report. But we can specify other paths where I want this report saved. "ci_report" setting
- Also:
  ````
  "testReportFileName": "myproject-xunit", // in case if you want to override the default filename
  "testSuiteName" :  "backstopJS"```
  ````

# 3. Third run:

- Notice that I have a slider - this is dynamic content; one of the major things we try to deal with in visual testing. This could easily cause a test to fail.
- Additional delay to get a different picture up top; maybe other things different as well
- Show the test failure - run through the scrubber

# 4. Fourth run:

- Run non-headless
- # TODO:
  ```
  "debugWindow": false
  ```
- Also ignore typed paragraph
- Run new test; see that that's how I want BackstopJS to look at my site. Approve.

# 5. Fifth run:

- I'm not seeing this little animation
- Inspect and see that they aren't unique except for their content
- Question: can I select the first or second, etc. of these elements?
- I don't know
- A few ways of handling:

  1. Look at only this element and add a delay (just like you can exclue certain elements, you can also pick certain ones to look at, which is especially useful to a developer I think)
  2. Let's scroll to and then add a post-interaction wait and see what happens

# 6. Advanced scenarios (1):

- Olha's login

# 7. Advanced scenarios (2):

- The limits of my JavaScript abilities have been challenged by the Tennessee Tourism website. So, let me take you on a journey.
- # TODO: Pull up repos showing the issue?
- Remove mergeImgHack and show the problem
- URL: https://tnuser:tnpassword@www-qa.tnvacation.com

# Advanced scenarios (3):

- # TODO: Running in a Docker container
- # TODO: take screenshot from the backstopjs docs
- Text especially renders differently across OS. So if I backstop approve images from my Mac here, and I have a job scheduled through Jenkins to run a test tomorrow morning on the AQ server, which is Windows, I'm probably going to get a failing test.
- Docker containers:
- ```
  backstop test --docker
  ```
- The above flag will cause BackstopJS to hit your Docker local client, spin up the BackstopJS container at https://hub.docker.com/r/backstopjs/backstopjs/ and execute your test.

# General notes:

- Add javascript advanced scenario?
- Discuss merge image hack and open source
- Show Tennessee difficulty
- Maybe just do this from within the development code? Or explain that you could if you were a developer, easily integrate this into styling work; or you could put it in automated functional test code as well, which in fact we have done for Tennessee, for UR I believe, and for AAFP to some extent
