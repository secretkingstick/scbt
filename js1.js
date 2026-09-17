let currentStep = 0;
let timerInterval = null;
let timeLeft = 0;
let currentVolume = 0.8;
let currentSession = 'session6'; // 기본값을 2024년 3회 B일정으로 설정

const examData = {
    session6: {
        image: "images/202403-1.png",
        steps: [
            {
                title: "音読",
                type: "image",
                instruction: "Please read the passage silently for 20 seconds.",
                timer: 20
            },
            {
                title: "No. 1",
                type: "image", 
                instruction: "According to the passage, how do some governments try to keep their citizens more prepared?",
                timer: 40
            },
            {
                title: "No. 2 (黙読)",
                type: "image",
                instruction: "Now, please look at the picture and describe the situation. You have 20 seconds to prepare. Your story should begin with the sentence on the card.",
                timer: 20
            },
            {
                title: "No. 2 (スピーチ)",
                type: "image",
                instruction: "Please begin.",
                timer: 60
            },
            {
                title: "No. 3",
                type: "blank", 
                interstitialText: "Now, Mr. / Ms. ――, please turn over the card and put it down.",
                instruction: "Nowadays, some people say that people today spend too much money on health supplements such as vitamins. What do you think about that?",
                timer: 35
            },
            {
                title: "No. 4",
                type: "blank", 
                instruction: "Today in Japan, many people enjoy eating food from foreign countries. Do you think foreign food will become even more popular?",
                hasChoices: true,
                timer: 35
            }
        ],
        answersHtml: `
            <h2 style="margin-bottom: 15px; color: #2b8a3e;">2024년 제3회 B일정 (Global Warming and Health) 解答・解説まとめ</h2>
            <div style="line-height: 1.6; font-size: 20px;">
                <p><strong>【No. 1 パッセージについての質問】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: According to the passage, how do some governments try to keep their citizens more prepared?</p>
                <p><strong>解答例:</strong> (By) giving people information about such diseases.</p>
                <p style="color: #666; margin-bottom: 15px;"><strong>解説:</strong> パッセージの "Some governments give people information about such diseases, and in this way they try to keep their citizens more prepared." から直接導き出します。</p>

                <p><strong>【No. 2 イラストの展開説明】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">条件: 指定された文（One day, Ryo and Saki were talking about doing volunteer activities.）から始める。</p>
                <p><strong>解答例:</strong><br>
                One day, Ryo and Saki were talking about doing volunteer activities. The next day at the kindergarten, Ryo was excited to help children. Later, on the way to the kindergarten in the train, they were reading a book and holding bags. Later that day, they were talking with each other on the train ride home.</p>
                <p style="margin-bottom: 15px;"></p>

                <p><strong>【No. 3 自分の意見：健康サプリメントへの支出】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: Nowadays, some people say that people today spend too much money on health supplements such as vitamins. What do you think about that?</p>
                <p><strong>Agree の解答例:</strong> I agree. Many people rely too much on pills instead of eating a balanced, healthy diet, which is unnecessary and a waste of money.</p>
                <p style="margin-bottom: 10px;"><strong>Disagree の解答例:</strong> I disagree. Maintaining good health is crucial, especially with busy lifestyles. Supplements are an easy and efficient way to get essential nutrients.</p>
                <p style="margin-bottom: 15px;"></p>

                <p><strong>【No. 4 自分の意見：外国の食べ物の人気】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: Today in Japan, many people enjoy eating food from foreign countries. Do you think foreign food will become even more popular?</p>
                <p><strong>Yes の解答例:</strong> Yes. People can easily travel abroad or find authentic ingredients online, making foreign cuisines more accessible and appealing.</p>
                <p style="margin-bottom: 10px;"><strong>No の解答例:</strong> No. Japanese people generally value traditional local dishes, and many foreign restaurants eventually close down after initial trends fade.</p>
            </div>
        `
    },
    session5: {
        image: "images/202403.png",
        steps: [
            {
                title: "音読",
                type: "image",
                instruction: "Please read the passage silently for 20 seconds.",
                timer: 20
            },
            {
                title: "No. 1",
                type: "image", 
                instruction: "According to the passage, how do some local governments try to deal with the problem of electronic waste?",
                timer: 40
            },
            {
                title: "No. 2 (黙読)",
                type: "image",
                instruction: "Now, please look at the picture and describe the situation. You have 20 seconds to prepare. Your story should begin with the sentence on the card.",
                timer: 20
            },
            {
                title: "No. 2 (スピーチ)",
                type: "image",
                instruction: "Please begin.",
                timer: 60
            },
            {
                title: "No. 3",
                type: "blank", 
                interstitialText: "Now, Mr. / Ms. ――, please turn over the card and put it down.",
                instruction: "Some people say that more families will use solar panels to produce electricity in the future. What do you think about that?",
                timer: 35
            },
            {
                title: "No. 4",
                type: "blank", 
                instruction: "In Japan, some high schools take their students on school trips to foreign countries. Do you think this is a good idea?",
                hasChoices: true,
                timer: 35
            }
        ],
        answersHtml: `
            <h2 style="margin-bottom: 15px; color: #2b8a3e;">2024년 제3회 A일정 (Electronic Waste) 解答・解説まとめ</h2>
            <div style="line-height: 1.6; font-size: 20px;">
                <p><strong>【No. 1 パッセージについての質問】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: According to the passage, how do some local governments try to deal with the problem of electronic waste?</p>
                <p><strong>解答例:</strong> (By) working together with companies that can recycle electronic waste.</p>
                <p style="color: #666; margin-bottom: 15px;"><strong>解説:</strong> パッセージの "Some local governments work together with these companies, and by doing so they try to deal with the problem of electronic waste." から答えます。</p>

                <p><strong>【No. 2 イラストの展開説明】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">条件: 指定された文（One weekend, Mr. and Mrs. Sato were talking in their living room.）から始める。</p>
                <p><strong>解答例:</strong><br>
                One weekend, Mr. and Mrs. Sato were talking in their living room. Later, they were drinking tea at a shop, and the wife was looking at a computer brochure while a man was saying "I'd like to have my own computer." The next month, they were buying a new computer at an electronics store. That evening at home, the husband was setting up the computer while the wife was watching.</p>
                <p style="margin-bottom: 15px;"></p>

                <p><strong>【No. 3 自分の意見：太陽光パネルの普及】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: Some people say that more families will use solar panels to produce electricity in the future. What do you think about that?</p>
                <p><strong>Agree の解答例:</strong> I agree. People are becoming more conscious of environmental issues and high electricity costs, so using clean energy at home will become standard.</p>
                <p style="margin-bottom: 10px;"><strong>Disagree の解答例:</strong> I disagree. Installing solar panels requires a large initial investment, and many houses do not receive enough sunlight depending on their location.</p>
                <p style="margin-bottom: 15px;"></p>

                <p><strong>【No. 4 自分の意見：高校の海外修学旅行】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: In Japan, some high schools take their students on school trips to foreign countries. Do you think this is a good idea?</p>
                <p><strong>Yes の解答例:</strong> Yes. Experiencing different cultures and speaking English abroad at a young age broadens students' perspectives and inspires them globally.</p>
                <p style="margin-bottom: 10px;"><strong>No の解答例:</strong> No. International school trips cost a lot of money, placing a heavy financial burden on many families, and safety concerns can be significant.</p>
            </div>
        `
    },
    session4: {
        image: "images/202501-1.png",
        steps: [
            {
                title: "音読",
                type: "image",
                instruction: "Please read the passage silently for 20 seconds.",
                timer: 20
            },
            {
                title: "No. 1",
                type: "image", 
                instruction: "According to the passage, how do some areas try to control the number of deer?",
                timer: 40
            },
            {
                title: "No. 2 (黙読)",
                type: "image",
                instruction: "Now, please look at the picture and describe the situation. You have 20 seconds to prepare. Your story should begin with the sentence on the card.",
                timer: 20
            },
            {
                title: "No. 2 (スピーチ)",
                type: "image",
                instruction: "Please begin.",
                timer: 60
            },
            {
                title: "No. 3",
                type: "blank", 
                interstitialText: "Now, Mr. / Ms. ――, please turn over the card and put it down.",
                instruction: "Some people say that people should buy products that are good for the environment, even when they are expensive. What do you think about that?",
                timer: 35
            },
            {
                title: "No. 4",
                type: "blank", 
                instruction: "Nowadays, many Japanese athletes are doing well in professional sports in foreign countries. Do you think the number of these athletes will increase in the future?",
                hasChoices: true,
                timer: 35
            }
        ],
        answersHtml: `
            <h2 style="margin-bottom: 15px; color: #2b8a3e;">2025년 제1회 B일정 (Living with Wildlife) 解答・解説まとめ</h2>
            <div style="line-height: 1.6; font-size: 20px;">
                <p><strong>【No. 1 パッセージについての質問】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: According to the passage, how do some areas try to control the number of deer?</p>
                <p><strong>解答例:</strong> (By) using data from research about how wildlife lives in nature.</p>
            </div>
        `
    },
    session3: {
        image: "images/202501.png",
        steps: [
            {
                title: "音読",
                type: "image",
                instruction: "Please read the passage silently for 20 seconds.",
                timer: 20
            },
            {
                title: "No. 1",
                type: "image", 
                instruction: "According to the passage, how do many businesses try to make their economic activities more efficient?",
                timer: 40
            },
            {
                title: "No. 2 (黙読)",
                type: "image",
                instruction: "Now, please look at the picture and describe the situation. You have 20 seconds to prepare. Your story should begin with the sentence on the card.",
                timer: 20
            },
            {
                title: "No. 2 (スピーチ)",
                type: "image",
                instruction: "Please begin.",
                timer: 60
            },
            {
                title: "No. 3",
                type: "blank", 
                interstitialText: "Now, Mr. / Ms. ――, please turn over the card and put it down.",
                instruction: "Some people say that, because of the Internet, people will stop buying newspapers in the future. What do you think about that?",
                timer: 35
            },
            {
                title: "No. 4",
                type: "blank", 
                instruction: "These days, organic vegetables are becoming popular. Do you think more people will buy organic vegetables in the future?",
                hasChoices: true,
                timer: 35
            }
        ],
        answersHtml: `
            <h2 style="margin-bottom: 15px; color: #2b8a3e;">2025년 제1회 A일정 解答・解説まとめ</h2>
            <div style="line-height: 1.6; font-size: 20px;">
                <p><strong>【No. 1 パッセージについての質問】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: According to the passage, how do many businesses try to make their economic activities more efficient?</p>
                <p><strong>解答例:</strong> (By) introducing systems that use smartphones for payment.</p>
            </div>
        `
    },
    session1: {
        image: "images/202502.png",
        steps: [
            {
                title: "音読",
                type: "image",
                instruction: "Please read the passage silently for 20 seconds.",
                timer: 20
            },
            {
                title: "No. 1",
                type: "image", 
                instruction: "According to the passage, how will passengers travel faster and quieter than in the past?",
                timer: 40
            },
            {
                title: "No. 2 (黙読)",
                type: "image",
                instruction: "Now, please look at the picture and describe the situation. You have 20 seconds to prepare. Your story should begin with the sentence on the card.",
                timer: 20
            },
            {
                title: "No. 2 (スピーチ)",
                type: "image",
                instruction: "Please begin.",
                timer: 60
            },
            {
                title: "No. 3",
                type: "blank", 
                interstitialText: "Now, Mr. / Ms. ――, please turn over the card and put it down.",
                instruction: "Some people say that trains are a better way to travel than airplanes. What do you think about that?",
                timer: 35
            },
            {
                title: "No. 4",
                type: "blank", 
                instruction: "Today, many movies have violent scenes. Do you think people should stop making these movies?",
                hasChoices: true,
                timer: 35
            }
        ],
        answersHtml: `
            <h2 style="margin-bottom: 15px; color: #2b8a3e;">2025년 제2회 A일정 解答・解説まとめ</h2>
            <div style="line-height: 1.6; font-size: 20px;">
                <p><strong>【No. 1 パッセージについての質問】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: According to the passage, how will passengers travel faster and quieter than in the past?</p>
                <p><strong>解答例:</strong> (By) making use of trains that float on the tracks with powerful magnets.</p>
            </div>
        `
    },
    session2: {
        image: "images/202502-1.png",
        steps: [
            {
                title: "音読",
                type: "image",
                instruction: "Please read the passage silently for 20 seconds.",
                timer: 20
            },
            {
                title: "No. 1",
                type: "image", 
                instruction: "According to the passage, how can some consumers help protect the environment?",
                timer: 40
            },
            {
                title: "No. 2 (黙読)",
                type: "image",
                instruction: "Now, please look at the picture and describe the situation. You have 20 seconds to prepare. Your story should begin with the sentence on the card.",
                timer: 20
            },
            {
                title: "No. 2 (スピーチ)",
                type: "image",
                instruction: "Please begin.",
                timer: 60
            },
            {
                title: "No. 3",
                type: "blank", 
                interstitialText: "Now, Mr. / Ms. ――, please turn over the card and put it down.",
                instruction: "Some people say that the government should do something to increase the number of young farmers in Japan. What do you think about that?",
                timer: 35
            },
            {
                title: "No. 4",
                type: "blank", 
                instruction: "Today, some cities ask people to use buses and trains instead of cars. Do you think more cities will do this in the future?",
                hasChoices: true,
                timer: 35
            }
        ],
        answersHtml: `
            <h2 style="margin-bottom: 15px; color: #2b8a3e;">2025년 제2회 B일정 解答・解説まとめ</h2>
            <div style="line-height: 1.6; font-size: 20px;">
                <p><strong>【No. 1 パッセージについての質問】</strong></p>
                <p style="margin-bottom: 10px; color: #555;">質問: According to the passage, how can some consumers help protect the environment?</p>
                <p><strong>解答例:</strong> (By) refusing to buy food from areas that are far away.</p>
            </div>
        `
    }
};

