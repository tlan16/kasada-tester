import { chromium } from 'playwright';
import { newInjectedContext } from 'fingerprint-injector';

(async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
  });
  const context = await newInjectedContext(
    browser,
    {
      // Constraints for the generated fingerprint (optional)
      fingerprintOptions: {
        devices: ['mobile'],
        operatingSystems: ['macos'],
      },
      // Playwright's newContext() options (optional, random example for illustration)
      newContextOptions: {
        geolocation: {
          latitude: -37.840935,
          longitude: 144.946457,
        },
      },
    },
  );

  const page = await context.newPage();
  await page.goto('https://www.property.com.au/');
})();
