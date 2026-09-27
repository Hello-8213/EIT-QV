// ==========================================
// WRITERSTYLE
// 三主维 + 两辅维
// ==========================================


// ================================
// 1. 测试题
// ================================

const questions = [

    // -------------------------
    // E 情绪表达
    // D = 直抒
    // C = 克制
    // -------------------------

    {
        dimension: "E",
        name: "情绪表达",
        question: "你写一个角色失去重要的人，你更可能怎么写？",
        options: [
            { text: "她很难过，甚至不知道自己以后该怎么办。", score: { D: 2 } },
            { text: "她坐在那里，很久没有说话。", score: { C: 2 } },
            { text: "她低着头，手指一直攥着衣角。", score: { C: 2 } },
            { text: "那一刻，她第一次感觉到一种无法形容的空。", score: { D: 2 } }
        ]
    },

    {
        dimension: "E",
        name: "情绪表达",
        question: "角色第一次见到自己喜欢的人，你更喜欢表现为：",
        options: [
            { text: "他突然意识到，自己好像喜欢上了对方。", score: { D: 2 } },
            { text: "他只是多看了一眼，然后移开视线。", score: { C: 2 } },
            { text: "他不知道为什么，回家的路比平时慢了很多。", score: { C: 2 } },
            { text: "那一瞬间，他明白了什么叫心动。", score: { D: 2 } }
        ]
    },

    {
        dimension: "E",
        name: "情绪表达",
        question: "如果角色正在害怕，你会选择：",
        options: [
            { text: "她很害怕，但还是强迫自己继续往前走。", score: { D: 2 } },
            { text: "她把手从门把手上慢慢收了回来。", score: { C: 2 } },
            { text: "她没有说话，只是把灯又打开了一盏。", score: { C: 2 } },
            { text: "恐惧一点一点爬上她的心。", score: { D: 2 } }
        ]
    },

    {
        dimension: "E",
        name: "情绪表达",
        question: "一个角色终于等到多年未见的人，你更倾向于：",
        options: [
            { text: "他非常激动，几乎控制不住自己的情绪。", score: { D: 2 } },
            { text: "他看了对方很久，只说了一句：“好久不见。”", score: { C: 2 } },
            { text: "他笑了一下，然后低头整理自己的袖口。", score: { C: 2 } },
            { text: "重逢让他觉得幸福，也让他想起了很多过去。", score: { D: 2 } }
        ]
    },


    // -------------------------
    // I 信息呈现
    // O = 直给
    // L = 留白
    // -------------------------

    {
        dimension: "I",
        name: "信息呈现",
        question: "故事里出现一个奇怪的人，你第一次介绍他时会：",
        options: [
            { text: "直接告诉读者：这个人其实就是凶手。", score: { O: 2 } },
            { text: "只写他站在那里，手里拿着一把旧钥匙。", score: { L: 2 } },
            { text: "告诉读者他身份不简单，但暂时不说明原因。", score: { L: 2 } },
            { text: "直接交代他的身份、目的和背景。", score: { O: 2 } }
        ]
    },

    {
        dimension: "I",
        name: "信息呈现",
        question: "你写一个房间时，比较倾向于：",
        options: [
            { text: "把房间里重要的东西全部介绍清楚。", score: { O: 2 } },
            { text: "只写几个异常细节，让读者自己判断。", score: { L: 2 } },
            { text: "故意遗漏最关键的东西。", score: { L: 2 } },
            { text: "明确告诉读者这个房间有什么特殊之处。", score: { O: 2 } }
        ]
    },

    {
        dimension: "I",
        name: "信息呈现",
        question: "如果结尾揭露一个秘密，你更喜欢：",
        options: [
            { text: "最后直接告诉读者真相是什么。", score: { O: 2 } },
            { text: "给出几个线索，让读者自己拼出真相。", score: { L: 2 } },
            { text: "最后只出现一个细节，让读者自己意识到真相。", score: { L: 2 } },
            { text: "最后把整个真相完整解释出来。", score: { O: 2 } }
        ]
    },

    {
        dimension: "I",
        name: "信息呈现",
        question: "你喜欢哪一种伏笔？",
        options: [
            { text: "提前明确告诉读者某件事以后会发生。", score: { O: 2 } },
            { text: "第一次出现时毫不起眼，后来才发现它很重要。", score: { L: 2 } },
            { text: "让一个普通动作在后面产生完全不同的意义。", score: { L: 2 } },
            { text: "通过旁白直接提醒读者这个细节很重要。", score: { O: 2 } }
        ]
    },


    // -------------------------
    // T 结构张力
    // S = 平稳
    // R = 反差
    // -------------------------

    {
        dimension: "T",
        name: "结构张力",
        question: "一个家庭晚饭场景，你更喜欢怎样发展？",
        options: [
            { text: "大家聊天、吃饭，慢慢推进人物关系。", score: { S: 2 } },
            { text: "大家开心地吃饭，但某个细节突然让人感觉不对。", score: { R: 2 } },
            { text: "平静持续很久，然后一句话突然改变整个气氛。", score: { R: 2 } },
            { text: "通过连续的对话自然推动剧情。", score: { S: 2 } }
        ]
    },

    {
        dimension: "T",
        name: "结构张力",
        question: "你写悬疑场景时更喜欢：",
        options: [
            { text: "危险逐渐增加，让读者一步步紧张。", score: { S: 2 } },
            { text: "前面一直很温柔，突然出现一个完全相反的事实。", score: { R: 2 } },
            { text: "让一个看似普通的场景突然变得可怕。", score: { R: 2 } },
            { text: "按照线索逐渐揭开问题。", score: { S: 2 } }
        ]
    },

    {
        dimension: "T",
        name: "结构张力",
        question: "关于剧情节奏，你更喜欢：",
        options: [
            { text: "像河流一样，一直平稳地向前。", score: { S: 2 } },
            { text: "平静—异常—平静—突然爆发。", score: { R: 2 } },
            { text: "让读者在毫无防备的时候发现真正的问题。", score: { R: 2 } },
            { text: "每个事件之间都有清楚的因果关系。", score: { S: 2 } }
        ]
    },

    {
        dimension: "T",
        name: "结构张力",
        question: "你最喜欢哪种场景转换？",
        options: [
            { text: "人物从一个场景自然进入另一个场景。", score: { S: 2 } },
            { text: "上一段还很温暖，下一段突然出现异常。", score: { R: 2 } },
            { text: "上一句话的意义在下一段突然完全改变。", score: { R: 2 } },
            { text: "通过时间和地点的自然变化推进故事。", score: { S: 2 } }
        ]
    },


    // -------------------------
    // Q 语言质感
    // P = 简洁
    // Y = 诗性
    // -------------------------

    {
        dimension: "Q",
        name: "语言质感",
        options: [
            {
                text: "她走进房间，关上门，坐在床边。",
                score: { P: 2 }
            },
            {
                text: "夜色落进房间，像一层很薄的雾。",
                score: { Y: 2 }
            },
            {
                text: "他抬头看了一眼天空，然后继续往前走。",
                score: { P: 2 }
            },
            {
                text: "月光停在窗边，像一句没有说完的话。",
                score: { Y: 2 }
            }
        ]
    },

    {
        dimension: "Q",
        name: "语言质感",
        question: "下面哪种句子更接近你喜欢的文字？",
        options: [
            {
                text: "雨下得很大，他没有带伞。",
                score: { P: 2 }
            },
            {
                text: "雨落下来，把城市变成一片模糊的旧梦。",
                score: { Y: 2 }
            },
            {
                text: "她打开灯，看了一眼时间。",
                score: { P: 2 }
            },
            {
                text: "灯亮起来的时候，夜晚似乎短暂地退了一步。",
                score: { Y: 2 }
            }
        ]
    },

    {
        dimension: "Q",
        name: "语言质感",
        question: "描写一个人离开，你更喜欢：",
        options: [
            {
                text: "他拿起外套，然后离开了。",
                score: { P: 2 }
            },
            {
                text: "他的背影慢慢融进街道尽头的灯光里。",
                score: { Y: 2 }
            },
            {
                text: "她没有回头，走出了门。",
                score: { P: 2 }
            },
            {
                text: "门在身后合上，像替他们把那段时间也关了起来。",
                score: { Y: 2 }
            }
        ]
    },

    {
        dimension: "Q",
        name: "语言质感",
        question: "如果写一个安静的夜晚，你更倾向于：",
        options: [
            {
                text: "晚上很安静，街上没有什么人。",
                score: { P: 2 }
            },
            {
                text: "城市沉入夜里，只剩远处零碎的灯光。",
                score: { Y: 2 }
            },
            {
                text: "窗外没有声音。",
                score: { P: 2 }
            },
            {
                text: "夜色安静得像一场无人知晓的等待。",
                score: { Y: 2 }
            }
        ]
    },


    // -------------------------
    // V 画面构建
    // A = 抽象
    // C = 具象
    // -------------------------

    {
        dimension: "V",
        name: "画面构建",
        question: "描写一个孤独的人，你更倾向于：",
        options: [
            {
                text: "他感到一种无法摆脱的孤独。",
                score: { A: 2 }
            },
            {
                text: "他一个人坐在餐桌边，桌上只放着一只杯子。",
                score: { C: 2 }
            },
            {
                text: "孤独像一种长期存在的阴影。",
                score: { A: 2 }
            },
            {
                text: "冰箱的声音在空荡荡的房间里持续响着。",
                score: { C: 2 }
            }
        ]
    },

    {
        dimension: "V",
        name: "画面构建",
        question: "描写一个人的紧张，你更喜欢：",
        options: [
            {
                text: "他越来越紧张。",
                score: { A: 2 }
            },
            {
                text: "他发现自己的手指一直在敲桌面。",
                score: { C: 2 }
            },
            {
                text: "空气里充满了压迫感。",
                score: { A: 2 }
            },
            {
                text: "他把水杯放下时，杯底碰到了桌面两次。",
                score: { C: 2 }
            }
        ]
    },

    {
        dimension: "V",
        name: "画面构建",
        question: "描写一个“温馨”的家，你更喜欢：",
        options: [
            {
                text: "这个家让人感觉很温暖。",
                score: { A: 2 }
            },
            {
                text: "厨房里还留着晚饭的香味，沙发上搭着一条旧毯子。",
                score: { C: 2 }
            },
            {
                text: "这里有一种让人安心的感觉。",
                score: { A: 2 }
            },
            {
                text: "玄关放着两双拖鞋，窗台上晒着刚洗过的衣服。",
                score: { C: 2 }
            }
        ]
    },

    {
        dimension: "V",
        name: "画面构建",
        question: "你写一个角色第一次进入陌生城市，会更关注：",
        options: [
            {
                text: "他感受到陌生和自由。",
                score: { A: 2 }
            },
            {
                text: "公交车从他面前驶过，车窗上贴着一张褪色的广告。",
                score: { C: 2 }
            },
            {
                text: "这座城市给他一种复杂的感觉。",
                score: { A: 2 }
            },
            {
                text: "路边便利店的灯牌一直闪，雨水顺着屋檐落下来。",
                score: { C: 2 }
            }
        ]
    }

];


