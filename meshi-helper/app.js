/********************************************
 * 全局变量 & 初始化
 ********************************************/
const STORAGE_KEY = 'meshi_helper_foods';
const TODAY_KEY = 'meshi_helper_today';

const FOOD_QUOTES = [
    "人生苦短，再来一碗。",
    "唯有美食与爱不可辜负。",
    "今天也是被食物治愈的一天。",
    "吃饱了才有力气减肥。",
    "食物是世界上最温柔的武器。",
    "没有什么是一顿火锅解决不了的，如果有，就两顿。",
    "再简单的食物都有自己的灵魂。",
    "享受美食的时间是快乐的，等待美食出炉的时间是更快乐的。",
    "吃点好的吧。",
    "散伙是人生常态，我们又不是什么例外。只是我偶尔会想，假如那天真能重来一次，应该过得再庄严一点，正式地吃一顿饭，拍一张照片，好好看着对方的眼睛说声永别。",
    "记得吃颗糖吧，也记得吃些盐。",
    "如果有一天，你想起了一个人，以及和他在一起吃的食物。那个时候，你就知道，孤独的味道尝起来是如何的。",
    "有些东西，自己尽可不吃，但不要反对旁人吃。不要以为自己不吃的东西，谁吃，就是岂有此理。一个人口味要宽一点，杂一点。对食物如此，对文化或者其他的东西也是一样。",
    "在夏天，我们吃绿豆，桃，樱桃和甜瓜。在各种意义上都漫长且愉快，日子发出声响。",
    "人如果吃不好，就不能好好思考，好好爱，好好睡觉。",
    "蚜虫吃青草，锈吃铁，虚伪吃灵魂。",
    "吃，喝，享受幸福，接受奇迹。",
    "忧来无方，窗外下雨，坐沙发，吃巧克力，读狄更斯，心情又会好起来，和世界妥协。"
];

