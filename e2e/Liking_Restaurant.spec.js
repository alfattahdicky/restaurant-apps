/* eslint-disable codeceptjs/no-pause-in-scenario */
const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favourite');
});

Scenario('liking one restaurant', async (I) => {
  I.amOnPage('/');

  I.seeElement('.post_title a');

  const firstFilm = locate('.post_title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post_title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('unlike one restaurant', (I) => {
  I.dontSeeElement('.post-item');

  I.amOnPage('/');

  I.seeElement('.post_title a');
  I.click(locate('.post_title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');

  I.seeElement('.post-item');
  I.seeElement('.post_title a');
  I.click(locate('.post_title a'));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.dontSeeElement('.post-item');
});