function updateVolume() {
    const slider = document.getElementById('volumeSlider');
    currentVolume = slider.value / 100;
}

function changeExamSession() {
    const select = document.getElementById('examSelect');
    currentSession = select.value;
    currentStep = 0;
    renderStep();
}

function renderStep() {
    clearInterval(timerInterval);
    document.getElementById('timerBadge').style.display = 'none';

    const session = examData[currentSession];
    const isResultPage = (currentStep === session.steps.length);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, idx) => {
        if (idx === currentStep) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const leftPanel = document.getElementById('leftPanel');
    const rightPanel = document.getElementById('rightPanel');

    if (isResultPage) {
        leftPanel.style.flex = "1";
        rightPanel.style.display = "none";

        document.getElementById('leftSectionTitle').innerText = "解答・解説一覧";
        document.getElementById('leftContent').innerHTML = `
            <div style="width: 100%; height: 100%; overflow-y: auto; padding: 10px; background: #fff;">
                ${session.answersHtml}
                <div style="margin-top: 30px; text-align: center; padding-bottom: 20px;">
                    <button class="control-btn" style="background-color: #3b71ca; color: white; margin: 0 auto; padding: 12px 30px; font-size: 16px;" onclick="goToStep(0)">最初からやり直す</button>
                </div>
            </div>
        `;
        return;
    } else {
        rightPanel.style.display = "flex";
        leftPanel.style.flex = "1.3";
    }

    const step = session.steps[currentStep];
    document.getElementById('leftSectionTitle').innerText = step.title;

    const leftContent = document.getElementById('leftContent');
    
    if (step.type === 'image') {
        leftContent.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${session.image}" alt="문제 카드 이미지">
            </div>
        `;
    } else if (step.type === 'blank') {
        leftContent.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #6c757d; font-size: 18px; text-align: center; border: 2px dashed #dee2e6; border-radius: 8px; padding: 40px; width: 100%;">
                <p>🎧 面接官の質問をよく聞いて答えてください</p>
                <p style="font-size: 14px; margin-top: 10px; color: #adb5bd;">(この問題ではカードを伏せます)</p>
            </div>
        `;
    }

    const middleArea = document.getElementById('dynamicMiddleArea');
    if (step.hasChoices) {
        middleArea.innerHTML = `
            <div class="yes-no-container">
                <button class="choice-btn" id="yesBtn" onclick="selectChoice('yes')">Yes</button>
                <button class="choice-btn" id="noBtn" onclick="selectChoice('no')">No</button>
            </div>
            <div class="mic-icon-container" id="micContainer">
                <svg class="mic-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                <div class="timer-badge" id="timerBadge">35</div>
            </div>
        `;
    } else {
        middleArea.innerHTML = `
            <div class="mic-icon-container" id="micContainer">
                <svg class="mic-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                <div class="timer-badge" id="timerBadge">${step.timer}</div>
            </div>
        `;
    }

    document.getElementById('beforeBtn').disabled = (currentStep === 0);
    document.getElementById('nextBtn').innerText = "次へ >";

    if (step.interstitialText) {
        speakText(step.interstitialText, () => {
            speakText(step.instruction, () => {
                startTimer(step.timer);
            });
        });
    } else {
        speakText(step.instruction, () => {
            startTimer(step.timer);
        });
    }
}

