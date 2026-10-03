async function run() {
  const ws = new WebSocket('ws://127.0.0.1:9222/devtools/page/3563AC3EBB740E37D45341FE948B6D7C');
  await new Promise(r => ws.onopen = r);

  const code = `(() => {
    try {
      // 0. Hero Section
      const heroSection = document.querySelector('main > section:nth-child(1)');
      const heroBadges = heroSection.querySelector('ul');
      const heroBadgesR = heroBadges.getBoundingClientRect();
      const heroSecR = heroSection.getBoundingClientRect();

      // 1. About Section
      const aboutSec = document.querySelector('#about');
      const aboutSecR = aboutSec.getBoundingClientRect();
      const aboutTag = Array.from(aboutSec.querySelectorAll('*')).find(el => el.textContent.trim() === 'About Us' && el.children.length === 0);
      const aboutTagR = aboutTag ? aboutTag.getBoundingClientRect() : { top: 0 };
      const readMoreBtn = aboutSec.querySelector('a[href="/about"]');
      const readMoreR = readMoreBtn ? readMoreBtn.getBoundingClientRect() : { bottom: 0 };

      // 2. Services Section
      const servSec = document.querySelector('#services');
      const servSecR = servSec.getBoundingClientRect();
      const servCard = servSec.querySelector('.container-x > div');
      const servCardR = servCard ? servCard.getBoundingClientRect() : { top: 0, bottom: 0 };
      const servTag = Array.from(servSec.querySelectorAll('*')).find(el => el.textContent.trim() === 'Our Services' && el.children.length === 0);
      const servTagR = servTag ? servTag.getBoundingClientRect() : { top: 0 };

      // 3. Why Us Section
      const whySec = document.querySelector('#why-us');
      const whySecR = whySec.getBoundingClientRect();
      const whyCard = whySec.querySelector('.container-x > div');
      const whyCardR = whyCard ? whyCard.getBoundingClientRect() : { top: 0, bottom: 0 };
      const whyBtn = whySec.querySelector('a[href="/book-now"]');
      const whyBtnR = whyBtn ? whyBtn.getBoundingClientRect() : { bottom: 0 };

      // 4. Projects Section
      const projSec = document.querySelector('#projects');
      const projSecR = projSec.getBoundingClientRect();
      const projTag = Array.from(projSec.querySelectorAll('*')).find(el => el.textContent.trim() === 'Our Recent Work' && el.children.length === 0);
      const projTagR = projTag ? projTag.getBoundingClientRect() : { top: 0 };
      const projDots = projSec.querySelector('.mt-6, .mt-8, [class*="justify-center"]');
      const projDotsR = projDots ? projDots.getBoundingClientRect() : { bottom: 0 };

      // 5. CTA Section
      const ctaSec = document.querySelector('main > section:nth-child(6)');
      const ctaSecR = ctaSec.getBoundingClientRect();
      const ctaCard = ctaSec.querySelector('.container-x > div');
      const ctaCardR = ctaCard ? ctaCard.getBoundingClientRect() : { top: 0, bottom: 0 };

      // 6. Testimonials Section
      const testSec = document.querySelector('#testimonials');
      const testSecR = testSec.getBoundingClientRect();
      const testTag = Array.from(testSec.querySelectorAll('*')).find(el => el.textContent.trim() === 'Testimonials' && el.children.length === 0);
      const testTagR = testTag ? testTag.getBoundingClientRect() : { top: 0 };

      return {
        gap_HeroBadges_to_AboutTag: Math.round(aboutTagR.top - heroBadgesR.bottom),
        gap_HeroBottom_to_AboutTop: Math.round(aboutSecR.top - heroSecR.bottom),
        aboutPaddingTop: window.getComputedStyle(aboutSec).paddingTop,
        gap_AboutReadMore_to_ServCard: Math.round(servCardR.top - readMoreR.bottom),
        gap_AboutReadMore_to_ServTag: Math.round(servTagR.top - readMoreR.bottom),
        gap_ServCard_to_WhyCard: Math.round(whyCardR.top - servCardR.bottom),
        gap_WhyBtn_to_WhyCardBottom: Math.round(whyCardR.bottom - whyBtnR.bottom),
        gap_WhyCard_to_ProjSection: Math.round(projSecR.top - whyCardR.bottom),
        gap_WhyCard_to_ProjTag: Math.round(projTagR.top - whyCardR.bottom),
        gap_WhyBtn_to_ProjTag: Math.round(projTagR.top - whyBtnR.bottom),
        gap_ProjDots_to_ProjBottom: Math.round(projSecR.bottom - projDotsR.bottom),
        gap_ProjDots_to_CtaCard: Math.round(ctaCardR.top - projDotsR.bottom),
        gap_CtaCard_to_TestTag: Math.round(testTagR.top - ctaCardR.bottom),
      };
    } catch(e) {
      return { error: e.message, stack: e.stack };
    }
  })()`;

  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: { expression: code, returnByValue: true }
  }));

  const msg = await new Promise(r => ws.onmessage = m => r(JSON.parse(m.data)));
  console.log(JSON.stringify(msg.result.result.value, null, 2));
  ws.close();
}

run().catch(console.error);