// 默认示例数据
const DEFAULT_FOODS = [
    { id: 1, name: '三文鱼波奇饭', category: '主食', link: 'https://m.tb.cn/h.ixPoK4e', rating: 8, orderCount: 1, lastOrdered: '2026-05-05', image: 'https://s3.bmp.ovh/2026/05/06/n4TYmeHZ.jpg', price: 35.9 },
    { id: 2, name: 'obligi炸鸡双拼', category: '主食', link: 'https://m.tb.cn/h.iDFqDvy', rating: 7.5, orderCount: 2, lastOrdered: '2026-05-05', image: 'https://s3.bmp.ovh/2026/05/05/MvMEsOKk.jpg', price: 16.9 },
    { id: 3, name: '麻辣小龙虾鸡丁饭', category: '主食', link: 'https://m.tb.cn/h.ixPFKpu', rating: 7.5, orderCount: 2, lastOrdered: '2026-04-23', image: 'https://s3.bmp.ovh/2026/05/06/8yHbCKaI.jpg', price: 24 },
    { id: 4, name: '达美乐照烧鸡肉饭', category: '主食', link: 'https://m.tb.cn/h.iCsywjw', rating: 7.5, orderCount: 5, lastOrdered: '2026-05-06', image: 'https://s3.bmp.ovh/2026/05/06/OnrZeWcz.jpg', price: 22 },
    { id: 5, name: '达美乐意大利面', category: '主食', link: 'https://m.tb.cn/h.ixA9Vy9', rating: 8, orderCount: 12, lastOrdered: '2026-04-21', image: 'https://s3.bmp.ovh/2026/05/06/NC5YfuH2.jpg', price: 26 },
    { id: 6, name: '达美乐咖喱焗饭', category: '主食', link: 'https://m.tb.cn/h.iyxAXzB', rating: 7, orderCount: 2, lastOrdered: '2026-03-02', image: 'https://s3.bmp.ovh/2026/05/06/0f3tI7et.jpg', price: 29 },
    { id: 7, name: '港味堂双拼饭', category: '主食', link: 'http://dpurl.cn/vW7hWh7z', rating: 8, orderCount: 4, lastOrdered: '2026-05-04', image: 'https://s3.bmp.ovh/2026/05/06/52FN0P8g.jpg', price: 26.9 },
    { id: 8, name: '王氏炉匠牛肉饭', category: '主食', link: 'http://dpurl.cn/boBPvhsz', rating: 6, orderCount: 2, lastOrdered: '2026-05-03', image: 'https://s3.bmp.ovh/2026/05/06/31IOdg3i.jpg', price: 22 },
    { id: 9, name: '鸡柳大人', category: '軽食', link: 'http://dpurl.cn/E7u4Vosz', rating: 6.5, orderCount: 2, lastOrdered: '2026-05-02', image: 'https://s3.bmp.ovh/2026/05/06/IgITe9yi.jpg', price: 19.5 },
    { id: 10, name: '桥头排骨双拼', category: '軽食', link: 'http://dpurl.cn/xOo3SeOz', rating: 7, orderCount: 14, lastOrdered: '2026-04-21', image: 'https://s3.bmp.ovh/2026/05/06/v4kmBJqx.jpg', price: 24.5 },
    { id: 11, name: '吴江路生煎+面', category: '主食', link: 'http://dpurl.cn/N8f7QMlz', rating: 6.5, orderCount: 4, lastOrdered: '2026-04-13', image: 'https://s3.bmp.ovh/2026/05/06/ZATwpavb.jpg', price: 21.9 },
    { id: 12, name: '东更道点心', category: '軽食', link: 'http://dpurl.cn/XizEo3zz', rating: 7, orderCount: 1, lastOrdered: '2026-04-02', image: 'https://s3.bmp.ovh/2026/05/06/um0JNCQI.jpg', price: 37.49 },
    { id: 13, name: '魏记凉皮+炖蛋', category: '主食', link: 'http://dpurl.cn/zb2kWr0z', rating: 6, orderCount: 5, lastOrdered: '2026-03-06', image: 'https://s3.bmp.ovh/2026/05/06/t5yJnIkB.jpg', price: 24 },
    { id: 14, name: '曼玲小米粥包子', category: '主食', link: 'http://dpurl.cn/k4Ne3hsz', rating: 7.5, orderCount: 1, lastOrdered: '2026-03-13', image: 'https://s3.bmp.ovh/2026/05/06/MkV3z4TK.jpg', price: 18.9 },
    { id: 15, name: '周黑鸭鸭脖', category: '軽食', link: 'http://dpurl.cn/3cTMJ9vz', rating: 7, orderCount: 1, lastOrdered: '2026-03-06', image: 'https://s3.bmp.ovh/2026/05/06/TMUEd9Mi.jpg', price: 27 },
    { id: 16, name: '冒二麻一火锅', category: '主食', link: 'http://dpurl.cn/Yat9OGez', rating: 6, orderCount: 5, lastOrdered: '2026-01-06', image: 'https://s3.bmp.ovh/2026/05/06/GwRhs9St.jpg', price: 24 },
    { id: 17, name: '海底捞下饭菜', category: '主食', link: 'https://m.tb.cn/h.iCcXsRq', rating: 7.5, orderCount: 3, lastOrdered: '2026-04-09', image: 'https://s3.bmp.ovh/2026/05/06/0enet21x.jpg', price: 29.7 },
    { id: 18, name: '达美乐单份烤翅', category: '軽食', link: 'https://m.tb.cn/h.ixRusTn', rating: 8, orderCount: 2, lastOrdered: '2026-04-03', image: 'https://s3.bmp.ovh/2026/05/06/UNuZRw8m.jpg', price: 23.4 },
    { id: 19, name: '大树酸菜鱼套餐', category: '主食', link: 'https://m.tb.cn/h.ixRyu5Z', rating: 8, orderCount: 2, lastOrdered: '2026-04-19', image: 'https://s3.bmp.ovh/2026/05/06/Cl5p0rsu.jpg', price: 28.5 },
    { id: 20, name: '呷哺呷哺酸菜鱼', category: '主食', link: 'https://m.tb.cn/h.ix8bUhG', rating: 7, orderCount: 2, lastOrdered: '2026-03-31', image: 'https://s3.bmp.ovh/2026/05/06/7DAFBchg.jpg', price: 24.9 },
    { id: 21, name: '米村烤牛肉拌饭', category: '主食', link: 'https://m.tb.cn/h.iCco9jo', rating: 7, orderCount: 1, lastOrdered: '2026-04-06', image: 'https://s3.bmp.ovh/2026/05/06/k5Wz1dU3.jpg', price: 28.9 },
    { id: 22, name: '米村肥牛锅拌饭', category: '主食', link: 'https://m.tb.cn/h.iBZyLDM', rating: 7, orderCount: 1, lastOrdered: '2025-12-06', image: 'https://s3.bmp.ovh/2026/05/06/NVA4Uqp6.jpg', price: 23.9 },
    { id: 23, name: '猫猫辣条烤冷面', category: '主食', link: 'https://m.tb.cn/h.iCEn6R2', rating: 6.5, orderCount: 3, lastOrdered: '2026-04-05', image: 'https://s3.bmp.ovh/2026/05/06/Y3drhcHg.jpg', price: 16.62 },
    { id: 24, name: '塔斯汀星期三翅桶', category: '軽食', link: 'https://m.tb.cn/h.iCEqJhb', rating: 7, orderCount: 1, lastOrdered: '2026-04-01', image: 'https://s3.bmp.ovh/2026/05/06/eXtTOJda.jpg', price: 18.88 },
    { id: 25, name: '味千宫崎酸辣面', category: '主食', link: 'https://m.tb.cn/h.iB0VsoG', rating: 7.5, orderCount: 1, lastOrdered: '2026-04-01', image: 'https://s3.bmp.ovh/2026/05/06/5pCEnwiH.jpg', price: 25.7 },
    { id: 26, name: '味千经典拉面', category: '主食', link: 'https://m.tb.cn/h.iCwWNo6', rating: 7.5, orderCount: 1, lastOrdered: '2026-01-02', image: 'https://s3.bmp.ovh/2026/05/06/ctVVqThe.jpg', price: 26.9 },
    { id: 27, name: '茶百道奥利奥芝士', category: 'ドリンク', link: 'https://m.tb.cn/h.iCw8tbi', rating: 8, orderCount: 1, lastOrdered: '2026-04-12', image: 'https://s3.bmp.ovh/2026/05/06/MrAOLRmV.jpg', price: 15 },
    { id: 28, name: '茶百道草莓芝士', category: 'ドリンク', link: 'https://m.tb.cn/h.iCwr24I', rating: 8.5, orderCount: 2, lastOrdered: '2026-04-05', image: 'https://s3.bmp.ovh/2026/05/06/QgoEpAly.jpg', price: 15 },
    { id: 29, name: '茶百道草莓麻薯', category: 'ドリンク', link: 'https://m.tb.cn/h.iCXEnQN', rating: 8, orderCount: 1, lastOrdered: '2026-03-17', image: 'https://s3.bmp.ovh/2026/05/06/3Ms3kLlw.jpg', price: 15 },
    { id: 30, name: '可乐', category: 'ドリンク', link: '', rating: 9, orderCount: 300, lastOrdered: '2026-05-06', image: 'https://img1.baidu.com/it/u=1113390344,2994340620&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=692', price: 3 },
    { id: 31, name: 'カルピス', category: 'ドリンク', link: '', rating: 9.5, orderCount: 100, lastOrdered: '2026-04-25', image: 'https://img1.baidu.com/it/u=1130197916,2322939099&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800', price: 7 },
    { id: 32, name: '哇哈哈', category: 'ドリンク', link: '', rating: 8, orderCount: 50, lastOrdered: '2026-04-24', image: 'https://img1.baidu.com/it/u=3849709380,3398940994&fm=253&app=138&f=JPEG?w=707&h=500', price: 5 }
];

