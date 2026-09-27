import {test} from 'node:test';
import assert from 'node:assert/strict';
import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
test('teacher completes the demo, approvals persist, drafts stay out of exports, and mobile fits',async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1050},reducedMotion:'reduce'});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await fs.mkdir('.qa',{recursive:true});
 try{
 await page.goto('http://127.0.0.1:5173');await page.getByRole('heading',{name:/Good afternoon/}).waitFor();await page.screenshot({path:'.qa/dashboard.png',fullPage:true});
 await page.getByRole('button',{name:'Reports',exact:true}).click();await page.getByRole('button',{name:'Preview report',exact:true}).click();assert.match(await page.getByLabel('Report preview').inputValue(),/No approved scores yet/);assert.doesNotMatch(await page.getByLabel('Report preview').inputValue(),/Aziza Abdullayeva/);assert.equal(await page.getByRole('button',{name:'Simulate sync (0)'}).isDisabled(),true);await page.getByRole('button',{name:'Dashboard',exact:true}).click();
 await page.getByRole('button',{name:'Grade new assignment',exact:true}).click();
 await page.getByLabel('Assignment title').fill('Pilot Algebra Test');await page.getByRole('button',{name:'Continue',exact:true}).click();
 await page.getByRole('button',{name:'Student work',exact:true}).click();await page.getByRole('button',{name:'Try with 28 sample papers'}).click();
 await page.getByRole('button',{name:'Analyze sample class'}).click();await page.getByRole('button',{name:'Review suggested grades'}).click({timeout:20000});
 await page.getByRole('heading',{name:'Pilot Algebra Test',exact:true}).waitFor();
 await page.getByRole('button',{name:'Approve all green (25)'}).click();
 let data=await page.evaluate(()=>JSON.parse(localStorage.getItem('tanaffus-v1')));assert.equal(data[0].papers.filter(p=>p.approved).length,25);assert.equal(data[0].papers.find(p=>p.trust==='red').approved,false);
 await page.screenshot({path:'.qa/queue.png',fullPage:true});
 await page.getByRole('button',{name:/Madina Ismoilova Handwriting/}).click();
 assert.equal(await page.getByRole('button',{name:'Approve result',exact:true}).isDisabled(),true);
 await page.screenshot({path:'.qa/review.png',fullPage:true});
 await page.getByLabel('I reviewed the work and entered my own judgment.').check();await page.getByRole('button',{name:'Approve result',exact:true}).click();
 await page.getByRole('button',{name:'Back to review queue'}).click();
 for(const name of ['Aziza Abdullayeva','Javohir Rasulov']){await page.getByRole('button',{name:new RegExp(name+' Check reasoning')}).click();await page.getByLabel('Question 1 score').fill('4');await page.getByRole('button',{name:'Approve result',exact:true}).click();await page.getByRole('button',{name:'Back to review queue'}).click()}
 await page.getByRole('heading',{name:'Assignment complete. Take a breath.'}).waitFor();await page.reload();await page.getByRole('heading',{name:'Assignment complete. Take a breath.'}).waitFor();
 data=await page.evaluate(()=>JSON.parse(localStorage.getItem('tanaffus-v1')));assert.equal(data[0].papers.filter(p=>p.approved).length,28);assert.equal(data[0].papers[0].scores[0],4);
 await page.getByRole('button',{name:'Class results',exact:true}).click();await page.getByRole('heading',{name:'Every grade tells a story.'}).waitFor();await page.screenshot({path:'.qa/results.png',fullPage:true});
 await page.getByRole('button',{name:'Explore Mistake Radar',exact:true}).click();await page.getByRole('heading',{name:'Mistake Radar',exact:true}).waitFor();await page.screenshot({path:'.qa/radar.png',fullPage:true});
 await page.getByRole('button',{name:'Generate practice question',exact:true}).click();await page.getByText(/Sample activity: Solve 5x/).waitFor();
 await page.getByRole('button',{name:'Reports',exact:true}).click();await page.getByRole('button',{name:'Preview report',exact:true}).click();assert.match(await page.getByLabel('Report preview').inputValue(),/28\/28 grades approved/);
 const [download]=await Promise.all([page.waitForEvent('download'),page.getByRole('button',{name:'Download report',exact:true}).click()]);assert.ok(download.suggestedFilename().endsWith('.txt'));await page.screenshot({path:'.qa/reports.png',fullPage:true});
 await page.getByRole('button',{name:'Classes',exact:true}).click();await page.screenshot({path:'.qa/classes.png',fullPage:true});
 await page.getByRole('button',{name:/Grade 9A Mathematics/}).click();await page.getByRole('button',{name:'Aziza Abdullayeva',exact:true}).click();await page.getByRole('heading',{name:'Aziza Abdullayeva',exact:true}).waitFor();await page.screenshot({path:'.qa/student.png',fullPage:true});
 await page.getByRole('button',{name:'Students',exact:true}).click();await page.getByLabel('Search students',{exact:true}).fill('zzzzz');await page.getByRole('heading',{name:'No students found'}).waitFor();await page.getByLabel('Search students',{exact:true}).fill('');await page.screenshot({path:'.qa/students.png',fullPage:true});
 await page.getByRole('button',{name:'Settings',exact:true}).click();await page.screenshot({path:'.qa/settings.png',fullPage:true});
 await page.getByRole('button',{name:'Dashboard',exact:true}).click();await page.setViewportSize({width:390,height:844});await page.screenshot({path:'.qa/mobile-dashboard.png',fullPage:true});
 for(const route of ['dashboard','assignments','radar','reports','classes','students','results','review','settings']){await page.goto(`http://127.0.0.1:5173/#${route}`);await page.locator('main h1').waitFor();await page.waitForTimeout(350);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),`overflow at ${route}`);await page.screenshot({path:`.qa/mobile-${route}.png`,fullPage:true})}
 assert.deepEqual(errors,[]);
 }finally{await browser.close()}
});
