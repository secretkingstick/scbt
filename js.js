// ==========================================
// 1. 리스닝(Listening) 관련 데이터 및 로직 (구 js.js)
// ==========================================

const examData = {
    "2023-3": {
        title: "2023年 第3回",
        questions: [
            { no: 1, answer: 3, options: ["Their favorite French café has closed.", "They enjoyed the food last time.", "They can try new dishes.", "They want to eat Italian food."] },
            { no: 2, answer: 3, options: ["Standing in front of a mirror.", "Writing to a magazine for style advice.", "Looking at magazines.", "Talking to a salon owner."] },
            { no: 3, answer: 1, options: ["To learn about an apartment.", "To buy an air conditioner.", "To make an advertisement.", "To rent a bed for his home."] },
            { no: 4, answer: 3, options: ["Ask her grandparents to go on a trip.", "Take her grandparents to her cousins’ house.", "Ask her cousins to come to her grandparents’ house.", "Take her cousins to their house this summer."] },
            { no: 5, answer: 1, options: ["If she can stay in her tent.", "If the cabins have a sound system.", "If the cabins have a large bed.", "If she can use the bathroom."] },
            { no: 6, answer: 1, options: ["He is free to take photographs in any style.", "He has to use black-and-white photos.", "He should be careful taking color photos.", "He should finish his assignment quickly."] },
            { no: 7, answer: 2, options: ["It costs more than the cheese.", "It is on sale today.", "It does not come with broccoli.", "It does not look very fresh."] },
            { no: 8, answer: 1, options: ["She lives in an apartment.", "She wants a bigger balcony.", "She bought the tomato at the store.", "She moved to a house with a garden."] },
            { no: 9, answer: 3, options: ["Drive down Main Street.", "Stop to see the parade.", "Use Smith Road instead.", "Wait until the parade ends."] },
            { no: 10, answer: 2, options: ["A list of new medicines from Dr. James.", "A copy of her health files from Dr. James.", "To let Dr. James know her new address.", "To ask Dr. James about a new doctor."] },
            { no: 11, answer: 2, options: ["Put garbage in the garbage can.", "Divide into two groups to play a game.", "Throw paper balls at each other.", "Hand candy to the other students."] },
            { no: 12, answer: 4, options: ["Her husband got work in a new city.", "Her husband found a better job.", "She is tired of working every day.", "She did not get a promotion."] },
            { no: 13, answer: 1, options: ["Grilled tuna with vegetables.", "Something that has pork in it.", "Barbecued chicken fried in oil.", "One of the vegetarian options."] },
            { no: 14, answer: 4, options: ["The way a book is organized.", "What their class will be like.", "Their favorite foreign language.", "A book the boy is reading."] },
            { no: 15, answer: 4, options: ["He did not go to Professor Massa’s class.", "He would not help her with homework.", "He made her late for the bus.", "He lost her economics book."] },
            { no: 16, answer: 4, options: ["She had never been hiking before.", "She wore the wrong kind of shoes.", "She did not eat enough.", "She packed too many things."] },
            { no: 17, answer: 2, options: ["Managing the money.", "Finding new items for the store.", "Tracking the inventory.", "Selling items to other stores."] },
            { no: 18, answer: 4, options: ["Sports players are chasing them.", "The race hill is too long.", "They want to make some cheese.", "They are running too quickly."] },
            { no: 19, answer: 1, options: ["She performs in a dance.", "She builds the sets.", "She plays in the orchestra.", "She attends the Christmas party."] },
            { no: 20, answer: 2, options: ["Put away their cameras.", "Sit down in their seats for departure.", "Look to their right to see whales.", "Welcome the crew to the boat."] },
            { no: 21, answer: 4, options: ["He thinks floor exercise is boring.", "He traveled abroad to compete.", "His coach was in the national championships.", "He has won many awards."] },
            { no: 22, answer: 3, options: ["They are rainforests that do not have waterfalls.", "They are located on the tops of mountains.", "Certain plants and animals can only be found there.", "The climate is quite cold and rainy."] },
            { no: 23, answer: 4, options: ["The painting class was canceled.", "She wanted to paint her room.", "She decided to relax.", "The weather was bad."] },
            { no: 24, answer: 4, options: ["Close to beach visitors.", "Near eggs of other animals.", "In the sand in the cool ocean.", "In holes on beaches."] },
            { no: 25, answer: 1, options: ["Wait outside for 20 minutes.", "Leave the museum in 30 minutes.", "Find the exit and go home.", "Remain inside during the test."] },
            { no: 26, answer: 1, options: ["She likes to play with her dog on the beach.", "She needs to practice throwing a stick.", "She enjoys watching the sun come up at sunrise.", "She wants to enjoy swimming with her dog."] },
            { no: 27, answer: 4, options: ["Catch lobsters at Cape Cod.", "Stay in fancy hotels.", "Eat seafood at college.", "Hike around Niagara Falls."] },
            { no: 28, answer: 2, options: ["Acting in starring roles.", "Making thriller films.", "Writing funny movie scripts.", "Filming cultural documentaries."] },
            { no: 29, answer: 3, options: ["To take his customers' photographs.", "To hold marriage ceremonies.", "To bake wedding cakes.", "To arrange beautiful flowers."] },
            { no: 30, answer: 1, options: ["Remain in their seats.", "Put away their cell phones.", "Take part in the performance.", "Visit the snack stand."] }
        ]
    },
    "2024-1": {
        title: "2024年 第1回",
        questions: [
            { no: 1, answer: 1, options: ["The meat dish.", "The garlic bread.", "The garden salad.", "The fresh tomatoes."] },
            { no: 2, answer: 2, options: ["A second company branch is opening.", "The new manager is a man.", "A woman in her office was fired.", "The president wants to talk to her."] },
            { no: 3, answer: 1, options: ["Discuss buying a painting.", "Compare prices at other art galleries.", "Take a painting class on 31st Street.", "Make plans to open an art gallery."] },
            { no: 4, answer: 2, options: ["She wants to sell her vegetables.", "She will start gardening this year.", "She knows a lot about plants.", "She grows a lot of tomatoes."] },
            { no: 5, answer: 2, options: ["It is inexpensive.", "It is in a good location.", "It has a pretty garden.", "It is bigger than the other houses."] },
            { no: 6, answer: 1, options: ["Cook tasty food.", "Dry the wood.", "Win a card game.", "Have no fun."] },
            { no: 7, answer: 1, options: ["He burned the cake he was making.", "He used up all of the eggs.", "He forgot to put the cake in the oven.", "He did not add enough sugar."] },
            { no: 8, answer: 2, options: ["He will take a bus tour tonight.", "He will leave the city tomorrow.", "He has used Happy Town Tours before.", "He has worked as a tour guide."] },
            { no: 9, answer: 4, options: ["He could not choose the fabric he wanted.", "He needs to find his credit card.", "He wanted to pick different furniture.", "He thinks the chair was not expensive."] },
            { no: 10, answer: 3, options: ["She bought a new car.", "Her car broke down.", "They should shop for cars online.", "Car shopping is difficult."] },
            { no: 11, answer: 1, options: ["It costs too much.", "There are not enough colors.", "The case is too large.", "The pencils are too short."] },
            { no: 12, answer: 3, options: ["Make a project schedule.", "Call the manager.", "Eat with her kids.", "Work on her project."] },
            { no: 13, answer: 2, options: ["Meet a new puppy.", "Ask to visit on a different day.", "Work late on Friday.", "Eat good food tonight."] },
            { no: 14, answer: 2, options: ["She forgot to make dinner reservations.", "She needs to eat dinner later.", "She missed a phone call from the man.", "She wants to meet on a different day."] },
            { no: 15, answer: 1, options: ["He forgot to make a phone call.", "He cannot find his dog.", "He has not paid his friend back.", "He is worried about his sister."] },
            { no: 16, answer: 4, options: ["Big waves have caused damage to it.", "It was built mainly for children to use.", "People must wait a long time to use it.", "Tourism increased after it was built."] },
            { no: 17, answer: 2, options: ["E-mail the radio station.", "Call the radio station.", "Buy a CD.", "Go to a party."] },
            { no: 18, answer: 4, options: ["She plays on the playground.", "She drives the park bus.", "She guides people on the nature trail.", "She takes care of the gardens."] },
            { no: 19, answer: 3, options: ["To ask his coworkers a question.", "To make the presentation short.", "To prepare for people's questions.", "To write a report at home."] },
            { no: 20, answer: 3, options: ["Good metal detectors are expensive.", "Metal detectors are difficult to use.", "Most people do not find valuable items.", "People are required to donate found items."] },
            { no: 21, answer: 4, options: ["Travel for less than a week.", "Take a trip in the summer.", "Go on an expensive tour.", "See lots of museums."] },
            { no: 22, answer: 2, options: ["He stayed at a nice hotel.", "He ate dinner at special restaurants.", "He saw plays at night.", "He traveled to famous places."] },
            { no: 23, answer: 1, options: ["Take the subway.", "Ride a bicycle.", "Walk on the sidewalk.", "Drive on 14th Street."] },
            { no: 24, answer: 1, options: ["She interviewed for a new job.", "She started her own company.", "She did research on AI.", "She sent her résumé to the AI company."] },
            { no: 25, answer: 2, options: ["Where to find a pet store.", "How to adopt a pet.", "How to visit an animal hospital.", "Where to buy pet food."] },
            { no: 26, answer: 3, options: ["It works with only a few medicines.", "It is very popular with doctors.", "It is placed inside the patient’s mouth.", "It lets medicine slowly enter the body."] },
            { no: 27, answer: 2, options: ["To the library.", "To a friend’s house.", "To his apartment.", "To his office."] },
            { no: 28, answer: 4, options: ["Take a dance class next year instead.", "Take a dance class in the evenings.", "Take the same class as her friends.", "Take a different class from her friends."] },
            { no: 29, answer: 1, options: ["People once thought it no longer existed.", "It was found outside of New Zealand.", "People collect its eggs to protect them.", "It lives only in zoos now."] },
            { no: 30, answer: 3, options: ["He sold them to a coin expert.", "He traded them to buy a car.", "He displayed them in his home.", "He left them for his grandfather."] }
        ]
    },
    "2024-2": {
        title: "2024年 第2回",
        questions: [
            { no: 1, answer: 3, options: ["Get a new pet.", "Tell him the time.", "Clean the fish tank.", "Give him some fish."] },
            { no: 2, answer: 4, options: ["She finds her work stressful.", "She has a favorite restaurant.", "She enjoys studying Korean.", "She sometimes cooks for herself."] },
            { no: 3, answer: 3, options: ["Whether she knows the way to his house.", "Whether she can lend him a jacket.", "Whether she has found his camera.", "Whether she will come to his party."] },
            { no: 4, answer: 4, options: ["Sell his hard drive to the woman.", "Have his computer repaired.", "Work at Computer Plaza.", "Get a new computer."] },
            { no: 5, answer: 4, options: ["She wants to see some friends living nearby.", "She wants to relax in the countryside.", "She has to look after the house.", "She has to catch an airplane tomorrow."] },
            { no: 6, answer: 2, options: ["Order only vegetarian food.", "Share what they order.", "Ask the waiter for a recommendation.", "Go to another restaurant."] },
            { no: 7, answer: 2, options: ["He met a famous actor.", "He was filmed at a restaurant.", "He was given a tour of a TV station.", "He won a free plane ticket."] },
            { no: 8, answer: 2, options: ["They studied math together all day.", "They took a test for another subject.", "They went to eat dessert after the test.", "They celebrated the boy’s birthday."] },
            { no: 9, answer: 4, options: ["There are too many apartments to choose from.", "She needs to find an apartment quickly.", "Her apartment does not have a parking lot.", "Apartments near her office are too expensive."] },
            { no: 10, answer: 1, options: ["Pick the Wi-Fi access point by hand.", "Bring her computer to the third floor.", "Use a different computer from now on.", "Try to restart her computer."] },
            { no: 11, answer: 2, options: ["She missed an important appointment.", "She does not like her new hair color.", "The man forgot to call her.", "The hair salon she always goes to is closed."] },
            { no: 12, answer: 2, options: ["He thought he had missed Keita's speech.", "Disturbing others during the speech contest.", "He thought he had lost his room key.", "Forgetting his speech during the contest."] },
            { no: 13, answer: 4, options: ["It is not as good as the man suggested.", "Other movies she watched this year are more interesting.", "She likes the main characters in it.", "It has a surprising ending."] },
            { no: 14, answer: 3, options: ["Groups with absent members will not receive a grade.", "It has been canceled.", "Students are expected to do it as a group.", "The deadline has been changed."] },
            { no: 15, answer: 1, options: ["Finish the translation today.", "Prepare for a business trip.", "Work overtime every day this week.", "Ask someone else to send the document."] },
            { no: 16, answer: 3, options: ["It stops the river’s flow.", "It melts the waste using heat.", "It lifts the waste to the surface.", "It catches fish that eat the waste."] },
            { no: 17, answer: 2, options: ["Meeting many international students.", "Assisting students with research.", "Reading many books for free.", "Working with a lot of different people."] },
            { no: 18, answer: 2, options: ["They help prevent floods.", "They increase water pollution.", "They reduce soil nutrients.", "They stop plant growth."] },
            { no: 19, answer: 3, options: ["To buy some fresh vegetables.", "To visit a local farm.", "To meet her friend.", "To buy a bicycle."] },
            { no: 20, answer: 2, options: ["He forgot his notebook.", "He missed his math class.", "He has a doctor's appointment.", "He needs to study for a test."] },
            { no: 21, answer: 2, options: ["She wants to learn how to swim.", "She lost her swimming goggles.", "The swimming pool is closed.", "She forgot her towel at home."] },
            { no: 22, answer: 1, options: ["He has visited many countries.", "He wants to learn French.", "He lives in Canada.", "He speaks two languages."] },
            { no: 23, answer: 4, options: ["Clean the kitchen table.", "Throw away old newspapers.", "Put the milk in the fridge.", "Wash the dirty dishes."] },
            { no: 24, answer: 2, options: ["She is moving to a new office.", "She lost her company ID.", "She got a promotion.", "She is changing her position."] },
            { no: 25, answer: 4, options: ["He wants to buy a new guitar.", "He needs to practice for a concert.", "His brother broke his guitar string.", "He wants to join a band."] },
            { no: 26, answer: 2, options: ["She needs more time to write.", "She finished her essay early.", "Her teacher liked her topic.", "She changed the essay title."] },
            { no: 27, answer: 3, options: ["Take the train instead of driving.", "Leave earlier in the morning.", "Take a different highway.", "Check the traffic report online."] },
            { no: 28, answer: 1, options: ["She wants to adopt a cat.", "She is allergic to animals.", "She needs a pet for her kids.", "She wants to volunteer at a shelter."] },
            { no: 29, answer: 3, options: ["He missed the morning train.", "His alarm clock did not ring.", "He stayed up late watching TV.", "His car wouldn't start."] },
            { no: 30, answer: 2, options: ["She wants to study art history.", "She is visiting a famous museum.", "She bought a painting online.", "She lost her museum ticket."] }
        ]
    },
    "2024-3": {
        title: "2024年 第3回",
        questions: [
            { no: 1, answer: 2, options: ["They want to eat Italian food.", "They enjoyed the food last time.", "Their favorite French café has closed.", "They can try new dishes."] },
            { no: 2, answer: 3, options: ["Looking at magazines.", "Standing in front of a mirror.", "Writing to a magazine for style advice.", "Talking to a salon owner."] },
            { no: 3, answer: 2, options: ["To buy an air conditioner.", "To learn about an apartment.", "To rent a bed for his home.", "To make an advertisement."] },
            { no: 4, answer: 3, options: ["Ask her cousins to come to her grandparents’ house.", "Take her cousins to their house this summer.", "Ask her grandparents to go on a trip.", "Take her grandparents to her cousins’ house."] },
            { no: 5, answer: 4, options: ["If the cabins have a sound system.", "If she can stay in her tent.", "If the cabins have a large bed.", "If she can use the bathroom."] },
            { no: 6, answer: 2, options: ["He has to use black-and-white photos.", "He is free to take photographs in any style.", "He should be careful taking color photos.", "He should finish his assignment quickly."] },
            { no: 7, answer: 4, options: ["It is on sale today.", "It costs more than the cheese.", "It does not come with broccoli.", "It does not look very fresh."] },
            { no: 8, answer: 4, options: ["She wants a bigger balcony.", "She lives in an apartment.", "She moved to a house with a garden.", "She bought the tomato at the store."] },
            { no: 9, answer: 2, options: ["Stop to see the parade.", "Drive down Main Street.", "Wait until the parade ends.", "Use Smith Road instead."] },
            { no: 10, answer: 3, options: ["A copy of her health files from Dr. James.", "A list of new medicines from Dr. James.", "To let Dr. James know her new address.", "To ask Dr. James about a new doctor."] },
            { no: 11, answer: 3, options: ["Divide into two groups to play a game.", "Throw paper balls at each other.", "Hand candy to the other students.", "Put garbage in the garbage can."] },
            { no: 12, answer: 3, options: ["Her husband found a better job.", "Her husband got work in a new city.", "She is tired of working every day.", "She did not get a promotion."] },
            { no: 13, answer: 1, options: ["Something that has pork in it.", "Barbecued chicken fried in oil.", "Grilled tuna with vegetables.", "One of the vegetarian options."] },
            { no: 14, answer: 3, options: ["What their class will be like.", "Their favorite foreign language.", "The way a book is organized.", "A book the boy is reading."] },
            { no: 15, answer: 4, options: ["He would not help her with homework.", "He made her late for the bus.", "He did not go to Professor Massa’s class.", "He lost her economics book."] },
            { no: 16, answer: 3, options: ["She wore the wrong kind of shoes.", "She did not eat enough.", "She packed too many things.", "She had never been hiking before."] },
            { no: 17, answer: 3, options: ["Finding new items for the store.", "Managing the money.", "Selling items to other stores.", "Tracking the inventory."] },
            { no: 18, answer: 4, options: ["The race hill is too long.", "They want to make some cheese.", "Sports players are chasing them.", "They are running too quickly."] },
            { no: 19, answer: 2, options: ["She builds the sets.", "She performs in a dance.", "She attends the Christmas party.", "She plays in the orchestra."] },
            { no: 20, answer: 2, options: ["Put away their cameras.", "Sit down in their seats for departure.", "Welcome the crew to the boat.", "Look to their right to see whales."] },
            { no: 21, answer: 4, options: ["He traveled abroad to compete.", "His coach was in the national championships.", "He has won many awards.", "He thinks floor exercise is boring."] },
            { no: 22, answer: 1, options: ["They are located on the tops of mountains.", "They are rainforests that do not have waterfalls.", "The climate is quite cold and rainy.", "Certain plants and animals can only be found there."] },
            { no: 23, answer: 3, options: ["The painting class was canceled.", "She decided to relax.", "She wanted to paint her room.", "The weather was bad."] },
            { no: 24, answer: 2, options: ["Near eggs of other animals.", "In the sand in the cool ocean.", "In holes on beaches.", "Close to beach visitors."] },
            { no: 25, answer: 1, options: ["Wait outside for 20 minutes.", "Remain inside during the test.", "Find the exit and go home.", "Leave the museum in 30 minutes."] },
            { no: 26, answer: 1, options: ["She needs to practice throwing a stick.", "She likes to play with her dog on the beach.", "She wants to enjoy swimming with her dog.", "She enjoys watching the sun come up at sunrise."] },
            { no: 27, answer: 4, options: ["Stay in fancy hotels.", "Eat seafood at college.", "Hike around Niagara Falls.", "Catch lobsters at Cape Cod."] },
            { no: 28, answer: 1, options: ["Making thriller films.", "Writing funny movie scripts.", "Acting in starring roles.", "Filming cultural documentaries."] },
            { no: 29, answer: 2, options: ["To hold marriage ceremonies.", "To take his customers' photographs.", "To arrange beautiful flowers.", "To bake wedding cakes."] },
            { no: 30, answer: 2, options: ["Put away their cell phones.", "Remain in their seats.", "Visit the snack stand.", "Take part in the performance."] }
        ]
    }
};