// ================================
// 2. 32种主类型
// ================================

const typeData = {

    "DOS": {
        title: "静流",
        subtitle: "情绪直接、信息清晰、结构平稳。",
        description: "你的文字倾向于把人物和故事清楚地交给读者，不太依赖复杂的隐藏结构。阅读体验通常比较自然，读者能够顺着你的文字稳定地进入故事。",
        strength: "人物情绪和剧情信息表达清楚。",
        feeling: "自然、清楚、稳定。",
        writing: "日常故事、成长故事、人物关系、现实题材。",
        weakness: "如果长期保持相同节奏，部分段落可能缺少突然的记忆点。"
    },

    "DOR": {
        title: "明潮",
        subtitle: "情绪直接，但故事会突然改变方向。",
        description: "你的文字愿意直接表达人物情绪，同时喜欢在结构上制造变化。读者通常能够理解人物正在想什么，但不一定能够预测下一步发生什么。",
        strength: "情绪爆发和剧情转折。",
        feeling: "鲜明、直接、有冲击力。",
        writing: "情感小说、青春故事、剧情小说。",
        weakness: "转折过多时，需要注意前后逻辑。"
    },

    "DLS": {
        title: "雾语",
        subtitle: "情绪直接，信息却并不完全说明。",
        description: "你喜欢让人物情绪保持明显，同时把故事的一部分隐藏起来。这种写法容易形成一种“我知道他在难过，但我不知道为什么”的感觉。",
        strength: "人物情绪与悬念结合。",
        feeling: "朦胧、敏感、有秘密感。",
        writing: "悬疑、关系小说、心理描写。",
        weakness: "留白过多时需要给读者足够线索。"
    },

    "DLR": {
        title: "暗潮",
        subtitle: "情绪明显、信息隐藏、结构反差。",
        description: "你很容易写出表面平静、内里不断变化的故事。人物情绪并不一定隐藏，但真正发生了什么往往不会马上告诉读者。",
        strength: "悬念、反转、情绪爆发。",
        feeling: "危险、敏感、戏剧性强。",
        writing: "悬疑、犯罪、情感反转。",
        weakness: "需要控制反转密度，避免让读者疲劳。"
    },

    "COS": {
        title: "静影",
        subtitle: "情绪克制，信息清晰，结构平稳。",
        description: "你的文字比较冷静。你不急着替角色表达情绪，而是让故事按照自己的速度向前。",
        strength: "克制的人物塑造和稳定叙事。",
        feeling: "冷静、成熟、安静。",
        writing: "现实主义、人物小说、慢节奏故事。",
        weakness: "需要注意让人物情绪拥有足够的温度。"
    },

    "COR": {
        title: "冷锋",
        subtitle: "克制的情绪与明显的结构变化。",
        description: "你不太直接告诉读者人物的情绪，却喜欢让剧情突然改变。这样的组合容易形成冷静表面下的强烈事件。",
        strength: "冷静叙述重大事件。",
        feeling: "克制、锋利、突然。",
        writing: "悬疑、犯罪、心理小说。",
        weakness: "需要给关键情绪留下足够空间。"
    },

    "CLS": {
        title: "静雾",
        subtitle: "克制、留白、平稳。",
        description: "你的文字不会主动解释太多。很多东西存在于人物动作、环境和没有说出口的话里。",
        strength: "含蓄的人物关系。",
        feeling: "安静、朦胧、细腻。",
        writing: "文学小说、关系故事、慢节奏作品。",
        weakness: "需要避免让读者完全失去方向。"
    },

    "CLR": {
        title: "静夜暗潮",
        subtitle: "克制 × 留白 × 反差。",
        description: "这是非常典型的“表面平静，内部危险”的笔风。你倾向于不解释人物真正的情绪，也不马上告诉读者事情到底发生了什么。故事看起来甚至可能很温柔，但某个不起眼的细节会让读者在回想之后突然意识到：原来从这里开始就已经不对了。",
        strength: "后知后觉、伏笔、暗示、温柔与危险的反差。",
        feeling: "温柔、安静、诡异、后劲强。",
        writing: "心理悬疑、文学悬疑、悲剧、关系小说。",
        weakness: "需要特别注意线索的公平性，否则读者可能只觉得“突然”。"
    }

};