let foods = [];               // 当前所有菜品
let currentFilter = {
    search: '',
    category: 'すべて'
};
let todayRecommend = null;   // 今日推荐 { items: [], date: '2026-05-05' }
let currentPanel = 'recommend';

/********************************************
 * 工具函数
 ********************************************/
function generateId() {
    return Date.now() + Math.floor(Math.random() * 10000);
}

function saveFoods() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foods));
}

function loadFoods() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        foods = JSON.parse(data);
    } else {
        foods = DEFAULT_FOODS.map(f => ({ ...f }));  // 深拷贝
        saveFoods();
    }
}

function saveToday() {
    localStorage.setItem(TODAY_KEY, JSON.stringify(todayRecommend));
}

function loadToday() {
    const data = localStorage.getItem(TODAY_KEY);
    if (data) {
        const parsed = JSON.parse(data);
        // 检查日期是否是今天
        const today = new Date().toISOString().split('T')[0];
        if (parsed.date === today) {
            todayRecommend = parsed;
        } else {
            todayRecommend = null;
        }
    }
}

// 获取今天的日期字符串
function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

// 显示今日日期
document.getElementById('date-display').textContent = getTodayStr();

/********************************************
 * 推荐算法：加权随机
 ********************************************/
function computeWeight(food) {
    const ratingScore = food.rating * 1.2;  // 10分制，最高贡献12分
    const freqScore = Math.min(food.orderCount, 20) * 1.2;
    let daysSince = 30;
    if (food.lastOrdered) {
        const last = new Date(food.lastOrdered);
        const now = new Date();
        daysSince = Math.floor((now - last) / (1000 * 60 * 60 * 24));
        if (daysSince < 0) daysSince = 0;
    }
    const recencyScore = daysSince * 0.8;
    return ratingScore + freqScore + recencyScore;
}

