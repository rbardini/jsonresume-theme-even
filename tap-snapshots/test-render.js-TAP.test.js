/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/render.js TAP renders a resume > must match snapshot 1`] = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Richard Hendriks</title>
    <meta name="description" content="Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
    <style>:root {
  /* Colors */
  --primaryColor: #212529;
  --secondaryColor: #95a5a6;
  --accentColor: #f1c40f;
  --linkColor: #2ecc71;
  --mutedColor: #f4f6f6;

  /* Typography */
  --ratio: 1.25;
  --scale0: 1rem;
  --scale1: calc(var(--scale0) * var(--ratio));
  --scale2: calc(var(--scale1) * var(--ratio));
  --scale3: calc(var(--scale2) * var(--ratio));
  --scale4: calc(var(--scale3) * var(--ratio));
  --scale5: calc(var(--scale4) * var(--ratio));
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

body {
  color: var(--primaryColor);
  display: grid;
  font: 1em/1.5 Lato, sans-serif;
  gap: 2em;
  grid-template-columns:
    [full-start]
    1fr
    [main-start side-start]
    minmax(min-content, 12em)
    [side-end content-start]
    minmax(min-content, 36em)
    [main-end content-end]
    1fr
    [full-end];
  grid-template-rows: auto [content] 0;
  margin-bottom: 4em;
}

body::before {
  content: '';
  grid-column: full;
  grid-row: content;
}

ol,
ul {
  padding-left: 1em;
}

li + li {
  margin-top: 0.2em;
}

li::marker {
  color: var(--mutedColor);
}

a {
  color: var(--linkColor);
  text-decoration: none;
  transition: color 0.2s;
}

a:focus,
a:hover {
  color: var(--accentColor);
}

h1,
h2,
h3,
h5 {
  font-weight: normal;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

h1 {
  font-size: var(--scale5);
}

h2 {
  color: var(--secondaryColor);
  font-size: var(--scale4);
}

h3 {
  color: var(--accentColor);
  font-size: var(--scale3);
  grid-column: side;
  margin-bottom: 1rem;
}

h4 {
  font-size: var(--scale2);
}

h5 {
  font-size: var(--scale1);
}

h6 {
  font-size: var(--scale0);
}

blockquote {
  border-left: 0.2em solid var(--mutedColor);
  padding-left: 1em;
}

cite {
  color: var(--secondaryColor);
  font-style: inherit;
}

cite::before {
  content: '— ';
}

.masthead {
  background: var(--mutedColor);
  display: inherit;
  gap: inherit;
  grid-column: full;
  grid-template-columns: inherit;
  padding: 4em 0;
  row-gap: 0;
}

.masthead > *,
section {
  grid-column: main;
}

article > * + *,
blockquote > * + * {
  margin-top: 0.6em;
}

.stack {
  display: grid;
  gap: 1.5em;
}

.grid-list {
  display: grid;
  gap: 1em;
}

.spaced-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spaced-list:first-child::before {
  border-bottom: 1px solid var(--mutedColor);
  content: '';
  flex-grow: 1;
  margin: 0 1em;
  order: 1;
}

.spaced-list > :nth-child(2) {
  order: 2;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.tag-list > li {
  background: var(--mutedColor);
  margin: 0 0.2em 0.2em 0;
  padding: 0.2em 0.6em;
}

@media print, (min-width: 48em) {
  h3 {
    text-align: right;
    margin-bottom: inherit;
  }

  .masthead > *,
  section {
    grid-column: content;
  }

  section {
    display: contents;
  }

  .grid-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
  </head>
  <body>
      <header class="masthead">
          <h1>Richard Hendriks</h1>
          <h2>Programmer</h2>
      </header>
      <section id="contact">
        <h3>Contact</h3>
        <div class="grid-list">
            <div>
              <h4>Email</h4>
              <a href="mailto:richard.hendriks@mail.com">richard.hendriks@mail.com</a>
            </div>
            <div>
              <h4>Phone</h4>
              (912) 555-4321
            </div>
            <div>
              <h4>Website</h4>
              <a href="http://richardhendricks.example.com">richardhendricks.example.com</a>
            </div>
        </div>
      </section>
        <section id="about">
          <h3>About</h3>
          <article>
            <p>Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinal!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!</p>
          </article>
        </section>
        <section id="profiles">
          <h3>Profiles</h3>
          <div class="grid-list">
              <div>
                  <h4>Twitter</h4>
                    neutralthoughts
              </div>
              <div>
                  <h4>SoundCloud</h4>
                    <a href="https://soundcloud.example.com/dandymusicnl">dandymusicnl</a>
              </div>
          </div>
        </section>

      <section id="work">
        <h3>Work</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Pied Piper</h4>
                  <span>
                    <time datetime="2013-12-01">Dec 2013</time> –
                    <time datetime="2014-12-01">Dec 2014</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>CEO/President</strong>
                    <a href="http://piedpiper.example.com">piedpiper.example.com</a>
                </div>
              </header>
                <p>Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Build an algorithm for artist to detect if their music was violating copy right infringement laws</li>
                    <li>Successfully won Techcrunch Disrupt</li>
                    <li>Optimized an algorithm that holds the current world record for Weisman Scores</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="volunteer">
        <h3>Volunteer</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>CoderDojo</h4>
                  <span>
                    <time datetime="2012-01-01">Jan 2012</time> –
                    <time datetime="2013-01-01">Jan 2013</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Teacher</strong>
                    <a href="http://coderdojo.example.com/">coderdojo.example.com</a>
                </div>
              </header>
                <p>Global movement of free coding clubs for young people.</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Awarded &#x27;Teacher of the Month&#x27;</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>University of Oklahoma</h4>
                  <span>
                    <time datetime="2011-06-01">Jun 2011</time> –
                    <time datetime="2014-01-01">Jan 2014</time>
                  </span>
                </div>
                <div class="spaced-list">
                    <strong>Information Technology</strong>
                    <a href="https://www.ou.edu/">www.ou.edu</a>
                </div>
              </header>
                <p>Bachelor</p>
                <h5>Courses</h5>
                <ul>
                    <li>DB1101 - Basic SQL</li>
                    <li>CS2011 - Java Introduction</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="projects">
        <h3>Projects</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Miss Direction</h4>
                  <span>
                    <time datetime="2016-08-24">Aug 2016</time> –
                    <time datetime="2016-08-24">Aug 2016</time>
                  </span>
                </div>
                <div class="spaced-list">
                  <span>
                      <strong>Team lead, Designer</strong>
                      at <strong>Smoogle</strong>
                  </span>
                    <a href="missdirection.example.com">missdirection.example.com</a>
                </div>
              </header>
                <p>A mapping engine that misguides you</p>
                <h5>Highlights</h5>
                <ul>
                    <li>Won award at AIHacks 2016</li>
                    <li>Built by all women team of newbie programmers</li>
                    <li>Using modern technologies such as GoogleMaps, Chrome Extension and Javascript</li>
                </ul>
            </article>
        </div>
      </section>
      <section id="awards">
        <h3>Awards</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Digital Compression Pioneer Award</h4>
                    <time datetime="2014-11-01">Nov 2014</time>
                </div>
                <div class="spaced-list">
                    <div>
                      Awarded by <strong>Techcrunch</strong>
                    </div>
                </div>
              </header>
                <p>There is no spoon.</p>
            </article>
        </div>
      </section>
      <section id="publications">
        <h3>Publications</h3>
        <div class="stack">
            <article>
              <header>
                <div class="spaced-list">
                  <h4>Video compression for 3d media</h4>
                    <time datetime="2014-10-01">Oct 2014</time>
                </div>
                <div class="spaced-list">
                    <span>
                      Published by <strong>Hooli</strong>
                    </span>
                    <a href="http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)">en.wikipedia.org/wiki/Silicon_Valley_(TV_series)</a>
                </div>
              </header>
                <p>Innovative middle-out compression algorithm that changes the way we store data.</p>
            </article>
        </div>
      </section>
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
            <div>
                <h4>Web Development</h4>
                <ul class="tag-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div>
                <h4>Compression</h4>
                <ul class="tag-list">
                    <li>Mpeg</li>
                    <li>MP4</li>
                    <li>GIF</li>
                </ul>
            </div>
        </div>
      </section>
      <section id="languages">
        <h3>Languages</h3>
        <div class="grid-list">
            <div>
                <h4>English</h4>
              Native speaker
            </div>
        </div>
      </section>
      <section id="interests">
        <h3>Interests</h3>
        <div class="grid-list">
            <div>
                <h4>Wildlife</h4>
                <ul class="tag-list">
                    <li>Ferrets</li>
                    <li>Unicorns</li>
                </ul>
            </div>
        </div>
      </section>
      <section id="references">
        <h3>References</h3>
        <div class="stack">
              <blockquote>
                <p>It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.</p>
                  <p>
                    <cite>Erlich Bachman</cite>
                  </p>
              </blockquote>
        </div>
      </section>
  </body>
</html>

`