// ================================
// 3. 页面元素
// ================================

const startPage = document.getElementById("startPage");
const testPage = document.getElementById("testPage");
const resultPage = document.getElementById("resultPage");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");

const questionNumber = document.getElementById("questionNumber");
const progress = document.getElementById("progress");
const dimensionLabel = document.getElementById("dimensionLabel");


// ================================
// 4. 状态
// ================================

let currentQuestion = 0;

let scores = {
    D: 0,
    C: 0,

    O: 0,
    L: 0,

    S: 0,
    R: 0,

    P: 0,
    Y: 0,

    A: 0,
    V: 0
};


// ================================
// 5. 开始测试
// ================================

startBtn.addEventListener("click", () => {

    resetScores();

    currentQuestion = 0;

    startPage.classList.remove("active");
    testPage.classList.add("active");

    showQuestion();
});


// ================================
// 6. 显示问题
// ================================

function showQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    progress.style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";

    dimensionLabel.textContent =
        q.name;

    questionText.textContent =
        q.question || "下面哪一种表达更接近你的写法？";

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.innerHTML = `
            <span class="option-letter">
                ${String.fromCharCode(65 + index)}
            </span>
            ${option.text}
        `;

        button.addEventListener("click", () => {
            chooseAnswer(option);
        });

        optionsContainer.appendChild(button);
    });
}