function speakText(text, callback) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.volume = currentVolume;

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => 
            v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Enhanced') || v.name.includes('Samantha') || v.name.includes('Zira'))
        ) || voices.find(v => v.lang.includes('en-US')) || voices[0];

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
            if (callback) callback();
        };
        window.speechSynthesis.speak(utterance);
    } else {
        if (callback) callback();
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

function startTimer(seconds) {
    timeLeft = seconds;
    const badge = document.getElementById('timerBadge');
    if (!badge) return;
    badge.style.display = 'block';
    badge.innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            badge.innerText = timeLeft;
        } else {
            clearInterval(timerInterval);
            badge.style.display = 'none';
        }
    }, 1000);
}

function nextStep() {
    const session = examData[currentSession];
    if (currentStep <= session.steps.length - 1) {
        currentStep++;
        renderStep();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
}

function goToStep(stepIndex) {
    currentStep = stepIndex;
    renderStep();
}

function selectChoice(choice) {
    document.getElementById('yesBtn').classList.remove('selected');
    document.getElementById('noBtn').classList.remove('selected');
    
    if (choice === 'yes') {
        document.getElementById('yesBtn').classList.add('selected');
        speakText("Why?", () => {
            startTimer(35);
        });
    } else {
        document.getElementById('noBtn').classList.add('selected');
        speakText("Why not?", () => {
            startTimer(35);
        });
    }
}

window.onload = () => {
    renderStep();
};