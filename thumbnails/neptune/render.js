const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:720}});
for(const n of process.argv.slice(2)){await p.goto('file://'+process.cwd()+'/'+n+'.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(200);await p.screenshot({path:n+'.png'});}
await b.close();})();
