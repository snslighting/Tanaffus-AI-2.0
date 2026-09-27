import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
await fs.mkdir('.qa',{recursive:true});await fs.mkdir('public/screens',{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1050},reducedMotion:'reduce'});
await page.goto('http://127.0.0.1:5173');
for(const route of ['dashboard','assignments','review','results','radar','classes','students','student','reports','settings']){
 await page.goto(`http://127.0.0.1:5173/#${route}`);await page.locator('main h1').waitFor();await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1100);
 if(route==='reports'){await page.getByRole('button',{name:'Preview report',exact:true}).click()}
 await page.screenshot({path:`.qa/${route}.png`,fullPage:true});
 if(['dashboard','review','radar'].includes(route))await page.screenshot({path:`public/screens/${route}.png`,clip:{x:242,y:79,width:1198,height:971}});
}
await page.setViewportSize({width:390,height:844});
for(const route of ['dashboard','review','radar','reports','classes','students','results','settings']){await page.goto(`http://127.0.0.1:5173/#${route}`);await page.locator('main h1').waitFor();await page.waitForTimeout(800);await page.screenshot({path:`.qa/mobile-${route}.png`,fullPage:true})}
await browser.close();
