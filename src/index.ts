import { firefox } from 'playwright';

(async () => {
  const context = await firefox.launch( {
    headless: false,
  });

  const page = await context.newPage();
  await page.goto('https://www.property.com.au/vic/mount-waverley-3149/sesame-st/12-pid-3945769/');
})();
