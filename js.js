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

const readingData = {
    "2025-3": {
        sections: [
            {
                title: "第1問：短文の語句空欄補充",
                type: "single",
                questions: [
                    { no: 1, questionText: "A: There are several (  1  ) to consider before making a decision about the school's future.\nB: Yes. We need to look at all the costs and benefits.", answer: 4, options: ["palaces", "manuscripts", "victims", "factors"] },
                    { no: 2, questionText: "A: Did you read the new book by that historian?\nB: Yes. It contains a fascinating (  2  ) about medieval times.", answer: 4, options: ["troop", "proverb", "cliff", "duty"] },
                    { no: 3, questionText: "The local government decided to (  3  ) the old factory building to make space for a park.", answer: 2, options: ["exist", "demolish", "seize", "disappear"] },
                    { no: 4, questionText: "He is a famous (  4  ) who has written many books about moral values.", answer: 3, options: ["president", "spectator", "philosopher", "conductor"] },
                    { no: 5, questionText: "When people face unexpected danger, they tend to (  5  ) and make mistakes.", answer: 2, options: ["interact", "panic", "fly", "swim"] },
                    { no: 6, questionText: "The company hopes to (  6  ) its business into overseas markets next year.", answer: 3, options: ["recover", "review", "expand", "suspect"] },
                    { no: 7, questionText: "She worked hard to (  7  ) the trust of her coworkers.", answer: 2, options: ["tie", "earn", "hire", "pour"] },
                    { no: 8, questionText: "He was looked at with (  8  ) after the money went missing.", answer: 4, options: ["fortune", "distinction", "loyalty", "suspicion"] },
                    { no: 9, questionText: "Many families suffered from extreme (  9  ) during the economic crisis.", answer: 4, options: ["wealth", "rage", "ignorance", "poverty"] },
                    { no: 10, questionText: "She smiled (  10  ) without knowing the trouble she had caused.", answer: 1, options: ["innocently", "thankfully", "traditionally", "resentfully"] },
                    { no: 11, questionText: "His explanation did not (  11  ) to anyone in the room.", answer: 4, options: ["shake hands", "give way", "take pains", "make sense"] },
                    { no: 12, questionText: "The project was finished (  12  ) on schedule.", answer: 1, options: ["more or less", "sooner or later", "day and night", "before and after"] },
                    { no: 13, questionText: "It is difficult to (  13  ) on such a small salary in this city.", answer: 3, options: ["show off", "put away", "live on", "consist of"] },
                    { no: 14, questionText: "She is (  14  ) the best tennis player in our school.", answer: 2, options: ["bit by bit", "far and away", "all or nothing", "safe and sound"] },
                    { no: 15, questionText: "He moved to Tokyo (  15  ) finding a better job.", answer: 1, options: ["in search of", "for fear of", "on behalf of", "with regard to"] },
                    { no: 16, questionText: "We should (  16  ) and apply for this unique opportunity.", answer: 4, options: ["make a move", "take a nap", "make a wish", "take a chance"] },
                    { no: 17, questionText: "You can stay here (  17  ) you keep quiet.", answer: 3, options: ["As fast as", "As far as", "As long as", "As well as"] }
                ]
            },
            {
                title: "第2問 A：長文の語句空欄補充",
                type: "passage",
                passageText: `Many people buy electric kettles, coffee makers, and other home appliances without thinking much about how they are made. However, some designers are changing their approach. They believe that if people understand how products are built, they will treat them with more care. Therefore, these designers create products that can be easily opened up. When consumers ( 18 ) take apart most electric kettles at home, they can see the simple parts inside. This experience helps people realize that products are not mysterious objects that are impossible to fix. As a result, users are more likely to ( 19 ) use the product for a long time instead of throwing it away when a small problem occurs. ( 20 ) In this way, simple design changes can help reduce waste and encourage a more sustainable lifestyle.`,
                questions: [
                    { no: 18, questionText: "(18) What does the underlined phrase (18) mean?", answer: 3, options: ["clean the inside of electric kettles regularly", "fix broken parts of old electric kettles", "take apart most electric kettles at home", "buy new electric kettles online"] },
                    { no: 19, questionText: "(19) According to the passage, what is one result of understanding how products are built?", answer: 1, options: ["use the product for a long time", "buy more appliances than before", "learn how to design new products", "return products to the store easily"] },
                    { no: 20, questionText: "(20) Which of the following best fits into blank (20)?", answer: 2, options: ["However", "In this way", "For example", "Instead"] }
                ]
            },
            {
                title: "第2問 B：長文の語句空欄補充",
                type: "passage",
                passageText: `In recent years, many cities around the world have started building rooftop gardens on public and commercial buildings. These green spaces offer several important benefits for urban environments. First, plants absorb heat from the sun, which helps to lower the temperature of buildings and reduces the need for air conditioning during hot summer months. Second, rooftop gardens can absorb rainwater and slow down the flow of water into city drainage systems, preventing potential floods. Furthermore, these gardens provide a safe habitat for various birds and insects, increasing biodiversity in crowded cities. ( 21 ) For these reasons, urban planners strongly encourage the creation of rooftop gardens on new constructions. ( 22 ) Some old buildings, however, require expensive structural improvements before gardens can be added safely. ( 23 ) Despite this challenge, the popularity of rooftop gardens continues to grow rapidly.`,
                questions: [
                    { no: 21, questionText: "(21) Which of the following best fits into blank (21)?", answer: 4, options: ["On the other hand", "For instance", "As a result", "For these reasons"] },
                    { no: 22, questionText: "(22) What is mentioned as a challenge for old buildings?", answer: 1, options: ["They require expensive structural improvements.", "They do not have enough sunlight for plants.", "They are usually located too far from city centers.", "They cannot attract birds and insects."] },
                    { no: 23, questionText: "(23) What does the author state about rooftop gardens at the end of the passage?", answer: 3, options: ["Their popularity is starting to decline.", "They are becoming too expensive to maintain.", "Their popularity continues to grow rapidly.", "They will soon be required by law."] }
                ]
            },
            {
                title: "第2問 C：長文の内容一致選択",
                type: "passage",
                passageText: `Thomas Edison is one of the most famous inventors in history, best known for creating the practical incandescent light bulb. However, his success was not achieved overnight. Before finding a material that worked well inside the bulb, Edison and his research team tested thousands of different substances, including plant fibers, hairs, and even fishing lines. People often asked him why he did not give up after so many failures. Edison famously replied that he had not failed thousands of times; rather, he had successfully found thousands of ways that would not work. This positive attitude toward failure was a key factor in his great achievements. He believed that every mistake provided valuable information that brought him closer to the correct solution.`,
                questions: [
                    { no: 24, questionText: "(24) What did Edison and his team do before finding a working material for the light bulb?", answer: 2, options: ["They stopped inventing for several years.", "They tested thousands of different substances.", "They asked other scientists for advice.", "They built a new laboratory overseas."] },
                    { no: 25, questionText: "(25) How did Edison view his unsuccessful experiments?", answer: 4, options: ["As a waste of time and money", "As proof that he lacked talent", "As a reason to change his career", "As valuable information bringing him closer to success"] }
                ]
            },
            {
                title: "第3問 A：長文の内容一致（Eメール）",
                type: "passage",
                passageText: `To: All Employees\nFrom: Human Resources Department\nSubject: Upcoming Office Renovation and Temporary Move\n\nDear Staff,\n\nPlease be advised that our office building will undergo a major renovation starting next month to improve our working environment. The construction work is scheduled to begin on Monday, November 10, and will take approximately three weeks to complete.\n\nDuring this period, all employees on the third floor will temporarily move to the second-floor conference rooms. Please pack your personal belongings and essential work materials into the provided boxes by Friday, November 7. IT staff will assist in moving computers and other equipment over the weekend.\n\nWe apologize for any inconvenience this may cause and appreciate your cooperation.\n\nBest regards,\nHuman Resources Department`,
                questions: [
                    { no: 26, questionText: "(26) Why is the office building undergoing renovation?", answer: 1, options: ["To improve the working environment", "To expand the parking lot", "To sell the building to another company", "To repair damage from a storm"] },
                    { no: 27, questionText: "(27) What must employees on the third floor do by Friday, November 7?", answer: 3, options: ["Submit their project reports", "Clean the conference rooms", "Pack personal belongings and essential materials", "Return their office keys to HR"] },
                    { no: 28, questionText: "(28) What will happen over the weekend?", answer: 2, options: ["Employees will paint the walls.", "IT staff will move computers and equipment.", "The HR department will interview new staff.", "All office doors will be replaced."] }
                ]
            },
            {
                title: "第3問 B：長文の内容一致（記事・案内）",
                type: "passage",
                passageText: `Greenwood Community Library is pleased to announce its annual Book Fair, which will be held from Saturday, December 6, to Sunday, December 14. The fair aims to promote reading among local residents and raise funds for children's literacy programs.\n\nThis year's event will feature over 500 used books covering various genres, including fiction, history, science, and art. All books will be sold at very reasonable prices, ranging from 100 to 500 yen. In addition to book sales, there will be a special story-telling session for children every afternoon at 2:00 p.m. led by local volunteer writers.\n\nDonations of gently used books are currently being accepted at the front desk until November 30. Everyone is welcome to join this exciting community event!`,
                questions: [
                    { no: 29, questionText: "(29) What is one of the main goals of the Book Fair?", answer: 4, options: ["To sell new books published this year", "To hire new library staff members", "To invite famous international authors", "To raise funds for children's literacy programs"] },
                    { no: 30, questionText: "(30) What special activity will take place every afternoon during the fair?", answer: 2, options: ["A writing workshop for adults", "A story-telling session for children", "A music concert by local students", "A quiz competition about history"] },
                    { no: 31, questionText: "(31) Until when is the library accepting book donations?", answer: 1, options: ["November 30", "December 6", "December 14", "January 1"] }
                ]
            }
        ]
    }
};

let flatQuestions = [];
let totalQuestionCount = 0;
let currentIndex = 0;
let userSelections = {}; 
let isCheckedAll = false; 

let currentTool = 'none';
let isDrawing = false;
let ctx = null;
let canvas = null;

function initApp() {
    flatQuestions = [];
    userSelections = {};
    isCheckedAll = false;
    currentIndex = 0;

    const test = readingData["2025-3"];
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