// ================================
// 7. 选择答案
// ================================

function chooseAnswer(option) {

    for (const key in option.score) {

        scores[key] += option.score[key];

    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

    } else {

        showQuestion();

    }
}


// ================================
// 8. 计算结果
// ================================

function getType() {

    const E =
        scores.D >= scores.C ? "D" : "C";

    const I =
        scores.O >= scores.L ? "O" : "L";

    const T =
        scores.S >= scores.R ? "S" : "R";

    const Q =
        scores.P >= scores.Y ? "P" : "Y";

    const V =
        scores.A >= scores.V ? "A" : "C";

    return {
        E,
        I,
        T,
        Q,
        V
    };
}


// ================================
// 9. 显示结果
// ================================

function showResult() {

    testPage.classList.remove("active");
    resultPage.classList.add("active");

    const type = getType();

    const mainCode =
        type.E + type.I + type.T;

    const fullCode =
        mainCode + "-" + type.Q + type.V;

    document.getElementById("resultCode").textContent =
        fullCode;

    let data = typeData[mainCode];

    // 如果某个组合没有专门命名
    if (!data) {

        data = {
            title: "独特笔触",
            subtitle: "你的三种核心写作倾向形成了独特组合。",
            description:
                "你的写作方式没有落入预设的典型类型，而是形成了比较独特的组合。你的文字可能会根据故事类型发生明显变化。",
            strength:
                "能够根据故事调整表达方式。",
            feeling:
                "具有个人化的表达特点。",
            writing:
                "适合继续尝试不同类型的作品。",
            weakness:
                "需要继续写作，才能让这种风格稳定下来。"
        };

    }


    document.getElementById("resultTitle").textContent =
        data.title;

    document.getElementById("resultSubtitle").textContent =
        data.subtitle;

    document.getElementById("resultDescription").textContent =
        data.description;

    document.getElementById("strengthText").textContent =
        data.strength;

    document.getElementById("feelingText").textContent =
        data.feeling;

    document.getElementById("writingText").textContent =
        data.writing;

    document.getElementById("weaknessText").textContent =
        data.weakness;


    // 主维
    document.getElementById("eResult").textContent =
        type.E === "D" ? "直抒" : "克制";

    document.getElementById("iResult").textContent =
        type.I === "O" ? "直给" : "留白";

    document.getElementById("tResult").textContent =
        type.T === "S" ? "平稳" : "反差";


    // 辅维
    document.getElementById("qResult").textContent =
        type.Q === "P" ? "简洁" : "诗性";

    document.getElementById("vResult").textContent =
        type.V === "A" ? "抽象" : "具象";


    drawRadar(type);

}