function weightedRandom(items) {
    if (items.length === 0) return null;
    const weights = items.map(item => computeWeight(item));
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < items.length; i++) {
        random -= weights[i];
        if (random <= 0) return items[i];
    }
    return items[items.length - 1]; // 保底
}

function reorderItems(items) {
    const staple = items.filter(f => f.category === '主食');
    const others = items.filter(f => f.category !== '主食');
    // 如果只有一个主食，把它放在 others 数组的中间位置
    if (staple.length > 0) {
        const midIndex = Math.floor(others.length / 2);
        others.splice(midIndex, 0, staple[0]);  // 只插第一个主食
    }
    return others;
}

// 生成今日推荐：主食必选1个，小吃和饮料各0-1个（根据设置，这里简化为随机决定是否添加）
function generateRecommendation() {
    const staple = foods.filter(f => f.category === '主食');
    const snack = foods.filter(f => f.category === '軽食');
    const drink = foods.filter(f => f.category === 'ドリンク');

    if (staple.length === 0) {
        return [];
    }

    const result = [];
    // 主食必选
    const chosenStaple = weightedRandom(staple);
    if (chosenStaple) result.push(chosenStaple);

    // 随机决定是否加小吃 (50% 概率，且小吃池不为空)
    if (snack.length > 0 && Math.random() > 0.5) {
        const chosenSnack = weightedRandom(snack);
        if (chosenSnack) result.push(chosenSnack);
    }

    // 随机决定是否加饮料 (70% 概率)
    if (drink.length > 0 && Math.random() > 0.3) {
        const chosenDrink = weightedRandom(drink);
        if (chosenDrink) result.push(chosenDrink);
    }

    return result;
}

function refreshRecommendation() {
    // 打印日志，方便我们观察（手机端可用vConsole或alert）
    console.log('点击了换一批');
    try {
        const items = generateRecommendation();
        if (items.length === 0) {
            alert('まず主食を1つ以上追加してください！');
            return;
        }
        todayRecommend = {
            items: reorderItems(items),
            date: getTodayStr()
        };
        saveToday();
        renderRecommendPanel();
        console.log('推荐成功', items);
    } catch (e) {
        alert('推荐出错: ' + e.message);
        console.error(e);
    }
}

/********************************************
 * 一键下单 & 习惯记录
 ********************************************/
function goOrder(id) {
    // 根据传入的 id 去找最新菜品
    const latest = foods.find(f => f.id === id);
    if (!latest) {
        alert('メニューデータに異常があります。「別の候補」をタップしておすすめを更新してください。');
        return;
    }

    // 记录点单习惯
    latest.orderCount = (latest.orderCount || 0) + 1;
    latest.lastOrdered = getTodayStr();
    saveFoods();

    // 跳转外卖链接
    if (latest.link && latest.link.trim() !== '') {
        window.location.href = latest.link;
    } else {
        alert(`“${latest.name}”デリバリーリンクがありません。メニュー管理で追加してください。`);
    }
}

/********************************************
 * 渲染界面
 ********************************************/
