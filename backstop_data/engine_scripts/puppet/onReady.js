module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // const user = "someUsername";
  // const pass = "somePassword";

  // await page.click('.button');

  // page
  //   .waitForSelector('#username')
  //   .then(() => console.log('First URL with image'));
  // await page.focus('#username');
  // await page.keyboard.type(user);
  // await page.focus('#password');
  // await page.keyboard.type(pass);
  // await page.click('.MuiButton-label');

  // await page.waitFor('.file-upload-form');
  // console.log('LoggedIn successfully!!!');

};