// ================================
// 10. 雷达图
// ================================

function drawRadar(type) {

    const canvas =
        document.getElementById("radarCanvas");

    const ctx =
        canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    const radius = 130;

    const dimensions = [
        {
            name: "情绪",
            value: type.E === "D" ? 1 : .8
        },
        {
            name: "信息",
            value: type.I === "O" ? 1 : .8
        },
        {
            name: "张力",
            value: type.T === "S" ? .75 : 1
        },
        {
            name: "语言",
            value: type.Q === "P" ? .75 : 1
        },
        {
            name: "画面",
            value: type.V === "A" ? .75 : 1
        }
    ];


    const points = [];

    for (let i = 0; i < 5; i++) {

        const angle =
            -Math.PI / 2 +
            (Math.PI * 2 / 5) * i;

        const x =
            centerX +
            Math.cos(angle) * radius *
            dimensions[i].value;

        const y =
            centerY +
            Math.sin(angle) * radius *
            dimensions[i].value;

        points.push({ x, y });

    }


    // 网格

    for (let level = 1; level <= 4; level++) {

        const r =
            radius * level / 4;

        ctx.beginPath();

        for (let i = 0; i < 5; i++) {

            const angle =
                -Math.PI / 2 +
                (Math.PI * 2 / 5) * i;

            const x =
                centerX +
                Math.cos(angle) * r;

            const y =
                centerY +
                Math.sin(angle) * r;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

        }

        ctx.closePath();

        ctx.strokeStyle = "#d8d3ca";
        ctx.lineWidth = 1;

        ctx.stroke();

    }


    // 辐射线

    for (let i = 0; i < 5; i++) {

        const angle =
            -Math.PI / 2 +
            (Math.PI * 2 / 5) * i;

        const x =
            centerX +
            Math.cos(angle) * radius;

        const y =
            centerY +
            Math.sin(angle) * radius;

        ctx.beginPath();

        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);

        ctx.strokeStyle = "#ddd8cf";
        ctx.stroke();

    }


    // 数据区域

    ctx.beginPath();

    points.forEach((point, index) => {

        if (index === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }

    });

    ctx.closePath();

    ctx.fillStyle = "rgba(70, 65, 58, .12)";
    ctx.fill();

    ctx.strokeStyle = "#4d4841";
    ctx.lineWidth = 2;

    ctx.stroke();


    // 节点 + 标签

    dimensions.forEach((dimension, index) => {

        const angle =
            -Math.PI / 2 +
            (Math.PI * 2 / 5) * index;

        const labelX =
            centerX +
            Math.cos(angle) * (radius + 30);

        const labelY =
            centerY +
            Math.sin(angle) * (radius + 30);

        ctx.fillStyle = "#66615a";

        ctx.font = "13px sans-serif";

        ctx.textAlign = "center";

        ctx.fillText(
            dimension.name,
            labelX,
            labelY
        );

    });

}


// ================================
// 11. 重置
// ================================

function resetScores() {

    scores = {
        D: 0,
        C: 0,

        O: 0,
        L: 0,

        S: 0,
        R: 0,

        P: 0,
        Y: 0,

        A: 0,
        V: 0
    };

}


restartBtn.addEventListener("click", () => {

    resetScores();

    currentQuestion = 0;

    resultPage.classList.remove("active");

    startPage.classList.add("active");

});