let currentExamKey = "2024-1";
let currentQuestionIndex = 0; 
let userAnswers = {}; 
let isSubmitted = false;

function changeExam(examKey) {
    currentExamKey = examKey;
    currentQuestionIndex = 0;
    userAnswers = {}; 
    isSubmitted = false;

    document.querySelectorAll('.page-nav button').forEach(btn => btn.classList.remove('active'));
    const clickedBtn = Array.from(document.querySelectorAll('.page-nav button'))
                            .find(btn => btn.getAttribute('onclick').includes(examKey));
    if (clickedBtn) clickedBtn.classList.add('active');

    renderPage();
}

function renderPage() {
    const item = examData[currentExamKey];
    const container = document.getElementById('content-area');
    if (!container) return; // 리딩 모드일 경우 컨테이너가 없으므로 무시

    const totalQuestions = item.questions.length;
    const currentQ = item.questions[currentQuestionIndex];
    const selectedOpt = userAnswers[currentQ.no];
    const correctOpt = currentQ.answer;

    let qNavButtons = '';
    for (let i = 0; i < totalQuestions; i++) {
        const qNum = item.questions[i].no;
        let statusClass = '';
        if (userAnswers[qNum] !== undefined) statusClass = 'answered';
        
        if (isSubmitted) {
            if (userAnswers[qNum] === item.questions[i].answer) {
                statusClass = 'correct-num';
            } else {
                statusClass = 'wrong-num';
            }
        }

        const isActive = i === currentQuestionIndex ? 'active' : '';
        qNavButtons += `<button class="q-nav-btn ${isActive} ${statusClass}" onclick="goToQuestion(${i})">${qNum}</button>`;
    }

    let html = `
        <div class="quick-nav-box">
            <div class="quick-nav-grid">
                ${qNavButtons}
            </div>
        </div>

        <div class="questions-container">
            <div class="question-card">
                <div class="q-instruction">
                    <div class="instruction-icon">${currentQ.no}</div>
                    <div class="instruction-text">対話を聞き，その質問に対して最も適切なものを1, 2, 3, 4の中から一つ選びなさい。</div>
                </div>

                <div class="q-number-title">No. ${currentQ.no}</div>
                <div class="q-divider"></div>

                <div class="options-list">
                    ${currentQ.options.map((opt, idx) => {
                        const optNum = idx + 1;
                        let optionClass = '';
                        
                        if (selectedOpt === optNum) {
                            optionClass += ' selected ';
                        }

                        if (isSubmitted) {
                            if (optNum === correctOpt) {
                                optionClass += ' correct ';
                            } else if (selectedOpt === optNum && selectedOpt !== correctOpt) {
                                optionClass += ' wrong ';
                            }
                        }

                        return `
                            <div class="option-item ${optionClass}" onclick="selectOption(${currentQ.no}, ${optNum})">
                                <div class="opt-num-box">
                                    <span class="opt-circle">${optNum}</span>
                                </div>
                                <div class="opt-text">${opt}</div>
                            </div>
                        `;
                    }).join('')}
                </div>

                ${isSubmitted ? `<div style="margin-top: 15px; font-weight: bold; color: ${selectedOpt === correctOpt ? '#28a745' : '#dc3545'};">
                    ${selectedOpt === correctOpt ? '정답입니다! ✓' : `틀렸습니다. (정답: ${correctOpt}번)`}
                </div>` : ''}

                <div class="card-footer-nav">
                    <button class="nav-control-btn" onclick="prevListeningQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>이전 문제</button>
                    <button class="nav-control-btn primary" onclick="nextListeningQuestion()" ${currentQuestionIndex === totalQuestions - 1 ? 'disabled' : ''}>다음 문제</button>
                </div>
            </div>
        </div>

        <div class="global-check-container" style="margin-top: 30px; border-top: 3px solid #3498db; padding-top: 20px;">
            <button type="button" id="global-check-btn" class="global-check-btn" onclick="submitExam()" style="background-color: #e67e22; color: white; border: none; width: 100%; padding: 14px; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; box-shadow: 0 4px 6px rgba(230, 126, 34, 0.2);" ${isSubmitted ? 'disabled style="background-color: #95a5a6; cursor: not-allowed;"' : ''}>${isSubmitted ? '採点終了' : '一括で答え合わせをする'}</button>
            <div id="global-score-display" class="global-score ${isSubmitted ? '' : 'hidden'}" style="margin-top: 10px; font-size: 1.2rem; font-weight: bold; color: #2c3e50; background-color: #f8f9fa; padding: 10px 20px; border-radius: 6px; border: 1px solid #cbd5e0; text-align: center; width: 100%;">
                ${isSubmitted ? (() => {
                    const questions = examData[currentExamKey].questions;
                    let score = 0;
                    questions.forEach(q => { if (userAnswers[q.no] === q.answer) score++; });
                    return `採点完了！ 正解数: ${score} / ${questions.length} 問`;
                })() : ''}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function selectOption(qNo, optNum) {
    if (isSubmitted) return;
    userAnswers[qNo] = optNum;
    renderPage();
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    renderPage();
}

function prevListeningQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderPage();
    }
}

function nextListeningQuestion() {
    const total = examData[currentExamKey].questions.length;
    if (currentQuestionIndex < total - 1) {
        currentQuestionIndex++;
        renderPage();
    }
}

function submitExam() {
    const questions = examData[currentExamKey].questions;
    let score = 0;
    
    questions.forEach(q => {
        if (userAnswers[q.no] === q.answer) {
            score++;
        }
    });

    isSubmitted = true;
    renderPage();
    alert(`채점이 완료되었습니다! 총 30문제 중 ${score}문제를 맞혔습니다.`);
}


// ==========================================
// 2. 리딩(Reading) 관련 데이터 및 로직 (구 js1.js)
// ==========================================

// ==========================================
// 2. 리딩(Reading) 관련 데이터 및 로직
// 各回とも 筆記(1)〜(31) ※2023-3のみ(1)〜(38)
// ==========================================

const readingData = {
    "2025-3": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "At the gym, Hugh did exercises to increase the strength of his (          ) body. After a few months, people began to comment on his big chest muscles.", answer: 2, options: ["major", "upper", "direct", "elastic"] },
                    { no: 2, questionText: "Cindy had excellent views of the ocean and nearby islands as she stood at the edge of a tall (          ). Looking down, she could see waves crashing on the rocks far below.", answer: 3, options: ["troop", "proverb", "cliff", "duty"] },
                    { no: 3, questionText: "A: How did your husband (          ) when you told him about the baby?\nB: He was really happy. He says that he can't wait to become a dad.", answer: 2, options: ["exist", "react", "seize", "disappear"] },
                    { no: 4, questionText: "A: What do you want to be when you grow up, Amy?\nB: I'm not sure, but I think I'd like to be a (          ). I want to learn about the meaning of life.", answer: 3, options: ["president", "spectator", "philosopher", "conductor"] },
                    { no: 5, questionText: "A: What did you do when you realized you had lost your passport?\nB: I started to (          ), but then I remembered that I had put it in my suitcase.", answer: 2, options: ["interact", "panic", "fly", "swim"] },
                    { no: 6, questionText: "A: How is your new job going, Sarah?\nB: It's great, but there is so much to learn. My boss says we will (          ) my progress next month.", answer: 2, options: ["recover", "review", "expand", "suspect"] },
                    { no: 7, questionText: "Neil stopped to (          ) his shoelaces in the middle of the sidewalk. They had come undone while he was walking.", answer: 1, options: ["tie", "earn", "hire", "pour"] },
                    { no: 8, questionText: "A: Why do you think many people support the soccer team, even though it has not won a championship for twenty years?\nB: Because the fans have a lot of (          ) to the team.", answer: 3, options: ["fortune", "distinction", "loyalty", "suspicion"] },
                    { no: 9, questionText: "Arguments often result from people's (          ) of each other's ways, so it is important for everyone to try to understand the people around them.", answer: 3, options: ["wealth", "rage", "ignorance", "poverty"] },
                    { no: 10, questionText: "A: I heard you got lost in the mountains last weekend. That sounds scary!\nB: It was, but (          ), I found a stream and followed it down to the road.", answer: 2, options: ["innocently", "thankfully", "traditionally", "resentfully"] },
                    { no: 11, questionText: "A: What did you do to get such a good score on your French test?\nB: I (          ) to study all the vocabulary every night before I go to sleep.", answer: 3, options: ["shake hands", "give way", "take pains", "make sense"] },
                    { no: 12, questionText: "The two brothers were (          ) the same size when they were children, but now, one of them is much bigger than the other.", answer: 1, options: ["more or less", "sooner or later", "day and night", "before and after"] },
                    { no: 13, questionText: "After Samantha and Mark took an expensive vacation, they could barely (          ) the money they had left. They couldn't afford to eat at restaurants or buy new clothes.", answer: 3, options: ["show off", "put away", "live on", "consist of"] },
                    { no: 14, questionText: "A: Did your cat come home last night?\nB: Yes, he did. He came home at 3 a.m. He looked a little dirty, but otherwise he was (          ).", answer: 4, options: ["bit by bit", "far and away", "all or nothing", "safe and sound"] },
                    { no: 15, questionText: "Clara went to the bookstore (          ) a novel by an author she had heard about. She wanted to buy a copy to read that evening.", answer: 1, options: ["in search of", "for fear of", "on behalf of", "with regard to"] },
                    { no: 16, questionText: "A: What are you planning to do this afternoon?\nB: I think I'll (          ). I didn't sleep well last night, so I'm feeling pretty tired.", answer: 2, options: ["make a move", "take a nap", "make a wish", "take a chance"] },
                    { no: 17, questionText: "A: Do you think many people will come to the company Christmas party?\nB: (          ) I know, most people are planning to attend.", answer: 2, options: ["As fast as", "As far as", "As long as", "As well as"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / A New Approach to Design",
                type: "passage",
                passageText: `A New Approach to Design

British university graduate Gabriel Kay has designed a new type of kettle, a kitchen tool to boil water, and named it Osiris. What makes it unique is that ordinary people can repair it easily. It is difficult to ( 18 ). Unlike these kettles, Osiris can be separated simply by removing two screws at the bottom. This structure not only allows for the replacement of broken parts but also makes it possible for users to change the color or design of specific parts if they desire a different look.

His design has the potential to change consumers' behavior patterns regarding electrical products. Today, most products are expected to be thrown away when they break. This culture of throwing away broken items and buying new ones has led to a large amount of electronic waste in Britain. Kay did not give up his design's appearance to overcome this situation. He provides a product that looks good and is also easy to repair. By doing so, he encourages people to ( 19 ). This is how he helps reduce electronic waste.

His design was introduced by a program that encourages new graduates with eco-friendly ideas. This program emphasizes the importance of being able to fix things and make them last a long time. ( 20 ), the program supports a future surrounded by eco-friendly products that follow the "reduce, reuse, and recycle" idea. The program shows how young designers can help solve environmental problems. In the future, fixing and continuing to use items may become more common than throwing them away.`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 3, options: ["boil water quickly with old electric kettles", "design colorful electric kettles", "take apart most electric kettles at home", "try new electric kettles in shops"] },
                    { no: 19, questionText: "(19)", answer: 1, options: ["use the product for a long time", "buy many products one after another", "grow their personal collection of devices", "find devices with more features"] },
                    { no: 20, questionText: "(20)", answer: 2, options: ["Even so", "In this way", "Otherwise", "What is worse"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / The Power of Familiarity",
                type: "passage",
                passageText: `The Power of Familiarity

Even when people show no interest in certain things at the beginning, after they see or hear them many times, they gradually come to like them. People often observe this interesting phenomenon in daily life. For example, when people listen to a song for the first time, it may not stay in their memory. After hearing it several times in their everyday life, they ( 21 ). This effect is often used in different areas with the intention of increasing sales and popularity.

Robert Zajonc first observed this effect in an experiment. In the experiment, he showed college students pictures of people's faces from a graduation album. The pictures were picked without any special order or reason. Some pictures were shown more times than others. The more often students saw a picture, the more they liked it. Zajonc also did the same experiment using letters instead of pictures to avoid ( 22 ). The results were the same. The students liked things more when they were shown more often.

When people make a decision, they should keep in mind that this effect is working. They should carefully consider different choices when making a decision. While this effect is not always negative, if they ignore it, they will not be able to make a correct decision. ( 23 ), when people just choose the familiar options again and again, they will narrow their views. This repeated pattern will cause them to miss out on options for growth and better experiences.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 3, options: ["can say when they heard the song", "keep some distance from the song", "may buy the song without hesitation", "learn how to play musical instruments"] },
                    { no: 22, questionText: "(22)", answer: 1, options: ["the possible influence of people's expressions", "the negative feelings toward certain letters", "the possible effect of their rooms", "the negative influence of outside noise"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["On the contrary", "Meanwhile", "Fortunately", "Moreover"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ Retirement party",
                type: "passage",
                passageText: `From: Julia Young <j_young@nflowtech.com>
To: Todd Musk <t_musk@nflowtech.com>
Date: June 19
Subject: Retirement party

Hi, Todd,

Thank you for giving me some time over the phone this morning. I hope that I didn't cause you much trouble. After the call, our team finally decided on all the details of the retirement party for our manager, Mr. Jenkins. This will be a special opportunity for us to show how thankful we have been for his long years of achievement at the company.

For this party, we are planning a surprise movie to be shown on a large screen. This will include slides about Mr. Jenkins's key achievements since joining the company, special photos with his coworkers, and messages from his customers' companies. By displaying it this way, everyone at the party will be able to look back on his great career. For this event to be successful, the professional support of the IT department is very important, so we would like to ask for your help.

We have collected all the photos, but we're having trouble creating a clear and exciting graphic to show his great sales results over the years. We have the data and need help turning it into a powerful picture. For the event day, we want good video and sound, and we would like to help set up the right equipment. I'm truly sorry to trouble you during your busy time, but I would be delighted if you could help us with this.

Best wishes,
Julia Young
Sales Department
New Flow Technologies`,
                questions: [
                    { no: 24, questionText: "(24) What happened after the phone call today?", answer: 3, options: ["The manager announced a new company policy about retirement.", "The IT department talked about new computers for the office.", "Julia Young's team agreed on details for a future celebration.", "Employees talked about taking over tasks from Mr. Jenkins."] },
                    { no: 25, questionText: "(25) The surprise movie for Mr. Jenkins's retirement party will", answer: 1, options: ["show messages from people who are not members of his company.", "be sent to the family members of Mr. Jenkins's coworkers from the past.", "include a short company history and a timeline of its growth.", "be shown on display screens set up on each table during the party."] },
                    { no: 26, questionText: "(26) What does Julia Young want help with?", answer: 4, options: ["Collecting the necessary numbers about Mr. Jenkins's sales to make slides.", "Putting together a list of songs to play for people to choose from.", "Checking and preparing computers at the sales department before the party.", "Creating something exciting to show Mr. Jenkins's history at the company."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / Stopping Advertisements",
                type: "passage",
                passageText: `Stopping Advertisements

It is said that the earliest advertisement appeared in ancient Egypt. Later, after newspapers were invented, advertising spread as a way for businesses to share information about their products. This tool not only encouraged people to buy goods and helped businesses make money but also caused problems with negative effects on everyday life. The increase in advertisements has led to more advertisements with wrong information and has changed the look of cities by covering streets with many signs and billboards.

Different countries have set up rules stopping advertisements for some products and services to protect public health and well-being. For example, many countries have reduced or fully stopped tobacco advertising due to tobacco's harmful effects on health. Also, some countries, like Australia and the UK, have set strict laws to control the advertising of alcohol to young people. Some areas have removed advertisements for unhealthy food from schools. In this way, advertising has been controlled strictly to protect people's health.

In the early 2000s, São Paulo, Brazil, passed the Clean City Law. This law prohibited advertisements on taxis and buses, and outside store entrances. Many advertisements were removed, and it became possible for citizens to enjoy the beauty of buildings. However, electronic signs, which had started to gain popularity, could be used even under the law. Later, in Grenoble, France, the decision was made to ban certain advertisements, including electronic signs. Some companies tried to introduce new electronic signs before the decision, but they could not. In Grenoble, after advertisements were removed, the spaces for the signs were planted with trees and plants.

Advertisement bans are not welcomed everywhere. The local government of Vernier, Switzerland, has tried to ban outdoor advertisements. The government argued that the city's view was spoiled by too many advertisements and that it was necessary to remove them to bring back its beauty and improve the overall environment. However, freedom of speech is emphasized in the country, and the right to advertise is seen as an important part of that freedom. Some believe that banning advertisements would go against this right. Moreover, some businesses worry that they might lose customers if advertisements are banned.`,
                questions: [
                    { no: 27, questionText: "(27) With an increase in advertisements in people's daily lives,", answer: 1, options: ["people have become more likely to come across advertisements with incorrect information.", "stores and businesses put more effort into creating better advertisements than others.", "the importance of advertising in ancient Egypt has become the target of study.", "even ordinary people have begun to make their own advertisements for different purposes."] },
                    { no: 28, questionText: "(28) Why have some countries decided to control certain types of advertisements?", answer: 3, options: ["To encourage young people to cook more often at home.", "To promote products that are good for the environment.", "To protect people's health from being harmed.", "To increase profits for businesses selling healthier products."] },
                    { no: 29, questionText: "(29) Under São Paulo's Clean City Law, electronic signs were", answer: 4, options: ["given a few years before they were completely banned.", "discussed more often than any other topic in advertisements.", "criticized by government officials more.", "left without becoming the target of the law."] },
                    { no: 30, questionText: "(30) In Switzerland, some people think that", answer: 1, options: ["banning advertisements would be against the right to advertise and freedom of speech.", "removing advertisements would improve the economy and bring more tourists.", "fewer advertisements will lead to a decrease in the number of violent crimes.", "it will be easier for the cities to invite new businesses by banning advertisements."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 2, options: ["Television appeared in the twentieth century mainly to broadcast advertisements.", "Advertisements can help businesses share information about their products and make a profit.", "São Paulo followed Grenoble's successful way to ban electronic advertisements.", "Freedom of speech is the most important right above all other rights in Switzerland."] }
                ]
            }
        ]
    },
    "2023-3": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "A: Ellen, could you hold these glasses for me while I (          ) wine into them for our guests?\nB: Sure. That bottle looks heavy. Be careful not to spill any!", answer: 4, options: ["drown", "grab", "hit", "pour"] },
                    { no: 2, questionText: "Many scientists do their work in (          ). These places allow them to do experiments or work with animals.", answer: 4, options: ["triangles", "conclusions", "incidents", "laboratories"] },
                    { no: 3, questionText: "A: Wow, Lisa! It's (          ) how quickly your son has grown.\nB: I know. I can't believe he grew 15 centimeters last year.", answer: 1, options: ["remarkable", "nutritious", "commercial", "artificial"] },
                    { no: 4, questionText: "A: Can you (          ) your umbrella among the ones on this shelf?\nB: Yes. Mine is the red-and-white one.", answer: 2, options: ["negotiate", "identify", "translate", "revise"] },
                    { no: 5, questionText: "Bob wanted to know the (          ) of food that he needed to buy for his wife's party, so he asked her how many guests were coming.", answer: 2, options: ["opportunity", "quantity", "security", "gravity"] },
                    { no: 6, questionText: "After the soccer game had to be canceled, people with tickets were (          ) the cost of buying them.", answer: 1, options: ["refunded", "indicated", "alerted", "displayed"] },
                    { no: 7, questionText: "In order to reduce the number of customer inquiries, Yamakom Inc. has added a page to its website with answers to the questions that customers ask most (          ).", answer: 3, options: ["directly", "severely", "frequently", "probably"] },
                    { no: 8, questionText: "Ben's flight from New York to Tokyo will take about 14 hours. He will try to sleep on the plane so that he will not be tired when he reaches his (          ).", answer: 4, options: ["celebration", "reservation", "generation", "destination"] },
                    { no: 9, questionText: "The law in this country does not (          ) drivers to cross railway tracks without stopping first. Anyone who breaks this rule will get a fine.", answer: 4, options: ["deserve", "announce", "operate", "permit"] },
                    { no: 10, questionText: "Every morning, Zach goes for a run and then takes a shower before he eats breakfast. He follows the same (          ) each day.", answer: 3, options: ["despair", "exchange", "routine", "minority"] },
                    { no: 11, questionText: "Angela caught a cold, so she could not (          ) the school singing contest this year. She hopes to be able to take part next year.", answer: 2, options: ["rely on", "participate in", "bump into", "turn off"] },
                    { no: 12, questionText: "A: Would you like to go to Donna's birthday party with me on Friday night?\nB: I'm not sure. Can I think it (          ) and let you know tomorrow?", answer: 1, options: ["over", "along", "down", "around"] },
                    { no: 13, questionText: "A: I think we should (          ) books completely and learn everything from computers.\nB: I disagree. I think we still need to use books, especially in schools.", answer: 4, options: ["go on about", "look forward to", "come out of", "do away with"] },
                    { no: 14, questionText: "A: How's your new apartment, George?\nB: Well, it's a little far from the station, but (          ), I think it's pretty good. It's a nice size, and my neighbors are very friendly.", answer: 3, options: ["back and forth", "touch and go", "by and large", "give and take"] },
                    { no: 15, questionText: "A: I can't believe it, Mom! I finished fourth in the marathon again. That's the third time in three races.\nB: Keep trying, Billy, and (          ), your luck will change. I'm sure you'll get a medal very soon.", answer: 3, options: ["at the moment", "at a distance", "one of these days", "one after another"] },
                    { no: 16, questionText: "A: I'm (          ) all the rain we've been getting lately.\nB: Me, too. It feels like weeks since we last had any sunshine.", answer: 1, options: ["fed up with", "gone out for", "made out of", "wrapped up in"] },
                    { no: 17, questionText: "A: Mom, this milk doesn't smell fresh.\nB: Throw it away, Johnny. It has probably (          ). I'll get some more when I go to the supermarket later.", answer: 3, options: ["come close", "broken out", "gone bad", "passed away"] },
                    { no: 18, questionText: "Isaac's mother asked him (          ) he was hungry, and he said no. He had already eaten a sandwich.", answer: 2, options: ["when", "if", "how", "as"] },
                    { no: 19, questionText: "A: Mom, can we go to Europe for our vacation this summer?\nB: That would be nice, Vicky. But we don't have enough money this year to go to the beach, (          ) overseas.", answer: 2, options: ["much more", "much less", "less than", "more than"] },
                    { no: 20, questionText: "A: Kelsey, I'm going out to lunch now. (          ) Mr. Anderson stop by the office while I'm away, please tell him that I'll be back by 1 p.m.\nB: Yes, Mrs. Allen.", answer: 2, options: ["Shall", "Should", "Could", "Can"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / Rock Climbing",
                type: "passage",
                passageText: `Rock Climbing

Rock climbing has become a popular activity for people to do in their free time. However, the first people to climb rocks may not have done it for fun. They may have needed to climb rocks to get from one place to another. Now, people climb as a hobby and to stay physically fit. Originally, people climbed rocks outdoors. However, when the weather was bad, it was dangerous to do this. As a result, some people decided to ( 21 ). At these climbing centers, it is possible to practice climbing even if conditions outside are bad.

Rock climbing requires equipment such as ropes and special shoes. Climbers use ropes to attach themselves to the rocks. The ropes help to prevent climbers from being seriously injured if they fall. The special shoes help prevent climbers' feet from slipping on the rocks. Climbers also often carry a small bag containing chalk. The chalk helps to ( 22 ). Climbers sweat as they climb, and sometimes, the rocks can be wet. If climbers feel that their hands are slipping, they put them in their bag of chalk to remove moisture.

Climbing can help to increase physical and mental strength. Climbers need to be strong to hold onto rocks, and they also have to think carefully about where they put their hands and feet. Researchers have found that people experience stress while they are climbing. However, it has also been found that climbers get very strong feelings of relief when they finish. ( 23 ), climbing can be a good way to help reduce stress.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 3, options: ["climb even higher mountains", "charge a fee for climbing rocks", "create places to climb indoors", "develop new climbing techniques"] },
                    { no: 22, questionText: "(22)", answer: 1, options: ["keep climbers' hands dry", "mark climbers' routes", "stop climbers from feeling sick", "give climbers extra energy"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["To begin with", "Besides", "Furthermore", "Overall"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / In the Dark",
                type: "passage",
                passageText: `In the Dark

For a long time, people who lived on an island off the west coast of Africa reported hearing unusual sounds coming from the island's forests at night. However, nobody knew what was making them. The mystery was finally solved when scientists took a photo ( 24 ). It was a kind of owl. The following year, scientists caught one of these birds and discovered that it was a new species.

Scientists had guessed that there must be owls on the island, but they needed the help of a local expert to find them. A man known as Bikegila used to climb trees in the island's forests and take baby parrots to sell as pets. However, some years ago, the forests and the wildlife living in them started to be protected by law, so Bikegila had to ( 25 ). He used his knowledge of the area to work as a guide, showing tourists around the forests. Bikegila helped the scientists find the owls, and to thank him, the scientists gave the new species the name Otus bikegila.

In addition to Bikegila's help, the scientists also used technology to find the owls and determine the size of the population. Microphones in the forests recorded the sounds made by animals at night, and special computer software was used to analyze the sounds. ( 26 ), the scientists were able to pick out the ones made by the owls. From the data that the scientists collected, they were able to estimate the number of owls that were living on the island.`,
                questions: [
                    { no: 24, questionText: "(24)", answer: 4, options: ["from a satellite in space", "with a new type of camera", "to a conference about animals", "of the source of these noises"] },
                    { no: 25, questionText: "(25)", answer: 1, options: ["find a new way to make a living", "take a different route to his office", "move out of his family's home", "get the help of some friends"] },
                    { no: 26, questionText: "(26)", answer: 1, options: ["With this", "Similarly", "For a while", "In contrast"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ University job fair",
                type: "passage",
                passageText: `From: Stan Finley <s.finley598@techbiz.com>
To: IT Department Staff <it@techbiz.com>
Date: January 21
Subject: University job fair

Dear Staff,

As you may have heard, three colleges in the area will be holding job fairs soon. Our company president has decided to send employees from different departments to each of them. Here in the IT department, we'll be sending two employees to the West University Career Fair in Petersburg. We're going to that one because many students there study computer engineering.

The fair will be held on February 24, which means we will only have about one month to prepare. As the fair will be on a Saturday, you can either take an extra day off during the following week or apply for overtime pay. Either way, you should speak to Ms. Jones on the second floor to get your weekend work or overtime applications. These should be submitted at least one week before the fair.

Please think about whether or not you want to take part in the fair. I'll talk about it again in more detail at our department meeting on Wednesday, and we can decide who will go then, too. The two employees and I will have an extra meeting on Friday morning to get started on preparing materials for the fair. Please reply to this e-mail by 5 p.m. on Tuesday if you're interested.

All the best,
Stan Finley, IT Department Manager, TechBiz`,
                questions: [
                    { no: 27, questionText: "(27) Some employees from the IT department", answer: 3, options: ["have been selected to work at several job fairs at different colleges.", "were asked to give a guest lecture to computer engineering students.", "will take part in an event at a university in Petersburg.", "are being sent to another department to help train new workers."] },
                    { no: 28, questionText: "(28) What should staff members do if they attend the fair on February 24?", answer: 3, options: ["Make a presentation about what they did at the fair to Ms. Jones.", "Take a day off during the week before the event to prepare.", "Hand in some forms at least seven days before then.", "Fill out an attendance application and send it to the university."] },
                    { no: 29, questionText: "(29) What does Stan Finley say he will do on Friday morning?", answer: 1, options: ["Work with two other employees to prepare for February 24.", "Give out materials to all the employees in his department.", "Make a decision about who will attend the event.", "Send another e-mail to tell the staff who was selected."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / Keeping Up-to-Date",
                type: "passage",
                passageText: `Keeping Up-to-Date

English is used by people in many parts of the world. Like other languages, new words are often added to English. These come from technological, social, or other developments. At the same time, other words stop being used because they no longer help people express their ideas. The people who create dictionaries need to constantly check which words are being used and how they are being used to make dictionaries that reflect the current state of the English language.

For a new word to be considered by dictionary editors, it must first be used widely. Dictionary editors and their assistants read books, news articles, and other sources of English to look for new words. These days, dictionary editors use computers to help them check sources more quickly and more accurately. The next step is to check the meaning of the new word. If the new word is being used by a lot of people to mean the same thing, there is a good chance that it will be added to dictionaries.

In some cases, completely new words are added to the dictionary, but in other cases, new meanings are added to existing words. For example, the word "cookie" used to have a single meaning: a kind of baked snack. In the late 20th century, the same word started to be used to refer to special computer files that store information about how people use websites on the Internet. Within a few years, the use of this meaning of the word had become so widespread that dictionary editors decided to add the meaning to their dictionaries.

Dictionary editors consider changes to dictionaries very carefully before making them. Each suggestion to add a new word or meaning or remove an old word or meaning is looked at by many editors. If enough of them agree that a change should be made, they will ask their dictionary's senior editors for their approval. Sometimes, the senior editors will decide that there is not enough evidence to support the suggested change. In this case, the information collected by editors and their assistants will be stored in a database so that it can be reviewed later.`,
                questions: [
                    { no: 30, questionText: "(30) What is one thing that the creators of English dictionaries must do?", answer: 1, options: ["Keep an eye on how words are used in the English language.", "Decide how to spell the new words that are added to English.", "Check for technological developments that could help their work.", "Make changes to words that people have difficulty expressing."] },
                    { no: 31, questionText: "(31) A new word may be added to a dictionary if", answer: 3, options: ["sources in which the word is used are found to be accurate.", "the word is also being used in languages other than English.", "a large number of people are using the word in the same way.", "dictionary editors and their assistants think the word will be useful."] },
                    { no: 32, questionText: "(32) The word \"cookie\" is an example of an English word that", answer: 4, options: ["came from a word that was used in another language.", "people can spell in a variety of different ways.", "was rejected by dictionary editors for many years.", "has gained a different meaning from its original one."] },
                    { no: 33, questionText: "(33) What is one of the roles of a dictionary's senior editors?", answer: 4, options: ["To review data about the words that people most often look for in the dictionary.", "To remove old information from a database so that new information can be added.", "To come up with ideas to make the dictionary easier for people to use.", "To make the final decision about changes to the content of the dictionary."] }
                ]
            },
            {
                title: "第3問C：長文の内容一致選択 / Marie Curie",
                type: "passage",
                passageText: `Marie Curie

In 1903, Marie Curie became the first woman to receive a Nobel Prize. She got it for the research that she and her husband had carried out in physics. Eight years later, she became the first person ever to win a second Nobel Prize. This time, the prize was for discoveries that she had made in chemistry. Her research has led to the development of technologies such as X-ray machines that have become important parts of our lives.

Marie Curie was born in Warsaw, Poland, in 1867. She was the youngest of five children, and her parents were both teachers. She was a bright child who was good at remembering facts. She did well at school, but she was unable to attend the University of Warsaw. At the time, it only accepted male students. Instead, she took a job as a tutor and carried on studying math, physics, and chemistry in her spare time. However, these private studies would not allow her to achieve her dream of obtaining a university degree.

Marie Curie and her sister worked together so that they could both get university degrees. Marie Curie agreed to give some of the money she earned so that her sister could study medicine. Her sister promised that, after she graduated, she would support Marie Curie's studies. After five years of working for a rich family, Marie Curie was finally able to start studying at a university in Paris, France. Life was hard for her because she had little money, and she suffered health problems because she could not afford good-quality food. However, she was an excellent student, and she got a degree in physics in 1893 and another in math the following year.

Marie Curie first met her husband, Pierre, while she was doing research at the university and he was working there. Pierre could see that her research was more important than his own, so he started working with her. After Pierre was killed in an accident in 1906, Marie Curie was offered her husband's teaching job. She became a professor at the university, and she devoted the rest of her life to scientific research and teaching.`,
                questions: [
                    { no: 34, questionText: "(34) What was one of Marie Curie's achievements?", answer: 3, options: ["She won the first Nobel Prize for chemistry.", "She found a new way to choose Nobel Prize winners.", "She received Nobel Prizes in more than one subject area.", "She discovered errors in a Nobel Prize winner's research."] },
                    { no: 35, questionText: "(35) Marie Curie was not able to go to university in Warsaw because", answer: 4, options: ["she had to take care of her younger brothers and sisters.", "she was asked to go and work at her parents' school.", "the scores that she got at school were not good enough.", "the university did not allow women to become students."] },
                    { no: 36, questionText: "(36) What was one difficulty faced by Marie Curie when she studied in Paris?", answer: 2, options: ["It took five years for her to become good at speaking French.", "The food she ate was not good enough for her to stay healthy.", "She needed a lot of money to pay for her sister's medicine.", "Her university would not let her study for a degree in physics."] },
                    { no: 37, questionText: "(37) Marie Curie's husband, Pierre,", answer: 3, options: ["first met Marie Curie because of an accident that happened in 1906.", "looked after the couple's children while Marie Curie taught classes.", "worked at the same university where Marie Curie was doing research.", "thought that his own research was more important than Marie Curie's."] },
                    { no: 38, questionText: "(38) Which of the following statements is true?", answer: 2, options: ["Marie Curie had a lot of difficulty remembering facts when she was a child.", "Marie Curie and her sister agreed to help each other to study at university.", "Marie Curie was taught science by a female professor at a university in Paris.", "Marie Curie wanted to study science after finding out how X-ray machines worked."] }
                ]
            }
        ]
    },
    "2024-2": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "When Ron walked through the dark kitchen, he stepped on a soft, wet (          ). He found out that his daughter had accidentally spilled some yogurt.", answer: 1, options: ["substance", "drawing", "landscape", "criminal"] },
                    { no: 2, questionText: "A: Those are nice-looking shoes, Todd. Are they new?\nB: No, they're about two years old, but I just (          ) them this morning.", answer: 3, options: ["spoiled", "implied", "polished", "classified"] },
                    { no: 3, questionText: "Astronauts have put a new telescope into space. Scientists will use it to study (          ) stars and planets that are too far away to be seen from Earth.", answer: 4, options: ["primary", "registered", "visible", "distant"] },
                    { no: 4, questionText: "Last summer was perfect for growing vegetables, so the farm (          ) a large amount of produce.", answer: 2, options: ["struggled", "yielded", "decreased", "regretted"] },
                    { no: 5, questionText: "A: My ankle is taking so long to heal! I hurt it two months ago, but the doctor still won't allow me to play sports.\nB: Give it some more time, Barry. Your ankle will get better (          ).", answer: 1, options: ["eventually", "slightly", "socially", "respectably"] },
                    { no: 6, questionText: "Many years ago, smoke from the factories in Silver City (          ) the air. Now that the factories are gone, the air is much cleaner.", answer: 3, options: ["arrested", "cured", "polluted", "established"] },
                    { no: 7, questionText: "The (          ) of education is responsible for ensuring that the country's schools, universities, and other places of learning are being managed well.", answer: 4, options: ["dawn", "faith", "immigrant", "minister"] },
                    { no: 8, questionText: "The soccer game was supposed to be held this Saturday, but it was (          ) because of the heavy rain. It will be held next weekend instead.", answer: 1, options: ["postponed", "obeyed", "recovered", "tricked"] },
                    { no: 9, questionText: "Many years ago, France was ruled by an (          ). However, the country is now led by a president.", answer: 1, options: ["emperor", "opinion", "element", "operation"] },
                    { no: 10, questionText: "The city held a big (          ) for computer game fans last weekend. Many people from all over the country came to buy and sell games.", answer: 3, options: ["miracle", "criticism", "convention", "monument"] },
                    { no: 11, questionText: "Ron hates it when his friends (          ) on him at his home without telling him first. So, he asks them to call before they visit.", answer: 4, options: ["keep an eye", "have an effect", "step up", "drop in"] },
                    { no: 12, questionText: "A: Veronica, did you buy a new computer at the electronics store today?\nB: Well, I found one that I liked, but it was a little expensive. I'll (          ) my old computer for a few more months while I save up some more money.", answer: 3, options: ["give up on", "look out for", "make do with", "show up to"] },
                    { no: 13, questionText: "Jim made good progress on his sales report during the morning, but he was (          ) finishing it because he got some phone calls from customers in the afternoon.", answer: 4, options: ["parted with", "taken in", "aimed at", "kept from"] },
                    { no: 14, questionText: "A: The bus doesn't come for another hour. How are we going to (          ) until then?\nB: Well, there's a bookstore over there. Let's go and look at some books.", answer: 1, options: ["kill time", "make sense", "take part", "pay attention"] },
                    { no: 15, questionText: "The children who attend the summer camp (          ) their parents' letters. They are always happy when they receive one.", answer: 3, options: ["jump into", "pull through", "long for", "fall behind"] },
                    { no: 16, questionText: "Robert is proud to be a firefighter. When he is (          ), he is always ready to help people in an emergency.", answer: 2, options: ["in common", "on duty", "at random", "by chance"] },
                    { no: 17, questionText: "Lola forgot to (          ) the train at her stop this morning, so she was almost late for work.", answer: 1, options: ["get off", "get by", "get through", "get along"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / Coffee Culture",
                type: "passage",
                passageText: `Coffee Culture

In England, coffee houses have been important places for meeting and talking for centuries. These places first opened in Oxford in the middle of the seventeenth century and were the beginning of a popular tradition. However, coffee houses were not just places to enjoy a hot drink or a light meal. They quickly became favorite places for customers to share ideas and news with each other. ( 18 ), their main attraction was not drinking coffee but the opportunity to debate and discuss culture with others.

Each coffee house had its own character. This attracted different people depending on the house's location and the topics that customers were interested in discussing. ( 19 ) could find a place to talk and be listened to. This created a new style of communication in which the speakers were equal. However, though these gatherings sometimes included women, the people who usually came were men.

Coffee houses were more than just places where people could have conversations. They also played an important role in business and politics of the time. For example, one company in the United Kingdom grew from a coffee house into a global insurance market. There were challenges, such as when the king of England tried to shut down coffee houses due to worries about the topics that were being discussed there. Still, coffee houses continued to exist. Over time, they have changed to follow social trends. Nowadays, they offer a quiet place for work or a casual place to meet, showing how these spaces have ( 20 ).`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 1, options: ["In other words", "Instead", "On the other hand", "Unfortunately"] },
                    { no: 19, questionText: "(19)", answer: 3, options: ["The rich and powerful", "People who worked long hours", "People with a variety of backgrounds", "Business owners and politicians"] },
                    { no: 20, questionText: "(20)", answer: 2, options: ["destroyed the old business model", "changed but still bring people together", "become less common over time", "returned to their original purpose"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / Satellites",
                type: "passage",
                passageText: `Satellites

Satellites are like computers that go around the earth. They can do many different things. By looking at the pictures of the earth taken from satellites, scientists can see how clouds move and predict the weather. Satellites can also send radio waves ( 21 ). This is because they operate in space and travel much higher than the radio towers. This makes them important for communications such as radio and TV. Furthermore, satellites for the Global Positioning System (GPS) always send data, and people can find out their location with their smartphones.

( 22 ), it was only countries that developed and used satellites. However, as the demand for more accurate data and technology for communications and broadcasting increased, private companies also began to use satellites. Since then, more development in technology occurred, which has led to new and better types of satellites being created. However, it is said that there are too many satellites going around the earth these days.

While more and more satellites are being sent into space, the number of ( 23 ) has also increased. However, because it is very difficult to collect objects from space, old satellites are usually left in space. There, they move around the earth with other satellites that are still being used. Having too many satellites not only makes them more likely to accidentally run into each other but also causes problems with the information they are trying to send.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 3, options: ["early in the morning or late at night", "while they are near oceans", "without being blocked by tall buildings", "with expensive systems inside"] },
                    { no: 22, questionText: "(22)", answer: 4, options: ["In contrast", "For example", "In particular", "At first"] },
                    { no: 23, questionText: "(23)", answer: 1, options: ["satellites that are no longer used", "people who want to go to space", "stars that are newly discovered", "companies that repair satellites"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ Your membership",
                type: "passage",
                passageText: `From: Max Harper <m.harper@westvalley.fitness.com>
To: Sarah Johnson <sarah_johnson1234@kmail.com>
Date: October 6
Subject: Your membership

Dear Sarah,

As the customer service manager at West Valley Fitness Center, it makes me very happy to say congratulations on being a member for one year. We're excited to share that we've added new services to make your fitness experience even better. For example, there are personal trainers, a variety of classes, a pool, and new gym equipment. These additions are because we want to make West Valley Fitness Center the best gym in the area.

To celebrate your one year of membership, we're offering you a free personal training session. Also, we'd like to invite you to a members-only health seminar next month. To sign up for the personal training session or the health seminar, please follow the instructions on our website. To further promote good health, we're introducing a new online magazine feature: Member Spotlight Stories, where we share the fitness stories of members like you. If you're interested in being the subject of one of these stories, speak to someone at our front desk on your next visit.

Your feedback on the new services and any additional features you'd like to see at the center is always welcome. Just reply to this e-mail. Finally, if there's anyone you'd like to recommend our gym to, let us know! We'll offer them a discount on their first year of membership.

Kind regards,
Max Harper
Customer Service Manager`,
                questions: [
                    { no: 24, questionText: "(24) What is one reason this e-mail is being sent to Sarah Johnson?", answer: 1, options: ["To congratulate her on her first year as a member of the fitness center.", "To tell her about changes to the price of one-year memberships.", "To ask her to think about renewing her membership for another year.", "To inform her about the opening of a fitness center in the West Valley area."] },
                    { no: 25, questionText: "(25) Sarah Johnson should talk to a staff member at the front desk to", answer: 2, options: ["sign up for one of the center's personal training sessions.", "arrange to be in a feature in an online magazine.", "learn about participating in a health seminar.", "suggest new content for the center's website."] },
                    { no: 26, questionText: "(26) Max Harper says that there is a discount for", answer: 4, options: ["people who have been members for over one year.", "people who register for membership by e-mail.", "people who agree to purchase new services.", "people who are introduced by other members."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / Bonobos",
                type: "passage",
                passageText: `Bonobos

Bonobos are animals that look similar to monkeys and chimpanzees. Not many people know about bonobos because they do not live in many different areas. They live in just one area of the Democratic Republic of the Congo, in the middle of Africa. If people find out that they have something in common with them, they might feel more connected to them.

Many people probably believe that humans are the only animal that is capable of caring about others. However, this is not the case. In one study, two bonobos were placed in rooms separated by a fence. An apple was hung from the top of one room, and only the bonobo in the other room could reach and release the apple by climbing the fence. Even though they did not get any apples or reward themselves for helping others, the bonobos often dropped the apple when there was another bonobo in the other room. Surprisingly, these bonobos were strangers to each other.

In a different test, bonobos watched two videos. In one video, their family members were yawning, the act of opening their mouths when they were sleepy. When bonobos watched their family members yawn, they were also likely to yawn themselves. Another video showed strangers yawning. The bonobos who watched this video yawned as much as when they watched their families yawn. In a similar setting, humans were more likely to yawn after seeing their friends or family members yawn than after seeing strangers yawn. This suggests that bonobos' ability to feel one another's feelings is more widespread than that of humans.

Bonobos' ability to care about others is probably due to the group structure that they live in. This becomes clear when we look at chimpanzees. Bonobos live in large groups where there is no clear leadership. However, there is a distinct power structure within a chimpanzee group, and a large, strong male takes on a leadership role. Because of this, they have less reason to be friendly. Bonobos, however, live in peace and work together more because of how their groups are set up, while chimpanzees are more unfriendly.`,
                questions: [
                    { no: 27, questionText: "(27) Why do many people not know much about bonobos?", answer: 4, options: ["The country where they live does not make much effort to protect them.", "They are not as friendly as animals such as monkeys or chimpanzees.", "They avoid contact with humans as much as possible to protect their babies.", "The location where they live is only in a certain area of Africa."] },
                    { no: 28, questionText: "(28) In one study,", answer: 1, options: ["bonobos were seen to help other bonobos without getting a reward.", "bonobos were required to push a button on the wall to get a piece of fruit.", "some bonobos were able to jump out of the cage after getting some fruit.", "researchers decided that bonobos and chimpanzees were very similar."] },
                    { no: 29, questionText: "(29) In a study about yawning, researchers found", answer: 2, options: ["bonobos copied what people did instead of copying other bonobos.", "bonobos could feel others' feelings even more than humans.", "most bonobos did not yawn when they were feeling tired.", "yawning was more common for younger bonobos than for older ones."] },
                    { no: 30, questionText: "(30) Chimpanzees", answer: 2, options: ["organize their groups in the same way that bonobo groups organize themselves.", "tend to be less friendly because there is a strong leader among them.", "form a larger group than bonobos to maintain strong connections between individuals.", "move from one place to another to find a better living environment."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 3, options: ["Bonobos almost never yawn when they are with bonobos from other families.", "All experiments involving bonobos were conducted by the Democratic Republic of the Congo.", "Bonobos live peacefully in groups that have no strong leaders.", "Chimpanzees help others even when such actions will not benefit themselves."] }
                ]
            }
        ]
    },
    "2024-3": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "Jane used to get her favorite magazine delivered to her home every month. However, she now has an online (          ), so she can read the magazine on her tablet or smartphone.", answer: 4, options: ["opportunity", "campaign", "representative", "subscription"] },
                    { no: 2, questionText: "A: Jeff, I can't believe you said my painting was bad in class today.\nB: I'm sorry, Diana. I didn't mean to (          ) you. I shouldn't have said that.", answer: 4, options: ["replace", "comfort", "transform", "offend"] },
                    { no: 3, questionText: "Greg likes his new apartment because it has a lot of room for (          ). His last place did not have enough closet space for all of his things.", answer: 1, options: ["storage", "reverse", "heaven", "denial"] },
                    { no: 4, questionText: "Ms. Walker asks her students to think about the (          ) of their actions. She wants them to understand that their behavior will have effects on themselves and others.", answer: 4, options: ["requests", "timetables", "suitcases", "consequences"] },
                    { no: 5, questionText: "Mike's meeting went on longer than expected, so he and his wife went (          ) to their friends' dinner party. Mike took a taxi, while his wife drove their car.", answer: 1, options: ["separately", "meanwhile", "nowadays", "permanently"] },
                    { no: 6, questionText: "Kelly had to leave the arena before the hockey game finished, so Sam told her the (          ) the next day. The Wolves had won 5 to 3.", answer: 1, options: ["outcome", "appetite", "victim", "conflict"] },
                    { no: 7, questionText: "In the meeting, a group of experts discussed the effects of economic activities that (          ) global warming.", answer: 4, options: ["remain", "compose", "launch", "accelerate"] },
                    { no: 8, questionText: "The new history teacher at Maple High School is very good at (          ) his students. They are learning a lot about the world from his classes.", answer: 2, options: ["inventing", "educating", "deceiving", "pretending"] },
                    { no: 9, questionText: "The company's (          ) situation has been getting worse this year. It is going to have to close some of its stores.", answer: 3, options: ["attractive", "national", "financial", "ignorant"] },
                    { no: 10, questionText: "A: The boat is starting to (          ) away from the shore.\nB: Oh no! We need to catch it before it floats away!", answer: 2, options: ["split", "drift", "resolve", "grasp"] },
                    { no: 11, questionText: "A statue was put up in front of city hall (          ) of the city's first mayor.", answer: 1, options: ["in honor", "for lack", "at risk", "on suspicion"] },
                    { no: 12, questionText: "A: I don't think I've ever seen Bob take a break.\nB: Yes, he's always (          ). He likes to keep busy.", answer: 1, options: ["on the go", "in the way", "by the book", "to the point"] },
                    { no: 13, questionText: "Hikers and campers need to be prepared for bad weather. Without a safe shelter to go to, they could be (          ) of nature.", answer: 4, options: ["for the good", "on the rise", "in the course", "at the mercy"] },
                    { no: 14, questionText: "When Julia lost her job, she had to (          ) her savings for a few months until she found a new one.", answer: 2, options: ["break up with", "fall back on", "come over to", "speak ill of"] },
                    { no: 15, questionText: "A: I thought the new rule was going to start today.\nB: It was, but the manager said that it wouldn't be (          ) until next month.", answer: 4, options: ["on strike", "on foot", "in line", "in effect"] },
                    { no: 16, questionText: "When Kyle went to the clothing store, he had to (          ) a new shirt for his brother's wedding. His mother told him to get a white one.", answer: 4, options: ["fall over", "turn over", "cut off", "pick out"] },
                    { no: 17, questionText: "The members of the team stood (          ) on the field before the soccer game started. They all looked very serious and determined to win.", answer: 4, options: ["down the road", "back and forth", "on the way", "side by side"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / The Darkest Island",
                type: "passage",
                passageText: `The Darkest Island

In a city, there are lights from cars and lamps all around. Many houses have lights on, and some businesses keep their lights on all night for safety reasons. By keeping lights on, people can see the roads well and feel relieved at night. However, others find it ( 18 ). When the night is too bright, the light can disturb people's sleep. Additionally, the lives of animals are often in danger. Nowadays, such problems are caused by what is called "light pollution," and it poses a challenge for almost every city in the world.

The people living in Sark, a small island near southern England, have done a lot to deal with this problem. They wanted to prevent their community from being bright with lights. Therefore, people cannot ( 19 ) on the streets of Sark. With no cars, there is no need to place streetlights for safe driving. Walking and riding horses and bicycles are allowed when going somewhere. They buy lights when they really need them. However, they make sure to point lights to the ground.

On the island known for its amazingly dark skies, people can see beautiful stars. This has attracted many people from all over the world. The number of people who visit the island is increasing. Surprisingly, as many as 60,000 tourists come to the island every year. ( 20 ), the island's population is getting smaller. The authority began to look for 500 new residents. They will probably face a new problem when new people arrive on this dark sky island.`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 1, options: ["difficult to relax", "fun to see the lights", "easy to watch the stars", "hard to open their shops"] },
                    { no: 19, questionText: "(19)", answer: 3, options: ["plant trees", "go shopping", "drive cars", "walk alone"] },
                    { no: 20, questionText: "(20)", answer: 4, options: ["In other words", "In the end", "In a word", "In contrast"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / Temperature and Sleep",
                type: "passage",
                passageText: `Temperature and Sleep

The quality of people's sleep is greatly ( 21 ). For example, some people have had the experience of not being able to sleep because of noise from their neighbors or busy roads. Other people may have had trouble falling asleep because of light coming in from outside and light from the screens of digital devices, such as smartphones and tablet computers. However, many experts are saying that another very important environmental factor is the temperature.

In the evening, as the air cools down, so does the human body's internal temperature. This is because the brain sends out a signal to the body that it is time to sleep. Then, the body starts to relax, and people's breathing becomes deeper and slower. This is similar to what bears do in the winter. They keep ( 22 ). By doing so, they can make their body functions slow down to the lowest level.

This means the opposite is also true. It becomes difficult for people to sleep when the temperature is too warm. A warm temperature makes it difficult for the human body to cool down. ( 23 ), people roll over in bed on a hot summer night to try to feel more comfortable. This is their reaction to try to escape from the heat. One solution is for people to take a warm shower before going to bed. The human body's internal body temperature starts to drop after a shower.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 3, options: ["concerned by their parents", "reduced when they are full", "influenced by the environment", "important when they have a fever"] },
                    { no: 22, questionText: "(22)", answer: 2, options: ["running from their enemies", "their body temperature low", "the inside of caves warm", "digging a hole to hide in"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["For the time being", "On top of that", "Even then", "In many cases"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ Textbook selection",
                type: "passage",
                passageText: `From: Anastasia Jenkins <a.jenkins@riverschool.edu.com>
To: Joshua Kimura <j.kimura@riverschool.edu.com>
Date: January 26
Subject: Textbook selection

Dear Joshua,

I wanted to update you on the decisions made during last week's teachers' meeting regarding textbook selection for the next semester. Since you were absent, I will give you a summary. In the meeting, we agreed to use two main textbooks, Your Daily English and English First. These books cover important grammar, vocabulary, and reading skills. In addition to these, we also want to use online resources to go along with our teaching materials.

Your Daily English focuses on practical communication skills, with dialogues, exercises, and real-life examples. It's for our second-year students. On the other hand, English First is designed for beginners. This book does not just give students grammar and vocabulary, as traditional textbooks often do. Instead, it also teaches these skills in stories that children of our students' age are more likely to enjoy.

As you are the expert in this area, I would like you to check both textbooks and see what online resources you recommend. We all agree that your opinions about this matter should be heard before the next meeting. Please share your thoughts by next Friday. Since I want everyone to see your choice and reasons for it, please send us a group e-mail.

Best regards,
Anastasia Jenkins
English Department`,
                questions: [
                    { no: 24, questionText: "(24) What was decided in the teachers' meeting last week?", answer: 1, options: ["Which teaching materials to use next semester.", "How many teachers' meetings to have each week.", "Who to ask for opinions about the new textbooks.", "When to invite textbook sellers to suggest their books."] },
                    { no: 25, questionText: "(25) Anastasia Jenkins says that English First", answer: 4, options: ["asked students to show their opinions in the survey conducted last semester.", "is useful for students to exchange their ideas in business situations.", "helps students learn how to write good essays and reports using academic English.", "presents grammar and vocabulary in a way that is interesting to students."] },
                    { no: 26, questionText: "(26) Joshua Kimura", answer: 2, options: ["intends to cancel the next teachers' meeting.", "knows a lot about educational materials.", "was hired by the school after he finished an online course.", "visited the local school to fix teachers' computers."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / Diaries",
                type: "passage",
                passageText: `Diaries

Although different people write diaries for different reasons, most people have probably tried writing one at least once in their lives. One of the common reasons why people keep a diary is to reduce stress. By writing down ideas and thoughts that they do not want others to hear or know, they can calm down some emotions. Writing down what they have done, especially during important events such as vacations, is also a common means to organize their memories.

Morris Villarroel, a Spanish scientist and professor, started trying to organize his memories. When Villarroel turned forty, he was not sure what he had done by then. Even though he had some photos and journals, they were not enough to explain his forty years. To make sure he knows what he has accomplished when he turns eighty, he decided to keep a diary. However, his idea of keeping a diary was unique. He started to write down what he was doing and how he was feeling every fifteen to thirty minutes.

His effort to record what he had done did not end there. Soon after, he started taking pictures to document his life. He attached a small camera to his shirt and set it to take a photo around him automatically every thirty seconds. The number of photos he took in a day ranged from one thousand to two thousand. Of course, most of the photos were of boring everyday things like his hand, his computer, his food, and just people walking in front of him.

However, he learned several things from this experience. By checking what he had written, he found some patterns. This allowed him to realize that he often felt stressed while driving to work. Therefore, he has decided to take the train and walk. He also noticed a few things, so he improved his lectures. These things were so minor that he could have forgotten without the diary. With a detailed record of his life, he can now remember his life clearly, and he says that the last ten years felt much longer than the ones before.`,
                questions: [
                    { no: 27, questionText: "(27) What is one of the common reasons people keep diaries?", answer: 1, options: ["To keep their thoughts organized.", "To let others know about some important events.", "To show them to someone they love.", "To read them when they feel stressed."] },
                    { no: 28, questionText: "(28) How did Morris Villarroel feel when he turned forty?", answer: 2, options: ["His work and pets kept him too busy.", "His pictures and papers did not show enough of his past.", "He always failed to keep a diary.", "He was not ready to keep writing his journals as a scientist."] },
                    { no: 29, questionText: "(29) In his effort to keep a diary, Villarroel", answer: 3, options: ["realized that his life was full of small things that were not worth remembering.", "took photos of himself when an important thing was happening.", "began to record every detail of his life by using a camera.", "made sure to take pictures of every person he met every day."] },
                    { no: 30, questionText: "(30) What did Villarroel discover through the experience of keeping a diary?", answer: 2, options: ["Sometimes, it is necessary to stop keeping a diary and enjoy the moment.", "He can feel as if time passes more slowly by keeping a detailed record.", "His memory has gotten much worse compared to before he started a diary.", "Bigger life events create more emotions and feelings than smaller ones."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 3, options: ["The purpose of keeping a diary for Villarroel was to improve his lectures.", "It is more important to write down how people are feeling than what they are doing.", "Villarroel found that his diary increased the quality of his life.", "Villarroel shows that taking pictures and writing down events have different purposes."] }
                ]
            }
        ]
    },
    "2024-1": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "A: There are several (          ) to consider before making a decision about the school's future.\nB: Yes. We need to look at all the costs and benefits to the local community.", answer: 4, options: ["palaces", "manuscripts", "victims", "factors"] },
                    { no: 2, questionText: "When Matt was decorating his bedroom, he removed the old wallpaper. He was surprised to discover that the walls were bright red (          ).", answer: 1, options: ["underneath", "upstairs", "definitely", "downhill"] },
                    { no: 3, questionText: "Although medicine has made a lot of progress in the past 50 years, researchers still have not found a way to (          ) a cold.", answer: 1, options: ["cure", "grant", "flee", "drop"] },
                    { no: 4, questionText: "After the success of his first TV drama, the producer felt a lot of pressure to (          ) a new show of the same quality.", answer: 2, options: ["reduce", "create", "heal", "sweep"] },
                    { no: 5, questionText: "One of the most important values of France is (          ). The country has many laws that make sure people are free to say what they want.", answer: 4, options: ["behavior", "composition", "attendance", "liberty"] },
                    { no: 6, questionText: "Janet answered every question on her history test (          ), so the teacher gave her a perfect score.", answer: 1, options: ["correctly", "eventually", "loudly", "obviously"] },
                    { no: 7, questionText: "A: Mom, I got the best grade in class on the math exam!\nB: Wow, Amanda! That's a great (          ). Let's celebrate tonight by going to Pizza Palace for dinner.", answer: 2, options: ["requirement", "achievement", "combination", "donation"] },
                    { no: 8, questionText: "Neal went to his first nuclear physics lecture yesterday. He could not (          ) many of the ideas in the lecture, so he went to the library to study what he did not understand.", answer: 2, options: ["frighten", "grasp", "harm", "lack"] },
                    { no: 9, questionText: "Rachel hung a sign near her (          ) asking people to take off their shoes before entering her room.", answer: 1, options: ["doorway", "habit", "rooftop", "fireplace"] },
                    { no: 10, questionText: "In Canada, road signs for speed limits are posted in kilometers per hour. Americans often need to (          ) the measurements to miles per hour in order to understand how fast they can drive.", answer: 4, options: ["resign", "derive", "filter", "convert"] },
                    { no: 11, questionText: "Brian learned many things during his year abroad in Brazil. (          ), he learned how to cook a dish called feijoada and how to dance samba.", answer: 3, options: ["At random", "In exchange", "For instance", "On purpose"] },
                    { no: 12, questionText: "(          ), Sam finishes his homework before eating dinner. Sometimes, however, he has too much to do and must continue it after dinner.", answer: 1, options: ["As a general rule", "In the long run", "Over and over", "On the contrary"] },
                    { no: 13, questionText: "A: Sorry I'm late for class again, Ms. Simmons. My alarm clock didn't go off.\nB: I've been patient with you (          ), Jamie, but this is the last time. Next time, I'm going to call your parents.", answer: 1, options: ["up until now", "up in the air", "at the bottom", "at the same time"] },
                    { no: 14, questionText: "When Jason and his friends go to play baseball in the park, his little sister goes with them and (          ) the score in her notebook.", answer: 3, options: ["makes sense of", "keeps pace with", "keeps track of", "makes do with"] },
                    { no: 15, questionText: "A: Daisy, is there something wrong? You keep (          ) the top of my head.\nB: Sorry, but some of your hair is standing up. It looks really funny!", answer: 1, options: ["staring at", "passing on", "hearing from", "belonging to"] },
                    { no: 16, questionText: "Before Eric finished working for Top Paper Supplies Inc., he offered to train the person who was going to replace him. He wanted to leave the company (          ).", answer: 2, options: ["by no means", "on good terms", "out of hand", "at first sight"] },
                    { no: 17, questionText: "The bridge seemed strong enough, so Kate decided to cross it. However, it started to shake in the wind, so she (          ) and turned around.", answer: 4, options: ["closed in on", "made ends meet", "got back together", "had second thoughts"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / Muscle Cars",
                type: "passage",
                passageText: `Muscle Cars

Cars are not just for driving. Some people like to collect cars, too. One type of car that people in the United States like to collect is called a muscle car. Muscle cars have large, powerful engines so that they can travel very fast, and many muscle cars are rare and very valuable. Because of this, collecting muscle cars ( 18 ).

Many muscle cars were built during the 1960s and the early 1970s, and a lot of collectors regard this period as the golden age of muscle cars. Although muscle cars are still being made today, the most popular ones were made over fifty years ago. People who collect such cars feel that they are ( 19 ) by owning them. When older people see such cars, they remember the fashions, the movies, the music, and the mood of the period in which these cars were made. Moreover, younger people can get a taste of it.

Another reason that people like owning muscle cars is that they like to play with the cars' engines. Unlike many modern cars, muscle cars have simple engine designs. Their owners can take apart the engines, repair and clean them, and then put them back together so that they will be even more powerful. Many collectors buy old, damaged muscle cars and spend their free time fixing them. Often, they must travel long distances to visit special shops to get the parts that they need. However, ( 20 ), they meet new people with similar interests in different parts of the country and learn more about their favorite kinds of cars.`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 4, options: ["was banned in some places", "is much easier for children", "used to be more popular", "can be an expensive hobby"] },
                    { no: 19, questionText: "(19)", answer: 3, options: ["breaking the law", "helping the environment", "keeping the past alive", "making the problem worse"] },
                    { no: 20, questionText: "(20)", answer: 3, options: ["in contrast", "to begin with", "by doing so", "for once"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / Growing Corn",
                type: "passage",
                passageText: `Growing Corn

The United States is one of the world's largest producers of corn each year, with the majority grown in the nation's Midwest region. While the corn industry is an important part of the country's economy, it is also ( 21 ). The large number of corn plants make the region hotter. In an area that already has very high summer temperatures, climate change is making this a growing concern.

Interestingly, the crops do not actually change the temperature. When corn plants release water into the air — a process called corn sweat — the air becomes wetter. This added moisture makes the air more humid, which makes the temperature feel warmer. With so many corn crops in one area, thousands of liters of water are released from the plants every day. ( 22 ), local residents are feeling increasingly uncomfortable due to the higher humidity levels. In some cases, corn sweat can even make it dangerous for farmers to work outside for too long.

The situation seems to be getting worse because higher humidity is moving from rural to urban areas as the wind pushes the moist air into cities. In addition, corn crops ( 23 ). Corn releases more moisture than other plants, but most plants sweat to some degree. Soybeans also release a lot of moisture. Since corn and soybeans make up about 75 percent of the crops grown in the Midwest, any plans to increase production will only make uncomfortable weather conditions even worse.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 1, options: ["affecting local weather", "feeding wild animals", "improving soil conditions", "changing population trends"] },
                    { no: 22, questionText: "(22)", answer: 2, options: ["Even so", "For this reason", "In exchange", "For instance"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["grow longer leaves and roots", "can live in dry conditions", "have a long growing season", "are not the only cause"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ Your restaurant",
                type: "passage",
                passageText: `From: Derek Lyle <d_lyle01@ugotmail.com>
To: Anna Clemens <anna_clemens@ugotmail.com>
Date: June 2
Subject: Your restaurant

Dear Ms. Clemens,

Yesterday evening, I visited your restaurant with a friend, and I wanted to let you know how impressed we both were with the quality of the service and the food. The server, Beth, was excellent. She was polite, and she was able to answer all our questions about items on the menu. She also gave us some suggestions about what to order and made sure that we had everything we needed during our meal.

We did not have to wait long for our food to be served. It was not only delicious but also beautifully presented. I ordered a steak, and it was cooked exactly as I had asked. My friend enjoyed his main course, too. He chose one of your mushroom burgers. Afterward, he said it was probably the best burger he had ever tasted.

While we were there, I noticed a sign that said you were looking for staff. I am currently studying at college, but I would like to find part-time work in the evenings and on weekends. Although I have no experience of working in restaurants, I believe that I would be a good choice as a server or a worker in the kitchen. I am a hard worker who finds it easy to get along well with others. Please reply to this e-mail if you would like me to come for an interview.

Sincerely,
Derek Lyle`,
                questions: [
                    { no: 24, questionText: "(24) Derek Lyle mentions that the server", answer: 4, options: ["kept bothering him and his friend during their meal.", "seemed to know very little about the items on the menu.", "let him and his friend choose which table to sit at.", "made some recommendations to him and his friend."] },
                    { no: 25, questionText: "(25) What is one thing Derek Lyle says about his food?", answer: 2, options: ["It took longer than he expected for it to be served.", "The way that it looked was very appealing.", "His steak was not cooked as he had asked.", "He had never tried a mushroom burger before."] },
                    { no: 26, questionText: "(26) Derek Lyle asks Ms. Clemens to contact him because he wants", answer: 4, options: ["her to provide food for a party at his college.", "to get advice about opening his own restaurant.", "her to apologize and offer him a refund.", "to talk with her about working at her restaurant."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / The Arts and Crafts Movement",
                type: "passage",
                passageText: `The Arts and Crafts Movement

In the United Kingdom during the nineteenth century, new technology greatly changed how people lived. Until this time, many people lived on small farms. They worked with their family members and neighbors to make by hand what they needed to live. When new machines were invented and factories were built so that items could be produced more quickly and easily, people moved into cities to take jobs in the factories. They used the money they earned to buy the things they needed, many of which were made by machines instead of by hand.

Some people disliked these changes. In particular, one group of artists and designers believed that society would be better if people went back to the old ways of making things. They formed a group that became known as the Arts and Crafts movement to share their ideas and sell their products. Although some members produced paintings and sculptures, most made objects that could be used, such as books and fabrics that had been printed by hand, furniture, and dishes. They wanted to design beautiful, high-quality items that were useful in everyday life.

William Morris, a famous designer, was one of the most important members of the Arts and Crafts movement. He was not against the use of machines. However, he disagreed with the way that the managers of large factories produced items. These managers divided the process into small stages, with each worker only working on one stage. Morris thought workers would be happier and healthier if they were involved in the whole production process, worked in small shops, and met the people who bought and used their products.

For a while, the Arts and Crafts movement was a success. Public exhibitions were held to display and sell the products made by the members of the movement, and people in the United Kingdom and abroad were inspired to form similar organizations. During the twentieth century, however, the popularity of such products declined because they took too long to make and cost too much to buy. However, the ideas of the Arts and Crafts movement continue to influence the way that artists and designers think about their work.`,
                questions: [
                    { no: 27, questionText: "(27) How did life change for people in the United Kingdom in the nineteenth century?", answer: 1, options: ["They left their farms and started buying things that were made in factories.", "They began working with family members and neighbors to make things.", "They had larger families because they were earning more money than before.", "They began taking vacations in the countryside and by the sea for their health."] },
                    { no: 28, questionText: "(28) What is one thing the members of the Arts and Crafts movement believed?", answer: 3, options: ["Machines would never be able to make objects as quickly as artists could.", "Paintings and sculptures were not worth making because they were not useful.", "The lives of people would improve if they returned to making things by hand.", "Designers should specialize in producing just one or two types of items."] },
                    { no: 29, questionText: "(29) William Morris believed that workers in factories", answer: 2, options: ["were not able to understand each small stage of their work.", "did not have enough involvement in the production process.", "had to spend too much time dealing with their customers.", "could make more money if they worked in small shops."] },
                    { no: 30, questionText: "(30) People started buying fewer products made by the Arts and Crafts movement because", answer: 3, options: ["they realized that it would be simpler to make the items themselves.", "better-quality products were being made abroad.", "the products were expensive and not easily available.", "other artists and designers began to have a greater influence."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 1, options: ["Technology developed in the nineteenth century had a significant effect on UK society.", "Many artists and designers were not allowed to join the Arts and Crafts movement.", "William Morris thought that it was wrong to use machines to produce items.", "Items made by the Arts and Crafts movement have never been exhibited in public."] }
                ]
            }
        ]
    },
    "2025-1": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "The (          ) of ancient Greece made many great discoveries in science, politics, and art. These discoveries changed the way that people think and live.", answer: 1, options: ["civilization", "disappointment", "proportion", "advertisement"] },
                    { no: 2, questionText: "The hard, wooden bench in the park was (          ), so Anna and Cathy decided to sit on the grass.", answer: 4, options: ["permanent", "amusing", "complicated", "uncomfortable"] },
                    { no: 3, questionText: "The people in the car crash could have been (          ) hurt. Luckily, their injuries were not serious.", answer: 1, options: ["severely", "fluently", "currently", "anxiously"] },
                    { no: 4, questionText: "The sofa was too heavy to carry, so Bill had to (          ) it across the floor to move it to the other side of his living room.", answer: 1, options: ["drag", "wipe", "greet", "row"] },
                    { no: 5, questionText: "Haruka wanted to enter a popular university, so she (          ) all her attention to studying for the entrance exam.", answer: 4, options: ["specified", "advertised", "reminded", "devoted"] },
                    { no: 6, questionText: "Gary (          ) that his message was a joke by putting a laughing face symbol at the end of it.", answer: 4, options: ["deceived", "sacrificed", "composed", "indicated"] },
                    { no: 7, questionText: "A: I'm sorry for being late.\nB: You don't have to (          ). It's not your fault that your train wasn't on time.", answer: 1, options: ["apologize", "supply", "determine", "instruct"] },
                    { no: 8, questionText: "A: Do you get nervous before giving a speech in front of the class?\nB: Yes, I always feel a little (          ). But I try to stay calm and speak clearly.", answer: 3, options: ["inheritance", "exception", "anxiety", "confidence"] },
                    { no: 9, questionText: "A: Why are you going to Canada, Sarah?\nB: I'm going to work for an organization that helps children. I'm going to help people who are in need and try to improve their (          ).", answer: 2, options: ["balance", "welfare", "reputation", "genius"] },
                    { no: 10, questionText: "The (          ) that make rabbits different from other animals are that they have long ears and short tails.", answer: 2, options: ["contributions", "characteristics", "investigations", "exhibitions"] },
                    { no: 11, questionText: "A: Did you see the new version of my article for the sports section, Mr. Jones?\nB: Yes, but it's (          ) than the first version. Please write it once again.", answer: 2, options: ["much safer", "no better", "far healthier", "still further"] },
                    { no: 12, questionText: "The farmer took his apples to the market on Sunday, but because his prices were too high, (          ) of them could be sold.", answer: 3, options: ["some hardly", "only a little", "only a few", "some seldom"] },
                    { no: 13, questionText: "Bill is a university student. He has a part-time job, but he still (          ) his parents for most of his money.", answer: 2, options: ["covers up", "relies on", "does with", "approves of"] },
                    { no: 14, questionText: "A: I hear you had a chance to study in Canada, but you didn't go.\nB: Yes, I turned it down, (          ). It was a big mistake.", answer: 4, options: ["at my service", "in my heart", "in my way", "to my regret"] },
                    { no: 15, questionText: "In order to go on a trip to Europe next year, John is trying to (          ) enough money. He is only eating out on weekends to cut down on spending.", answer: 3, options: ["bring on", "pass for", "save up", "hand over"] },
                    { no: 16, questionText: "A: What do you think of Alice's Spanish?\nB: It's very good. She'll be able to live and work in Spain without any problems. She really (          ) it.", answer: 3, options: ["takes a good look at", "pays a good price for", "has a good command of", "gives a good reason of"] },
                    { no: 17, questionText: "A: How is the novel you are reading?\nB: It's good, but (          ) it is hard to understand. The author uses very complex language.", answer: 4, options: ["with ease", "on board", "in turn", "at times"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / The Communication of Elephants",
                type: "passage",
                passageText: `The Communication of Elephants

Although it may seem that humans are the best at communication since they use languages, animals also communicate in different ways. Elephants are a great example of this. They may seem to move their body parts ( 18 ). However, this is not true. They show their emotions and what they want to do by using body movements such as moving their ears, waving their long noses, and using certain body positions.

Elephants are big animals, but they try to make themselves look even bigger when they face a threat. They do so by spreading their ears and raising their heads. ( 19 ), when they show that they accept the others' authority, they pull their ears back and put their heads down. Not only do they express their own emotions, but they also feel the emotions of others. For instance, if another elephant is upset, they will gently touch its nose to calm it down.

While some communication tools are easily observed by people, elephants also use a method that people cannot see or hear. That is, they use low sounds because lower sounds can reach farther than higher sounds. By using them, they can send messages to others ( 20 ). They can inform others of the presence of enemies or rival groups and gather friends when they find water or food sources. Mothers can also help their baby elephants feel calm and safe by letting them know where they are from a distance.`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 3, options: ["just as a fun habit", "for health purposes", "without any intentions", "to get out of danger"] },
                    { no: 19, questionText: "(19)", answer: 4, options: ["Disappointingly", "More importantly", "Nevertheless", "By contrast"] },
                    { no: 20, questionText: "(20)", answer: 1, options: ["as far as a few kilometers away", "as long as they are in a safe place", "less far than they think", "much deeper in the ground"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / Ifugao Rice Fields",
                type: "passage",
                passageText: `Ifugao Rice Fields

Ifugao people live on Luzon Island in the Philippines. The name Ifugao comes from ipugo, which means "from the hill" in the local language. As its name suggests, they live on a steep mountain slope. This means that it is difficult for them to use large areas of land for growing rice and other crops. Due to ( 21 ), they have practiced creative ways. Ifugao people made rice fields on the slopes of the mountain, which looked like stairs.

The idea of ( 22 ) is at the center of the Ifugao people's traditions. Following this idea, the rice fields are created along the shapes of the mountains. Instead of bringing water for farming from the foot of the mountain, they use water that flows naturally from the top of the mountain. Since machines cannot be used in the stair-like rice fields, planting and harvesting are annual events in which the community helps each other. Through these events, the younger generation learns about the farming traditions in the community.

However, young people from the island recently moved to the city. Helping each other in the community is no longer working well. The people remaining on the island need to make money to support themselves. Some of them cleared forest areas to make their own vegetable fields and took away natural water sources from the rice fields. ( 23 ), a large quantity of the rice fields was damaged because of the lack of workers and water. Therefore, some efforts are being made to keep the rice fields in good condition.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 3, options: ["a lack of workforce", "the variety of fruits they make", "poor farming conditions", "bad weather throughout the year"] },
                    { no: 22, questionText: "(22)", answer: 1, options: ["making use of the given environment", "leaving wild animals alone", "singing while working in the fields", "growing rice without using water"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["On the contrary", "To begin with", "In general", "As a consequence"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ School library activities",
                type: "passage",
                passageText: `From: Jessica Smith <jsmith@mounthigh.edu>
To: Library staff <librarystaff@mounthigh.edu>
Date: November 18
Subject: Questions about school library activities

Dear school library staff members,

My name is Jessica Smith, and I am a student here at Mount High School. I attended the reading week event you organized last month. I especially liked the lunchtime event where students introduced books to each other. We seldom talk about reading books in our daily conversations. This event helped me realize that many students were interested in reading, which has encouraged me. I hope the school library holds this kind of event often.

I am a member of the Student Council, and we have been discussing how to improve our school life. As part of this project, I would like to know more about the assistance the school library gives students. I would especially like to ask you some questions about the orientation for new students and the study support system linked to each subject. I would also like to know how you plan to encourage library use during long vacations.

I have put together several questions in one document and am sending it with this e-mail. Please write your answers on the document and return it to me by e-mail. Once I receive your answers, I would like to invite some of you to one of the council's meetings. We meet at four in the afternoon in Room 303 every Tuesday. If you could let us know in advance, we can spare half an hour for the discussion.

Sincerely,
Jessica Smith
Student Council`,
                questions: [
                    { no: 24, questionText: "(24) Last month, Jessica discovered that", answer: 4, options: ["more students liked to read science fiction novels than nonfiction short stories.", "students from other schools joined the reading week event at her school.", "reading was one of the most common conversation topics among students.", "a lot of students in her school were actually interested in reading."] },
                    { no: 25, questionText: "(25) What is Jessica interested in about the library?", answer: 1, options: ["What assistance is being provided by the library to help students.", "The most popular categories of books among new students each year.", "The opening hours of the school library during winter vacation.", "When she should arrange library events for new and graduating students."] },
                    { no: 26, questionText: "(26) What does Jessica ask staff members to do after answering the questions?", answer: 3, options: ["Call her to discuss library improvements.", "Close the library to meet students.", "Send their answers back by e-mail.", "Attend the council's meeting on Wednesday."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / History of Tea Bags",
                type: "passage",
                passageText: `History of Tea Bags

At the start of the 1900s, Thomas Sullivan, a tea importer from New York, accidentally invented tea bags. He delivered tea leaf samples to his customers in small silk bags. He believed that they would take the leaves out of the bags before use. To his surprise, the customers thought it would be more convenient to pour hot water over the tea leaves while they were still in the bag. His invention had the advantage of making it easier to make a cup of tea, as well as making the process of cleaning the pot easier.

Tea bag materials have changed over time. Sullivan's first silk bags were replaced with cotton after his customers complained that silk bags were not the best for making tea. As the popularity of tea bags grew, it became impossible for tea bags made by hand to meet the demand. That was why filter paper was introduced. It was cheap and allowed water to pass through while keeping tea leaves inside. It was ideal for large-volume production. Today, in addition to filter paper, nylon tea bags are also common in the market.

The spread of tea bags was first observed in the United States and Canada. It took a while, however, for them to gain popularity in Britain. Using tea bags was considered rude in their culture among some people. This attitude began to change after World War II when people's lives became busier. In busy lifestyles, their traditional method of using tea leaves that were not in bags became difficult. Tea bags were suitable for the modern, fast-paced life.

Tea bags continue to improve. In the late 1990s, pyramid-shaped tea bags appeared on the market. The shape offers more space for tea leaves to move freely compared to square tea bags. At the same time, there is a movement to go back to using paper, cloth, or silk instead of nylons or materials that include some plastic. This goes with the global trend toward reducing plastic use. These efforts aim to make tea bags, which are usually thrown away after one use, more environmentally friendly.`,
                questions: [
                    { no: 27, questionText: "(27) Why was Thomas Sullivan surprised at his customers?", answer: 3, options: ["They sent the tea samples back to him without opening them.", "They asked for bigger bags to make it easier to make tea.", "They used the tea leaves in the bags just as they were delivered.", "They mixed different types of tea from different bags together."] },
                    { no: 28, questionText: "(28) The development of tea bag materials was mainly influenced by", answer: 1, options: ["the need for a large amount of production of tea bags.", "the desire to improve the taste of tea by using filters.", "the demand for handmade bags over machine-made ones.", "the popularity of smaller bags for easy transportation."] },
                    { no: 29, questionText: "(29) Why did tea bags finally become popular in Britain?", answer: 4, options: ["The quality of tea in bags improved to match the British tea culture.", "British tea companies said it was not rude to use tea bags.", "The government provided financial support to tea bag factories.", "They fit well with the pace of the modern life of British people."] },
                    { no: 30, questionText: "(30) Pyramid-shaped tea bags were introduced to", answer: 3, options: ["reduce the amount of tea leaves used and cut production costs.", "make tea bags look more modern and appealing to customers.", "give more space for tea leaves to move around in tea bags.", "compete with a traditional tea-making method in the market."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 2, options: ["The filter paper was the first material used to make tea bags.", "The materials used for tea bags are becoming more eco-friendly.", "It was Sullivan's customers' idea to put tea leaves in the silk bags.", "People in Britain never used tea bags until very recently."] }
                ]
            }
        ]
    },
    "2025-2": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "When King Otto died, his son was still too young to (          ) the kingdom. King Otto's brother looked after the country until the young prince was old enough to rule.", answer: 2, options: ["overlap", "govern", "forgive", "arrest"] },
                    { no: 2, questionText: "The IT company has greatly (          ) since it opened five years ago. It now has offices in over 30 cities.", answer: 3, options: ["suffered", "reflected", "expanded", "influenced"] },
                    { no: 3, questionText: "Because Westbrook Junior High School's softball team won the state championship, they have (          ) for next month's national finals.", answer: 2, options: ["robbed", "qualified", "weighed", "disappeared"] },
                    { no: 4, questionText: "After working as a taxi driver for more than 10 years, Sue has decided to try a new (          ). She is now training to become a nurse.", answer: 3, options: ["device", "complaint", "occupation", "proverb"] },
                    { no: 5, questionText: "Matthew's story (          ) his friends' attention completely. They hardly noticed how much time had passed while he was telling it.", answer: 3, options: ["accepted", "flattened", "gripped", "promised"] },
                    { no: 6, questionText: "The politician's view on education was (          ) through his whole career. He never changed his opinion that teachers should be paid more.", answer: 3, options: ["massive", "internal", "consistent", "recent"] },
                    { no: 7, questionText: "A: How was your math test today, James?\nB: I did (          ) well. I wasn't expecting to pass, but I ended up getting 82 percent.", answer: 2, options: ["necessarily", "surprisingly", "continuously", "faithfully"] },
                    { no: 8, questionText: "Susie wanted to make a salad, so she chopped up some tomatoes, onions, and avocadoes together. Then, she put the (          ) in a bowl and added some spices.", answer: 4, options: ["surgery", "pollution", "resort", "mixture"] },
                    { no: 9, questionText: "Sports referees and umpires must have excellent (          ). They have to be able to make accurate decisions in just a few seconds, often under great pressure.", answer: 4, options: ["laughter", "climate", "illness", "judgment"] },
                    { no: 10, questionText: "A: What type of government does our country have?\nB: Well, we live in a (          ), so we can vote for the people we want to represent us.", answer: 2, options: ["tragedy", "democracy", "mystery", "philosophy"] },
                    { no: 11, questionText: "The security alarm in the hotel (          ) in the middle of the night, so all the guests and workers had to leave quickly.", answer: 4, options: ["dropped by", "came down", "passed on", "went off"] },
                    { no: 12, questionText: "After graduating from college, Rachel got a job in a bookstore. She wants to work there (          ), but she hopes to find a job in marketing in the future.", answer: 2, options: ["in the old days", "for the time being", "up in the air", "at the same time"] },
                    { no: 13, questionText: "The two cars looked (          ) each other, but one cost three times as much as the other. The expensive one had far superior performance.", answer: 4, options: ["jealous of", "confident of", "limited to", "identical to"] },
                    { no: 14, questionText: "The teacher advised Emma to review her notes (          ) relying only on the textbook. He said it would help her understand the material better and prepare well for the test.", answer: 3, options: ["because of", "provided that", "rather than", "even though"] },
                    { no: 15, questionText: "A: What do those birds (          )?\nB: They seem to eat insects. Look, there's one catching a fly in its beak.", answer: 3, options: ["turn in", "cut off", "feed on", "hang on"] },
                    { no: 16, questionText: "A: Do we have to pay to see the butterfly garden at the zoo?\nB: No. It's (          ). You can visit it whenever you want.", answer: 4, options: ["out of breath", "against its will", "easy to use", "free of charge"] },
                    { no: 17, questionText: "There are (          ) good reasons for studying a foreign language, such as meeting new people and finding a job in another country.", answer: 4, options: ["the other of", "the most of", "a kind of", "a number of"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / A Toy Made from a Spring",
                type: "passage",
                passageText: `A Toy Made from a Spring

There are many inventions in the world, and they have made our lives richer and more interesting. Thomas Edison repeated experiments and finally achieved his original goal of inventing the light bulb. Some inventions, like Edison's light bulb, are the result of the inventor's desire to create them from the beginning. ( 18 ), there are other types of inventions that were created by chance. A toy called the Slinky is one of them.

Richard James was an engineer working for the United States Navy. He was given the task of coming up with an idea to protect expensive instruments on the ship during the rough ocean travel. One day, while he was dealing with a spring, he ( 19 ) from a shelf. Instead of falling where he thought it would, it moved along the shelf. It looked as if it was walking down the stairs. He let the spring fall to the floor again and again to check that it moved like a living thing each time.

After showing his wife his interesting discovery, he decided to develop it into a toy. She thought about the name that would suit the toy. She looked up some words in the dictionary and chose the word slinky. She chose the name because it meant "elegant and smooth movement." When James tried to demonstrate and sell it at a department store, he was worried. He thought that ( 20 ). However, when he arrived, many shoppers were there to buy the toy. Ever since then, the Slinky has been enjoyed by many children around the world.`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 3, options: ["As a result", "In other words", "On the other hand", "In the same way"] },
                    { no: 19, questionText: "(19)", answer: 1, options: ["accidentally dropped it", "took some books", "suddenly heard some noise", "picked up one document"] },
                    { no: 20, questionText: "(20)", answer: 3, options: ["people owned one already", "the store did not have space", "people might not come to buy one", "the store would run out of stock"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / Learning from Owls",
                type: "passage",
                passageText: `Learning from Owls

Owls are active at night because darkness works to their advantage. They have large eyes to gather as much light as possible. This helps them spot animals in the dark. What helps them find animals in the dark is not only their eyes but also their ears. Their ears are located at different heights on the left and right sides of their heads. This makes the time at which ( 21 ) different. They analyze this difference instantly and determine the accurate position of the animals.

Spotting food is only the first step when animals hunt for their food. The hunters must get closer and catch their food before being noticed. Owls are also good at this. Many birds tend to make noise when cutting through the wind because air moves through their feathers in uncontrolled ways. However, the edges of owl feathers are unique. The special design helps create ( 22 ). This allows them to fly quietly and long distances without being noticed.

Some researchers are considering using the owl's feather structure in airplane design. A team at the University of London made a copy of owl feathers with 3D printing. They created model airplane wings with a structure similar to that of owl feathers and studied how air flowed around them. The research could help reduce noise from airplanes. This is very important for people in areas near airports, where more flights have caused higher noise levels. ( 23 ), many people hope for progress in this technology.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 3, options: ["animals make some noise", "owls sleep in the day", "sound arrives at each ear", "their eye recognizes the light"] },
                    { no: 22, questionText: "(22)", answer: 1, options: ["a smooth and silent air movement", "a loud hitting sound in the air", "a strong air movement to fly up", "a color change in their wings"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["In spite of this", "To begin with", "Even so", "Therefore"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ Important course information",
                type: "passage",
                passageText: `From: Sarah Freeman <sfreeman@careerdevelopment.com>
To: All Course Participants <participants@careerdevelopment.com>
Date: March 23
Subject: Important course information

Dear marketing course participants,

Thank you for applying for the marketing course. Before your first lesson, we'd like to give you some essential information. In the first session, we'll talk about today's marketing needs. To help you understand, please watch a fifteen-minute video of basic concepts and practical examples before the first class on April 6. After watching it, there will be a short quiz to test your understanding.

We will have lessons every Tuesday and Thursday in April and May at 7 p.m. However, there will be a slight change in the schedule because the instructor of this course will be away for one week to attend an international conference. So, two classes for that week will be held in June. Due to this change, the course will end on June 6.

If you miss a lesson, we offer a way to catch up. We'll post videos of each lecture on the web. However, we allow you to take this offer only twice during the course period because discussing the materials with your classmates is an important part of this class. When you miss three sessions or more, please talk to your manager. We look forward to seeing you soon!

Best regards,
Sarah Freeman
Marketing Course Administration`,
                questions: [
                    { no: 24, questionText: "(24) Why does Sarah Freeman want course participants to take the quiz?", answer: 2, options: ["To prepare a short video to show in the class.", "To check their understanding of the content of the video.", "To help participants prepare their presentations.", "To divide participants into groups based on their understanding."] },
                    { no: 25, questionText: "(25) The class schedule will be changed because", answer: 3, options: ["another group will use the classroom.", "some of the weeks include national holidays.", "the instructor will be at another location.", "some participants will take math examinations."] },
                    { no: 26, questionText: "(26) What is one thing Sarah says about catching up with a class?", answer: 4, options: ["Participants can talk with the instructor online.", "Participants can take lessons from different marketing courses.", "Participants can receive class materials by e-mail.", "Participants can watch videos of two classes online."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / The Mirror Test",
                type: "passage",
                passageText: `The Mirror Test

Humans and animals are different in many ways. Some say only humans can have a language and a culture. Among these discussions, one idea that is often discussed is whether only humans can recognize or tell the difference between themselves and others. The mirror test is used to judge this. It is done by putting a mark on an animal's body. The mark is put in a place where the animal cannot see without the help of a mirror. If the animal tries to remove the mark on its body, it shows that the animal recognizes itself.

The same test was done on fish called cleaner wrasses in a tank with a mirror. At first, they attacked their reflection. This could be because they thought the reflection was another fish. Later, they changed how they swam and checked if the fish in the mirror also changed how they swam. After they got used to the mirror, they were put to sleep, and a mark was put on them. When they woke up and looked in the mirror, many of them tried to take the mark off their body. They did so by brushing their body against the tank or the sand on the bottom.

They also recognized themselves in photographs. In a test done after the mirror test, researchers showed the fish some pictures. When they were shown a picture of themselves with a mark on their body, they tried to remove the mark from their body. However, they did not act the same way when pictures of other fish with a mark were shown. This suggests that they recognize differences between themselves and other fish.

The mirror test has led to much discussion and debate. First, animals that have not seen a mirror before might not understand that what is in the mirror is themselves. It does not suggest that they do not recognize themselves. Instead, it shows that they have no idea how a mirror works. Moreover, vision is not the main sense for all animals. Some animals rely more on smell than vision, so failing the mirror test does not always mean they cannot recognize themselves.`,
                questions: [
                    { no: 27, questionText: "(27) The mirror test is used", answer: 3, options: ["to test an animal's ability to see in the dark.", "to find out how far an animal can see outside.", "to determine if an animal can recognize itself.", "to see when a baby recognizes who its mother is."] },
                    { no: 28, questionText: "(28) How did the cleaner wrasses check if the fish in the mirror was themselves?", answer: 4, options: ["They opened and closed their mouths many times.", "They compared the color of their body to that of the mirrored fish.", "They tried to touch the fish in the mirror with their fins.", "They began to swim in a different way than before."] },
                    { no: 29, questionText: "(29) What behavior did the cleaner wrasses take when they were shown a picture of themselves with a mark?", answer: 1, options: ["They tried to get rid of the mark on their body.", "They escaped from the picture and hid behind a rock.", "They ignored the picture and showed no interest in it.", "They began swimming with other fish in the tank."] },
                    { no: 30, questionText: "(30) In the discussion about the mirror test, it has been pointed out that", answer: 4, options: ["it costs a lot of money and takes too much time.", "it is too dangerous to use a piece of glass in the water.", "it only works on fish and some types of monkeys.", "it needs to consider the other senses that animals have."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 1, options: ["Some fish can understand the difference between themselves and others.", "The cleaner wrasses were marked first and then placed in a tank with a mirror.", "The cleaner wrasses did not notice the marks that were put on their bodies.", "It was found that animals with large brains understood how to use mirrors."] }
                ]
            }
        ]
    },
    "2026-1": {
        sections: [
            {
                title: "第1問：短文の語句空所補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "In many countries, the (          ) wears a white dress at a wedding. However, in some countries, she may wear a red dress.", answer: 4, options: ["lawyer", "warrior", "surgeon", "bride"] },
                    { no: 2, questionText: "The teacher asked her students to find Argentina on a (          ). She wanted them to learn about countries that are far away from Japan.", answer: 2, options: ["branch", "globe", "scale", "trail"] },
                    { no: 3, questionText: "Yuki only started studying Korean two years ago, but she can already read the newspaper without any (          ). Everyone is surprised by how quickly she has learned the language.", answer: 3, options: ["glory", "balance", "difficulty", "priority"] },
                    { no: 4, questionText: "A: Are you all right? You have a (          ) to be quiet when you're worried.\nB: Do I? I never realized I was like that. I'm fine. I just don't have much to say today.", answer: 1, options: ["tendency", "discrimination", "shelter", "content"] },
                    { no: 5, questionText: "Teachers at Billings Academy try to (          ) leadership qualities in their students. They teach the students how to communicate, make decisions, and take responsibility.", answer: 2, options: ["hate", "foster", "divide", "pronounce"] },
                    { no: 6, questionText: "On a (          ) Saturday night, Mr. and Mrs. Nelson order pizza and watch TV together. But sometimes, they go out to a restaurant.", answer: 3, options: ["gradual", "chemical", "typical", "false"] },
                    { no: 7, questionText: "When the movie ended, many people in the theater began to (          ). The story was very sad.", answer: 4, options: ["occur", "swell", "tap", "weep"] },
                    { no: 8, questionText: "The biology professor showed his students some videos of living cells. He wanted to (          ) how cells work.", answer: 3, options: ["occupy", "polish", "illustrate", "congratulate"] },
                    { no: 9, questionText: "The Green Wolves and the Blue Stars were very evenly matched in the championship game. The Green Wolves (          ) won when they scored a goal in the last seconds of the game.", answer: 3, options: ["secretly", "gently", "barely", "repeatedly"] },
                    { no: 10, questionText: "When the teacher said there would be a test next week, the students (          ). They had hoped that they would have more time to study.", answer: 1, options: ["frowned", "slipped", "guessed", "crawled"] },
                    { no: 11, questionText: "(          ), people should drink eight glasses of water a day to stay healthy. However, some people may need more or less than this.", answer: 4, options: ["For a fresh start", "On a specific occasion", "In case of emergency", "As a general rule"] },
                    { no: 12, questionText: "Ben moved out of his parents' house and into an apartment last week. Now, he has to do everything (          ), like cooking and cleaning.", answer: 4, options: ["on the air", "at a distance", "to his surprise", "on his own"] },
                    { no: 13, questionText: "In the meeting, the president said that he could not (          ) the plan to expand the office because it would be too expensive.", answer: 2, options: ["take away from", "go along with", "bring out in", "watch out for"] },
                    { no: 14, questionText: "After (          ) tests, the doctors discovered that Masahiro had a rare illness. They immediately started treating him.", answer: 1, options: ["a series of", "the edge of", "a member of", "the back of"] },
                    { no: 15, questionText: "A: Our presentation next week will include a lot of data. It will take a lot of work to prepare.\nB: (          ), we are going to be very busy! Let's get started right away.", answer: 1, options: ["In other words", "In the beginning", "Back and forth", "On the contrary"] },
                    { no: 16, questionText: "The two paintings looked (          ) each other at first, but when John looked more closely, he saw that they were very similar in one way.", answer: 1, options: ["distinct from", "composed of", "absent from", "threatening to"] },
                    { no: 17, questionText: "The company had to (          ) some of its workers because it was losing money. It was a very difficult decision to make.", answer: 2, options: ["flip over", "lay off", "bring about", "catch up"] }
                ]
            },
            {
                title: "第2問A：長文の語句空所補充 / Efforts at a Village",
                type: "passage",
                passageText: `Efforts at a Village

El Pital is a rural village in Honduras. Like many places in this country, it faced ( 18 ). Literacy rates were low in the community, and few students had access to books. To solve this problem, an artist and young people worked together to invent a special character named Bibliobandido. They did this to help children enjoy learning to read and write. This character wore a mask and went around the village. Children were told that he would get hungry unless they fed him their stories. Motivated by this, children began writing stories.

Efforts were made to make children believe that Bibliobandido was real. Costumes were created, rumors were spread, and dramatic scenes were performed to bring him to life. During one visit, Bibliobandido appeared in the village on a horse, and children were asked to create new stories within an hour so that he would not starve. This activity turned a writing task into an exciting community event. This was possible because ( 19 ) to make the event successful. Their efforts brought people of different ages together.

The story of Bibliobandido spread to other places and led to some interesting developments. In North America, the idea was changed to fit different places and cultures. For example, in New York, a female character called La Dama Violeta was created as a subway superhero. She protected passengers from having the newspapers and books they were reading stolen by Bibliobandido. ( 20 ), this character added a creative twist to public reading while traveling and reminded people of the joy of reading.`,
                questions: [
                    { no: 18, questionText: "(18)", answer: 1, options: ["a lack of educational resources", "a decline in the number of children", "the loss of safe school routes", "poor cooperation among villagers"] },
                    { no: 19, questionText: "(19)", answer: 1, options: ["many people worked behind the scenes", "some children watched quietly from home", "almost no children waited to meet him", "several students talked about the costumes"] },
                    { no: 20, questionText: "(20)", answer: 3, options: ["To begin with", "Unfortunately", "In this way", "On the other hand"] }
                ]
            },
            {
                title: "第2問B：長文の語句空所補充 / The Science of Fear",
                type: "passage",
                passageText: `The Science of Fear

Fear is a natural emotion that helps protect people from danger. When people see dangerous animals or hear a sudden loud noise, fear quickly makes the brain react and send a message to the body. This reaction causes changes such as a faster heart rate, quicker breathing, and tense muscles. These changes ( 21 ). This is called the "fight-or-flight" response to fear or stress, which gets the body ready to act immediately. Fear has been helping humans survive for millions of years.

Sometimes, people feel fear even when they are not facing real danger. For example, some people feel afraid when they watch a scary scene in a movie, although they are in a safe place. The brain uses memories and past experiences to predict possible danger and generate fear, causing the body to react strongly and become more alert. Some people ( 22 ). They like scary things and seek excitement. This also explains why many people enjoy activities such as riding roller coasters.

However, fear is not always enjoyable. Some people feel fear too often or too intensely. In such cases, the brain treats normal events as dangerous, which can lead to problems. ( 23 ), this intense fear can make everyday activities feel overwhelming and difficult. Recent studies have identified specific brain mechanisms that allow people to control learned fears, offering hope for more effective treatments. Currently, scientists are studying how fear is generated in the brain and seeking solutions for those who suffer from it.`,
                questions: [
                    { no: 21, questionText: "(21)", answer: 2, options: ["make people feel sleepy and calm", "prepare people for escape or defense", "stop people from moving their bodies", "help people pretend they are not scared"] },
                    { no: 22, questionText: "(22)", answer: 1, options: ["are even fascinated by this feeling", "are often afraid of opening their eyes", "forget fear soon after it happens", "love surprising their friends and family"] },
                    { no: 23, questionText: "(23)", answer: 4, options: ["On the other hand", "Fortunately", "Without this", "In particular"] }
                ]
            },
            {
                title: "第3問A：長文の内容一致選択（Eメール）/ Your service",
                type: "passage",
                passageText: `From: Matthew Watts <mwatts@polarvillageelementary.edu>
To: Mary Carter <mcarter@trackfitrentals.com>
Date: May 27
Subject: Your service

Dear Mary Carter,

My name is Matthew Watts, and I am a teacher at Polar Village Elementary School. We are looking for an outdoor facility where we can hold an athletic event this fall. One of my coworkers recommended your facility and suggested I contact you. She used one of the grounds for an event at the school where she had previously worked. Also, your facility is appealing because it is easy to access from several train stations.

Although the exact date has not been set, our athletic event will take place on a weekday in September or October. We hope to use the large ground from 8 a.m. to 3 p.m. Currently, we expect about 150 people to attend the event, including some parents and teachers. According to the website, this is about the number of people your facility can hold.

Could you please let me know which date might be suitable for our event? It would be great if you could provide a few possible dates. We can meet to discuss the details of the event as needed. Our school is close to your main office, and we have enough teachers and staff. Therefore, we can easily adjust our schedules to make sure at least one person can visit for the meeting before 5 p.m. on the day you choose.

Sincerely,
Matthew Watts
Polar Village Elementary School`,
                questions: [
                    { no: 24, questionText: "(24) What is one reason Matthew Watts is interested in the facility?", answer: 3, options: ["The ground is perfect for camping.", "The staff working there is helpful.", "It is located near public transportation.", "It is popular among schoolchildren."] },
                    { no: 25, questionText: "(25) Regarding the event that is being planned,", answer: 1, options: ["the number of people will likely be appropriate for the space.", "it will happen only on weekends this September or October.", "only the students from the school will attend this year.", "it will last all day until the end of the year."] },
                    { no: 26, questionText: "(26) Why does Matthew mention the location of the school and the number of staff to Mary Carter?", answer: 4, options: ["To suggest changing the time of the event to the morning.", "To ask if the facility staff can help prepare for the event.", "To explain that the school needs more teachers than it has.", "To show that visiting her in the office is not too difficult."] }
                ]
            },
            {
                title: "第3問B：長文の内容一致選択 / The Humboldt Brothers",
                type: "passage",
                passageText: `The Humboldt Brothers

Alexander and Wilhelm von Humboldt were born in the late eighteenth century in what is now Germany into a wealthy family. When Alexander was just a child, their father passed away. Even before his death, their parents wanted to ensure that their sons received a good education. Following his death, the brothers were raised mainly by their mother, who held strict and serious religious beliefs. She took charge of their education, hiring famous educators and experts in various fields to tutor them. The brothers' education covered many academic subjects, such as mathematics, languages, history, and economics.

The younger of the two, Alexander, had been deeply interested in adventure since early childhood. The money he received after his mother's death made his dream of traveling to South America come true. He spent several years there studying plants, animals, and the natural features of the land. Alexander wrote books about what he had learned there after the trip. One of his most famous books is Kosmos, in which he tried to explain how everything in the natural world worked and how things were connected to each other.

On the other hand, Wilhelm's passion was education and language. He served as the education director of the Ministry of the Interior in Prussia and helped found a university. The proposal he wrote for the university has influenced the German university system ever since. He is also known for his studies of language. He considered language to be something whose structure and character reflected the culture and individuality of its speakers. According to him, language was not just a collection of words but a means that allowed people to perceive the world.

It is clear that the environment in which the Humboldt brothers grew up gave them opportunities to achieve something with a lasting impact. They enjoyed a life that not everyone could have, growing up around great leaders, scientists, and writers. Their wealthy background gave them early access to quality education and rich intellectual opportunities. These experiences helped shape ideas that continue to influence society today. While not many people in the world may know their names, many people have indirectly received benefits from their work.`,
                questions: [
                    { no: 27, questionText: "(27) To provide a great education for the Humboldt brothers, their mother", answer: 3, options: ["took them to Berlin to learn languages through their travels.", "chose to send them to a famous school for wealthy families.", "arranged private lessons with academic experts for them.", "had their own parents decide what the brothers should study."] },
                    { no: 28, questionText: "(28) What made it possible for Alexander von Humboldt to travel to South America?", answer: 1, options: ["The money left to him after his mother passed away.", "The sales of the book he wrote about the natural world.", "An invitation from his brother to travel to new places.", "Support given by a group of scientists in South America."] },
                    { no: 29, questionText: "(29) What did Wilhelm von Humboldt believe about language?", answer: 3, options: ["It developed in similar ways across different cultures and societies.", "It reflected both the German cultural background and educational systems.", "It was a tool that helped individuals see and understand the world around them.", "It was closely related to education and played a role in creating university systems."] },
                    { no: 30, questionText: "(30) What is one reason the Humboldt brothers could focus on their achievements?", answer: 1, options: ["Their childhood provided them with access to knowledge and learning.", "Their jobs were flexible enough to allow them a lot of free time for research.", "They had a lot of volunteer workers who were willing to work for them.", "They worked with teams of several great assistants on each project."] },
                    { no: 31, questionText: "(31) Which of the following statements is true?", answer: 4, options: ["Alexander finished writing a book about the functions of nature before he went on a journey.", "The Humboldt brothers desired to become rich and chose their own study subjects accordingly.", "The Humboldts' father wanted to teach them piano himself and took steps to make it happen.", "Wilhelm wrote a proposal that has had a great impact on the German university system."] }
                ]
            }
        ]
    }
};
let currentReadingKey = "2025-3";
let flatQuestions = [];
let totalQuestionCount = 0;
let currentIndex = 0;
let userSelections = {}; 
let isCheckedAll = false; 

let currentTool = 'none';
let isDrawing = false;
let ctx = null;
let canvas = null;

function initApp(examKey) {
    if (examKey) currentReadingKey = examKey;

    flatQuestions = [];
    userSelections = {};
    isCheckedAll = false;
    currentIndex = 0;

    const test = readingData[currentReadingKey];
    if (!test) {
        alert("この回のリーディング問題はまだ登録されていません。");
        if (typeof goHome === "function") goHome(false);
        return;
    }
    test.sections.forEach(section => {
        if (section.type === "single") {
            section.questions.forEach(q => {
                flatQuestions.push({
                    type: "single",
                    sectionTitle: section.title,
                    no: q.no,
                    questionText: q.questionText,
                    answer: q.answer,
                    options: q.options
                });
            });
        } else if (section.type === "passage") {
            flatQuestions.push({
                type: "passage",
                sectionTitle: section.title,
                passageText: section.passageText,
                questions: section.questions
            });
        }
    });

    totalQuestionCount = 0;
    flatQuestions.forEach(item => {
        totalQuestionCount += (item.type === "single" ? 1 : item.questions.length);
    });

    createNavBar();
    initCanvasEvents();
    showQuestion(currentIndex);
    startReadingTimer(currentReadingKey);
}

function createNavBar() {
    const navBar = document.getElementById("nav-bar");
    if (!navBar) return;
    navBar.innerHTML = "";

    let globalQuestionIndex = 0;
    flatQuestions.forEach((item) => {
        if (item.type === "single") {
            const btn = document.createElement("button");
            btn.className = "nav-num-btn";
            btn.innerText = item.no;
            const targetIdx = globalQuestionIndex;
            btn.onclick = () => {
                currentIndex = targetIdx;
                showQuestion(currentIndex);
            };
            navBar.appendChild(btn);
            globalQuestionIndex++;
        } else {
            item.questions.forEach(() => {
                const btn = document.createElement("button");
                btn.className = "nav-num-btn";
                btn.innerText = globalQuestionIndex + 1;
                const targetIdx = globalQuestionIndex;
                btn.onclick = () => {
                    currentIndex = targetIdx;
                    showQuestion(currentIndex);
                };
                navBar.appendChild(btn);
                globalQuestionIndex++;
            });
        }
    });
}

function updateNavBarStatus() {
    const navBtns = document.querySelectorAll(".nav-num-btn");
    let globalIdx = 0;
    flatQuestions.forEach(item => {
        if (item.type === "single") {
            if (navBtns[globalIdx]) {
                if (userSelections[globalIdx] !== undefined) {
                    navBtns[globalIdx].style.borderColor = "#3498db";
                    navBtns[globalIdx].style.backgroundColor = "#ebf5fb";
                }
                if (isCheckedAll) {
                    if (userSelections[globalIdx] === item.answer) {
                        navBtns[globalIdx].style.backgroundColor = "#d4edda";
                        navBtns[globalIdx].style.borderColor = "#28a745";
                        navBtns[globalIdx].style.color = "#155724";
                    } else {
                        navBtns[globalIdx].style.backgroundColor = "#f8d7da";
                        navBtns[globalIdx].style.borderColor = "#dc3545";
                        navBtns[globalIdx].style.color = "#721c24";
                    }
                }
            }
            globalIdx++;
        } else {
            item.questions.forEach(q => {
                if (navBtns[globalIdx]) {
                    if (userSelections[globalIdx] !== undefined) {
                        navBtns[globalIdx].style.borderColor = "#3498db";
                        navBtns[globalIdx].style.backgroundColor = "#ebf5fb";
                    }
                    if (isCheckedAll) {
                        if (userSelections[globalIdx] === q.answer) {
                            navBtns[globalIdx].style.backgroundColor = "#d4edda";
                            navBtns[globalIdx].style.borderColor = "#28a745";
                            navBtns[globalIdx].style.color = "#155724";
                        } else {
                            navBtns[globalIdx].style.backgroundColor = "#f8d7da";
                            navBtns[globalIdx].style.borderColor = "#dc3545";
                            navBtns[globalIdx].style.color = "#721c24";
                        }
                    }
                }
                globalIdx++;
            });
        }
    });
}

function showQuestion(index) {
    currentIndex = index;
    
    let currentBlock = null;
    let accumulatedCount = 0;

    for (let i = 0; i < flatQuestions.length; i++) {
        let block = flatQuestions[i];
        let count = block.type === "single" ? 1 : block.questions.length;
        if (index < accumulatedCount + count) {
            currentBlock = block;
            break;
        }
        accumulatedCount += count;
    }

    if (!currentBlock) return;

    document.querySelectorAll(".nav-num-btn").forEach((btn, i) => {
        if (i === index) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const singleView = document.getElementById("single-question-view");
    const passageView = document.getElementById("passage-question-view");
    if (!singleView || !passageView) return;

    if (currentBlock.type === "single") {
        singleView.classList.remove("hidden");
        passageView.classList.add("hidden");

        document.getElementById("section-title-badge").innerText = currentBlock.sectionTitle.split("：")[0];
        document.getElementById("question-number").innerText = `問 ${currentBlock.no}`;
        document.getElementById("question-sentence").innerText = currentBlock.questionText;

        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";

        currentBlock.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            
            if (userSelections[currentIndex] === i + 1) {
                btn.classList.add("selected");
            }

            if (isCheckedAll) {
                if (i + 1 === currentBlock.answer) {
                    btn.classList.add("correct");
                } else if (i + 1 === userSelections[currentIndex] && userSelections[currentIndex] !== currentBlock.answer) {
                    btn.classList.add("incorrect");
                }
            }

            btn.innerText = `${i + 1}. ${opt}`;
            btn.onclick = () => {
                if (isCheckedAll) return;
                userSelections[currentIndex] = i + 1;
                optionsContainer.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");
                updateNavBarStatus();
            };
            optionsContainer.appendChild(btn);
        });

    } else {
        singleView.classList.add("hidden");
        passageView.classList.remove("hidden");

        document.getElementById("passage-section-badge").innerText = currentBlock.sectionTitle.split("：")[0];
        document.getElementById("passage-title-text").innerText = currentBlock.sectionTitle;
        document.getElementById("passage-text-pane").innerText = currentBlock.passageText;

        setTimeout(resizeCanvas, 50);

        const questionsPane = document.getElementById("passage-questions-pane");
        questionsPane.innerHTML = "";

        let qGlobalIndexBase = 0;
        for (let i = 0; i < flatQuestions.indexOf(currentBlock); i++) {
            qGlobalIndexBase += (flatQuestions[i].type === "single" ? 1 : flatQuestions[i].questions.length);
        }

        currentBlock.questions.forEach((q, qIdx) => {
            const actualGlobalIdx = qGlobalIndexBase + qIdx;
            const qDiv = document.createElement("div");
            qDiv.className = "passage-question-item";
            
            const titleDiv = document.createElement("div");
            titleDiv.className = "passage-q-title";
            titleDiv.innerText = q.questionText;
            qDiv.appendChild(titleDiv);

            const optContainer = document.createElement("div");
            optContainer.className = "passage-options";

            q.options.forEach((opt, i) => {
                const optBtn = document.createElement("button");
                optBtn.className = "passage-opt-btn";
                
                if (userSelections[actualGlobalIdx] === i + 1) {
                    optBtn.classList.add("selected");
                }

                if (isCheckedAll) {
                    if (i + 1 === q.answer) {
                        optBtn.classList.add("correct");
                    } else if (i + 1 === userSelections[actualGlobalIdx] && userSelections[actualGlobalIdx] !== q.answer) {
                        optBtn.classList.add("incorrect");
                    }
                }

                optBtn.innerText = `${i + 1}. ${opt}`;
                optBtn.onclick = () => {
                    if (isCheckedAll) return;
                    userSelections[actualGlobalIdx] = i + 1;
                    optContainer.querySelectorAll(".passage-opt-btn").forEach(b => b.classList.remove("selected"));
                    optBtn.classList.add("selected");
                    updateNavBarStatus();
                };
                optContainer.appendChild(optBtn);
            });

            qDiv.appendChild(optContainer);
            questionsPane.appendChild(qDiv);
        });
    }
    updateNavBarStatus();
}

function checkAllAnswers() {
    isCheckedAll = true;
    let correctCount = 0;
    let globalIdx = 0;

    flatQuestions.forEach(item => {
        if (item.type === "single") {
            if (userSelections[globalIdx] === item.answer) {
                correctCount++;
            }
            globalIdx++;
        } else {
            item.questions.forEach(q => {
                if (userSelections[globalIdx] === q.answer) {
                    correctCount++;
                }
                globalIdx++;
            });
        }
    });

    showQuestion(currentIndex);
    updateNavBarStatus();

    const scoreDisplay = document.getElementById("global-score-display");
    if (scoreDisplay) {
        scoreDisplay.classList.remove("hidden");
        scoreDisplay.innerText = `採点完了！ 正解数: ${correctCount} / ${totalQuestionCount} 問`;
    }

    logReadingSubmission();

    const checkBtn = document.getElementById("global-check-btn");
    if (checkBtn) {
        checkBtn.disabled = true;
        checkBtn.style.backgroundColor = "#95a5a6";
        checkBtn.style.cursor = "not-allowed";
        checkBtn.innerText = "採点終了";
    }
}

function initCanvasEvents() {
    canvas = document.getElementById("draw-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent("mousedown", { clientX: touch.clientX, clientY: touch.clientY });
        canvas.dispatchEvent(mouseEvent);
    });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent("mousemove", { clientX: touch.clientX, clientY: touch.clientY });
        canvas.dispatchEvent(mouseEvent);
    });

    canvas.addEventListener("touchend", (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    });
}

function resizeCanvas() {
    if (!canvas) return;
    const wrapper = canvas.parentElement;
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;
}

function setTool(toolName) {
    currentTool = toolName;
    document.querySelectorAll(".drawing-toolbar .tool-btn").forEach(btn => {
        if (btn.getAttribute("data-tool") === toolName) {
            btn.classList.add("active");
        } else if (btn.getAttribute("data-tool")) {
            btn.classList.remove("active");
        }
    });
    const wrapper = document.querySelector(".passage-pane-wrapper");
    if (wrapper) {
        if (toolName === 'none') wrapper.classList.remove("drawing-active");
        else wrapper.classList.add("drawing-active");
    }
}

function startDrawing(e) {
    if (currentTool === 'none') return;
    isDrawing = true;
    ctx.beginPath();
    const rect = canvas.getBoundingClientRect();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing || currentTool === 'none') return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (currentTool === 'red') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#e53e3e';
        ctx.lineWidth = 2;
    } else if (currentTool === 'marker') {
        ctx.globalCompositeOperation = 'multiply';
        ctx.strokeStyle = 'rgba(255, 235, 59, 0.5)';
        ctx.lineWidth = 18;
    } else if (currentTool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 20;
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
}

function clearCanvas() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function nextQuestion() {
    if (currentIndex < totalQuestionCount - 1) {
        showQuestion(currentIndex + 1);
    } else {
        alert("最後の問題です。「一括で答え合わせをする」ボタンを押してください。");
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        showQuestion(currentIndex - 1);
    }
}

let startTime = null; // 시험 시작 시간 (リーディング用タイマー)

function startReadingTimer(examId) {
    console.log("リーディング開始: " + examId);
    startTime = new Date();
}

function logReadingSubmission() {
    if (!startTime) {
        console.warn("リーディングのタイマーが開始されていません。");
        return;
    }

    const endTime = new Date();
    const elapsedTimeSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(elapsedTimeSeconds / 60);
    const seconds = elapsedTimeSeconds % 60;
    
    const timeStr = `${minutes}분 ${seconds}초`;
    const dateStr = new Date().toLocaleString(); // 제출 시각

    // 1. 기존에 저장된 기록 불러오기 (없으면 빈 배열)
    let logs = JSON.parse(localStorage.getItem('examLogs')) || [];
    
    // 2. 새 기록 추가
    logs.push({
        date: dateStr,
        time: timeStr
    });

    // 3. 브라우저 저장소에 다시 저장
    localStorage.setItem('examLogs', JSON.stringify(logs));

    alert(`제출이 완료되었습니다!\n소요 시간: ${timeStr}`);
}