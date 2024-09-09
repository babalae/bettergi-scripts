(async function () {

    // 启用自动拾取的实时任务
    dispatcher.addTimer(new RealtimeTimer("AutoPick"));

    log.info('自动调查离传送点较近的狗粮。请使用琳妮特前台，双风共鸣。并保证所有传送点都已经激活！');

    async function captureCrystalfly(locationName, x, y, num) {
        log.info('前往 {name}', locationName);
        await genshin.tp(x, y);
        await sleep(1000);
        log.info('此处{num}个点位', num);
        let filePath = `assets/${locationName}.json`;
        await keyMouseScript.runFile(filePath);
    }

    await captureCrystalfly('须弥城', 2786, -503, 1);
    await captureCrystalfly('须弥城东', 2694, -416, 1);
    await captureCrystalfly('须弥城西北', 2876, -292, 1);  
    await captureCrystalfly('枫丹廷1', 4509, 3630, 1);
    await captureCrystalfly('枫丹廷2', 4509, 3630, 2);
    await captureCrystalfly('欧庇克莱歌剧院东南', 3595, 3254, 1); 
    await captureCrystalfly('学术会堂', 4144, 4424, 1); 
    await captureCrystalfly('芒索斯山东1', 4985, 4463, 1); 
    await captureCrystalfly('芒索斯山东2', 4985, 4463, 1); 
    await captureCrystalfly('科学院北', 4434, 5092, 1);
    await captureCrystalfly('科学院西北1', 4624, 4952, 1);  
    await captureCrystalfly('科学院西北2', 4624, 4952, 1);
    await captureCrystalfly('佩特莉可神像', 4454, 1255, 1);
    await captureCrystalfly('佩特莉可镇', 4322, 1172, 1);
    await captureCrystalfly('奥藏山', 1451, 1029, 2);     
    await captureCrystalfly('沉玉谷码头', 1113, 1948, 1);
    await captureCrystalfly('沉玉谷狗洞', 1114, 1948, 1);
    await captureCrystalfly('荻花洲西', 730, 1062, 1);
    await captureCrystalfly('望舒客栈', 330, 874, 1);
    await captureCrystalfly('轻策庄', 547, 1767, 1);
    //await captureCrystalfly('石门', 207, 1573, 1);
    await captureCrystalfly('地中之盐', -164, 1183, 3);
    await captureCrystalfly('酒窖', 730, 1062, 5);
    await captureCrystalfly('神无冢1', -3405, -3534, 1);
    await captureCrystalfly('神无冢2', -3405, -3534, 2);
    await captureCrystalfly('海祈岛', -1315, -3776, 2);
    await captureCrystalfly('沉眠之庭1', -4185, -4244, 2);
    await captureCrystalfly('沉眠之庭2', -4185, -4244, 1);
    await captureCrystalfly('浅濑神社', -3698, -4689, 3);
    await captureCrystalfly('鹤观神像', -3269, -6135, 1);
    await captureCrystalfly('楚汶市集', 9059, -1847, 1);
    await captureCrystalfly('虹灵的净土', 9038, -2428, 1);
    await captureCrystalfly('流泉之众', 8918, -2678, 1);
    await captureCrystalfly('圣显厅南', 4271, -1666, 1);
    await captureCrystalfly('海露港', 4984, 1700, 1);  
    await captureCrystalfly('神的棋盘', 5759, -1309, 1); 
    //await captureCrystalfly('科学院西', 4498, 4711);
    //await captureCrystalfly('黄金王兽北', -2612, -6507);
    //await captureCrystalfly('柴薪之丘', 9033, -1372, 1);
    //await captureCrystalfly('回声之子', 7530, -1353, 2);
})();