(async function () {

    // 启用自动拾取的实时任务
    dispatcher.addTimer(new RealtimeTimer("AutoPick"));

    log.info('自动调查离传送点较近的狗粮。请使用琳妮特前台，双风共鸣。并保证所有传送点都已经激活！');

    async function captureCrystalfly(locationName, x, y, num) {
        log.info('前往 {name}', locationName);
        await genshin.tp(x, y);
        await sleep(1000);
        //log.info('尝试捕捉晶蝶, {num}只', num);
        let filePath = `assets/${locationName}.json`;
        await keyMouseScript.runFile(filePath);
    }


    await captureCrystalfly('须弥城', 2786, -503);
    await captureCrystalfly('须弥城右', 2694, -416);
    await captureCrystalfly('须弥城左上', 2876, -292);  
    await captureCrystalfly('圣显厅南', 4271, -1666);  
    await captureCrystalfly('神的棋盘', 5759, -1309); 
    await captureCrystalfly('枫丹廷', 4509, 3630);
    await captureCrystalfly('欧庇克莱歌剧院右下', 3595, 3254); 
    await captureCrystalfly('学术会堂', 4144, 4424); 
    await captureCrystalfly('芒索斯山东', 4985, 4463); 
    await captureCrystalfly('科学院西', 4498, 4711);
    await captureCrystalfly('科学院北', 4434, 5092);
    await captureCrystalfly('科学院西北1', 4624, 4952);  
    await captureCrystalfly('科学院西北2', 4624, 4952);
    await captureCrystalfly('海露港', 4984, 1700);
    await captureCrystalfly('佩特莉可镇', 4322, 1172);
    await captureCrystalfly('奥藏山', 1451, 1029);     
    //await captureCrystalfly('绝云间1', 1226, 566);
    await captureCrystalfly('沉玉谷码头', 1113, 1948);
    await captureCrystalfly('沉玉谷狗洞', 1114, 1948);
    await captureCrystalfly('酒窖', 730, 1062);
    await captureCrystalfly('轻策庄', 547, 1767);
    await captureCrystalfly('地中之盐', -164, 1183);
    await captureCrystalfly('沉眠之庭1', -4185, -4244);
    await captureCrystalfly('沉眠之庭2', -4185, -4244);
    await captureCrystalfly('神无冢', -3405, -3534);
    //await captureCrystalfly('海祈岛', -1315, -3776);
})();