function renderRecommendPanel() {

    const quoteEl = document.getElementById('food-quote');
    if (quoteEl) {
        const randomQuote = FOOD_QUOTES[Math.floor(Math.random() * FOOD_QUOTES.length)];
        quoteEl.textContent = `“${randomQuote}”`;
    }
    const container = document.getElementById('result-cards');
    if (!todayRecommend || !todayRecommend.items || todayRecommend.items.length === 0) {
        container.innerHTML = '<div class="empty-hint">下のボタンをタップして、本日のおすすめを生成してください。</div>';
        return;
    }

    let html = '';
    todayRecommend.items.forEach(food => {
        const categoryClass = food.category === '主食' ? 'staple' : (food.category === '軽食' ? 'snack' : 'drink');
        const priceText = food.price ? `¥${parseFloat(food.price).toFixed(2)}` : '';
        html += `
           <div class="food-card">
               <div class="food-name">${food.name}</div>
               <div class="food-meta-inline">
                   <span class="category-badge ${categoryClass}">${food.category}</span>
                   ${getStarHTML(food.rating)}
                   <span class="food-order-count-inline">${food.orderCount || 0}回注文</span>
               </div>
               <div class="food-image-full">
                   ${food.image
                ? `<img src="${food.image}" alt="${food.name}" />`
                : `<div class="food-placeholder">🍱</div>`
            }
               </div>
               ${priceText ? `<div class="food-price-center">${priceText}</div>` : ''}
               <button class="btn-order" onclick="goOrder(${food.id})">注文へ</button>
            </div>
       `;
    });
    container.innerHTML = html;

    // 渲染完毕后，滚动到主食居中
    if (todayRecommend && todayRecommend.items.length > 0) {
        const stapleIndex = todayRecommend.items.findIndex(f => f.category === '主食');
        if (stapleIndex !== -1) {
            const targetCard = container.children[stapleIndex];
            if (targetCard) {
                const containerWidth = container.clientWidth;
                const cardLeft = targetCard.offsetLeft;
                const cardWidth = targetCard.offsetWidth;
                const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2);
                container.scrollTo({ left: scrollTo, behavior: 'smooth' });
            }
        }
    }
}

function renderManagePanel() {
    const list = document.getElementById('food-list');

    // --- 1. 根据搜索和分类过滤 ---
    const searchStr = currentFilter.search.toLowerCase().trim();
    const cat = currentFilter.category;

    let filtered = foods;
    if (cat !== 'すべて') {
        filtered = filtered.filter(f => f.category === cat);
    }
    if (searchStr) {
        filtered = filtered.filter(f => f.name.toLowerCase().includes(searchStr));
    }

    // --- 2. 无结果时的提示 ---
    if (filtered.length === 0) {
        list.innerHTML = '<div class="empty-hint">条件に合う料理はありません</div>';
        return;
    }

    // --- 3. 生成卡片（和原来一样，但循环 filtered 而不是 foods）---
    const order = { '主食': 1, '軽食': 2, 'ドリンク': 3 };
    const sorted = [...filtered].sort((a, b) => (order[a.category] || 99) - (order[b.category] || 99));

    let html = '';
    sorted.forEach(food => {
        const categoryClass = food.category === '主食' ? 'staple' : (food.category === '軽食' ? 'snack' : 'drink');
        const imgSrc = food.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f0f0f0"/%3E%3Ctext x="50" y="58" font-size="40" text-anchor="middle" fill="%23ccc"%3E🍱%3C/text%3E%3C/svg%3E';
        const priceText = food.price ? `¥${parseFloat(food.price).toFixed(2)}` : '';

        html += `
      <li class="food-card" data-id="${food.id}">
        <div class="food-image-wrap">
          <img class="food-img" src="${imgSrc}" alt="${food.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='🍱';" />
        </div>
        <div class="food-info">
          <div class="food-name">${food.name}</div>
          <div class="food-meta">
            <span class="category-badge ${categoryClass}">${food.category}</span>
            ${getStarHTML(food.rating)}
            <span>${food.orderCount || 0}次</span>
            ${priceText ? `<span class="food-price">${priceText}</span>` : ''}
          </div>
        </div>
        <div class="food-actions">
          <button class="btn-secondary btn-small" onclick="openEditModal(${food.id})">編集</button>
          <button class="btn-danger btn-small" onclick="deleteFood(${food.id})">削除</button>
        </div>
      </li>
    `;
    });
    list.innerHTML = html;
}

/********************************************
 * 管理功能：增、删、导入、导出
 ********************************************/
document.getElementById('form-add').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('input-name').value.trim();
    const category = document.getElementById('input-category').value;
    const link = document.getElementById('input-link').value.trim();
    const rating = parseInt(document.getElementById('input-rating').value) || 3;

    if (!name) return;

    const newFood = {
        id: generateId(),
        name,
        category,
        link: link || '',
        image: document.getElementById('input-image').value.trim() || '',
        price: parseFloat(document.getElementById('input-price').value) || 0,
        rating: Math.min(10, Math.max(1, rating)),
        orderCount: 0,
        lastOrdered: null
    };

    foods.push(newFood);
    saveFoods();
    renderManagePanel();
    this.reset();
    document.getElementById('input-rating').value = '3';
});

function deleteFood(id) {
    if (!confirm('この料理を削除しますか？')) return;
    foods = foods.filter(f => f.id !== id);
    saveFoods();

    // 如果今日推荐里有被删的菜，清除推荐重新生成
    if (todayRecommend && todayRecommend.items.some(item => item.id === id)) {
        todayRecommend = null;
        saveToday();
        renderRecommendPanel();
    }
    renderManagePanel();
}

// 当前正在编辑的菜品 id
let editingFoodId = null;

// 打开编辑弹窗
function openEditModal(id) {
    const food = foods.find(f => f.id === id);
    if (!food) return;

    editingFoodId = id;
    document.getElementById('edit-name').value = food.name;
    document.getElementById('edit-category').value = food.category;
    document.getElementById('edit-link').value = food.link || '';
    document.getElementById('edit-order-count').value = food.orderCount || 0;
    document.getElementById('edit-rating').value = food.rating || 5;
    document.getElementById('edit-image').value = food.image || '';
    document.getElementById('edit-price').value = food.price || '';

    document.getElementById('edit-modal').style.display = 'flex';
}

// 关闭编辑弹窗
function closeEditModal() {
    editingFoodId = null;
    document.getElementById('edit-modal').style.display = 'none';
}

// 保存编辑
document.getElementById('btn-save-edit').addEventListener('click', function () {
    const food = foods.find(f => f.id === editingFoodId);
    if (!food) return;

    food.name = document.getElementById('edit-name').value.trim();
    food.category = document.getElementById('edit-category').value;
    food.link = document.getElementById('edit-link').value.trim();
    food.orderCount = parseInt(document.getElementById('edit-order-count').value) || 0;
    food.rating = Math.min(10, Math.max(1, parseInt(document.getElementById('edit-rating').value) || 5));
    food.image = document.getElementById('edit-image').value.trim();
    food.price = parseFloat(document.getElementById('edit-price').value) || 0;

    saveFoods();
    closeEditModal();
    renderManagePanel();

    if (todayRecommend && todayRecommend.items.some(item => item.id === food.id)) {
        todayRecommend = null;
        saveToday();
        renderRecommendPanel();
    }
});

// 取消编辑
document.getElementById('btn-cancel-edit').addEventListener('click', closeEditModal);

// 点击弹窗背景也可关闭
document.getElementById('edit-modal').addEventListener('click', function (e) {
    if (e.target === this) closeEditModal();
});

// 导出 JSON
document.getElementById('btn-export').addEventListener('click', function () {
    const dataStr = JSON.stringify(foods, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `foods_backup_${getTodayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

// 导入 JSON
document.getElementById('btn-import').addEventListener('click', function () {
    document.getElementById('import-file').click();
});

document.getElementById('import-file').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (!Array.isArray(imported)) throw new Error('格式错误');

            // 简单验证每条数据
            for (let item of imported) {
                if (!item.name || !item.category) throw new Error('数据缺少必要字段(name, category)');
            }

            foods = imported;
            saveFoods();
            todayRecommend = null;  // 清除推荐
            saveToday();
            renderManagePanel();
            renderRecommendPanel();
            alert('导入成功！');
        } catch (err) {
            alert('导入失败：' + err.message);
        }
    };
    reader.readAsText(file);
    this.value = ''; // 允许重复导入同一文件
});

/********************************************
 * 导航切换
 ********************************************/
function switchPanel(panelName) {
    currentPanel = panelName;
    const quoteEl = document.getElementById('food-quote');
    if (quoteEl) {
        quoteEl.style.display = panelName === 'recommend' ? 'block' : 'none';
    }
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(`panel-${panelName}`).classList.add('active');
    document.getElementById(`nav-${panelName}`).classList.add('active');

    // 控制浮动按钮显示（仅在管理页出现）
    const fab = document.getElementById('fab-container');
    if (fab) {
        fab.style.display = panelName === 'manage' ? 'flex' : 'none';
    }

    // 离开管理页时自动关闭搜索栏和添加弹窗
    if (panelName !== 'manage') {
        const filterWrapper = document.getElementById('filter-wrapper');
        if (filterWrapper) filterWrapper.classList.remove('open');
        const addModal = document.getElementById('add-modal');
        if (addModal) addModal.style.display = 'none';
    }
}

// 以下两个监听器保持不变
document.getElementById('nav-recommend').addEventListener('click', () => {
    switchPanel('recommend');
    renderRecommendPanel();
});
document.getElementById('nav-manage').addEventListener('click', () => {
    switchPanel('manage');
    renderManagePanel();
});

// “换一批”按钮
document.getElementById('btn-refresh').addEventListener('click', refreshRecommendation);

/********************************************
 * 启动流程
 ********************************************/
function init() {
    loadFoods();
    loadToday();

    // 如果没有今日推荐，自动生成一份
    if (!todayRecommend) {
        refreshRecommendation();
    } else {
        renderRecommendPanel();
    }
    renderManagePanel();

    // 确保浮动按钮在管理页时显示（初始可能是推荐页，所以默认隐藏）
    const fab = document.getElementById('fab-container');
    if (fab) {
        fab.style.display = currentPanel === 'manage' ? 'flex' : 'none';
    }

    const btnToggleSearch = document.getElementById('btn-toggle-search');
    const filterWrapper = document.getElementById('filter-wrapper');
    if (btnToggleSearch && filterWrapper) {
        btnToggleSearch.addEventListener('click', () => {
            filterWrapper.classList.toggle('open');
            // 同时关闭添加弹窗
            const addModal = document.getElementById('add-modal');
            if (addModal) addModal.style.display = 'none';
        });
    }

    const btnOpenAdd = document.getElementById('btn-open-add');
    const addModal = document.getElementById('add-modal');
    if (btnOpenAdd && addModal) {
        btnOpenAdd.addEventListener('click', () => {
            addModal.style.display = 'flex';
            // 关闭搜索栏
            if (filterWrapper) filterWrapper.classList.remove('open');
        });
    }

    // 取消添加
    const btnCancelAdd = document.getElementById('btn-cancel-add');
    if (btnCancelAdd && addModal) {
        btnCancelAdd.addEventListener('click', () => {
            addModal.style.display = 'none';
        });
    }

    // 点击模态背景关闭
    if (addModal) {
        addModal.addEventListener('click', function (e) {
            if (e.target === this) this.style.display = 'none';
        });
    }

    // 搜索框输入实时过滤
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            currentFilter.search = e.target.value;
            renderManagePanel();
        });
    }

    // 分类标签点击切换
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.tag-btn.active').classList.remove('active');
            this.classList.add('active');
            currentFilter.category = this.dataset.category;
            renderManagePanel();
        });
    });

    // 重置为默认菜品
    const btnResetDefault = document.getElementById('btn-reset-default');
    if (btnResetDefault) {
        btnResetDefault.addEventListener('click', () => {
            if (!confirm('すべての料理をデフォルトにリセットしますか？')) return;
            foods = DEFAULT_FOODS.map(f => ({ ...f }));
            saveFoods();
            todayRecommend = null;
            saveToday();
            renderManagePanel();
            renderRecommendPanel();
            alert('デフォルトの料理を読み込みました！');
        });
    }

}

init();

function getStarHTML(rating) {
    // rating 为 1-10，映射到 0-5 星
    const starCount = rating / 2;   // 例如 7 => 3.5
    let html = '<span class="star-rating">';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(starCount)) {
            // 满星
            html += '<span class="star">★</span>';
        } else if (i === Math.ceil(starCount) && starCount % 1 >= 0.25) {
            // 半星（小数部分大于等于0.25视为半星）
            html += '<span class="star half">★</span>';
        } else {
            html += '<span class="star empty">★</span>';
        }
    }
    html += '</span>';
    return html;
}