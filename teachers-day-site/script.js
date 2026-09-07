const teachers = {
  "Arpita Mam": [
    "Camera off for more than 5 minutes? Arpita Mam has already started deciding who is getting kicked out. 😭",
    "Punctuality isn't just important to Arpita Mam... it's basically a survival skill.",
    "One serious look from Arpita Mam can bring more discipline than an entire school assembly. 😶",
    "Strict? Yes. Scary? Sometimes. But at least nobody is ever confused about the rules. 😂",
    "Arpita Mam doesn't need a countdown timer. She IS the countdown timer. ⏰",
    "When Arpita Mam enters, even the Wi-Fi starts behaving properly. 💀"
  ],

  "Kuheli Mam": [
    "Kuheli Mam is so sweet that we're starting to think anger was never installed in her system. 🥹",
    "Kuheli Mam asking Amitava Sir something and getting completely ignored is now basically a regular feature of the class. 😭",
    "Nobody has ever seen Kuheli Mam angry. At this point, we're convinced it's just a myth. 👀",
    "That magical 5–10 minutes of every class spent talking about completely different things? Students: PLEASE CONTINUE. 😂",
    "Kuheli Mam asks everyone about the class schedule... and then follows her own schedule. Truly, a visionary. 😭",
    "Some teachers take 5 minutes to start class. Kuheli Mam takes 5–10 minutes and somehow makes us wish she'd take 20. ❤️"
  ],

  "Sayan Sir": [
    "Sayan Sir is so polite that even when asking for attendance, it feels like he is requesting a personal favour. 😂",
    "One screenshot wasn't enough. Two screenshots weren't enough. Eventually Sayan Sir had to call us out personally. 😭",
    "Two hours without a break? Sayan Sir apparently believes human beings run on Excel formulas. 💀",
    "The moment Sayan Sir says, 'Please share your screen,' suddenly everyone's laptop develops a mysterious problem. 😂",
    "Nobody wants to present their screen, but everyone suddenly becomes an expert at pretending their microphone isn't working. 😭",
    "Sayan Sir, on behalf of the entire class: AFTER TWO HOURS OF EXCEL... PLEASE GIVE US A BREAK. 🥲"
  ],

  "Amitava Sir": [
    "Amitava Sir waits for absolutely no one. Missed one step? Congratulations, you're now three topics behind. 😭",
    "Sir teaches so fast that our brains need a loading screen just to understand the first line. 💻💀",
    "Once every day, Agomoni gets a special mention for having such a memorable name. At this point, it's part of the syllabus. 😂",
    "The moment Amitava Sir starts teaching Python, half the class starts learning the ancient art of sleeping with their eyes open. 😴",
    "Sir gets more excited about a screen recording than most people get about weekend plans. 😂",
    "Amitava Sir doesn't slow down for anyone. Python runs fast, and apparently so does the teacher. 🐍⚡"
  ],

  "Sutanuka Mam": [
    "Sutunuka Mam is so cute that half the class forgets they're supposed to be learning. 🥹",
    "The students' favourite part of soft skills class? The BREAK. We are nothing if not honest. 😂",
    "Soft Skills class starts normally and somehow turns into Storytelling Hour. And honestly... we love it. ❤️",
    "The fun games are the only time everyone suddenly becomes extremely active and competitive. 😂",
    "Mam taught us communication skills, but somehow we learned an entire collection of stories instead. 😭",
    "Last but definitely not least... describing the workplace as a ZOO was honestly the most accurate career advice we've received. 🦁🐒💀"
  ]
};

// Replace the five teacher names and the messages above with your real entries.

const select = document.getElementById('teacherSelect');
const revealBtn = document.getElementById('revealBtn');
const againBtn = document.getElementById('againBtn');
const stage = document.getElementById('messageStage');
const video = document.getElementById('teacherVideo');
const placeholder = document.getElementById('videoPlaceholder');

Object.keys(teachers).forEach(name => {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name;
  select.appendChild(option);
});

let activeTeacher = '';
let remaining = [];
let round = 0;

function renderMessage() {
  if (!activeTeacher) return;
  if (remaining.length === 0) {
    remaining = [...teachers[activeTeacher]];
    round += 1;
  }

  const randomIndex = Math.floor(Math.random() * remaining.length);
  const message = remaining.splice(randomIndex, 1)[0];
  const total = teachers[activeTeacher].length;
  const shown = total - remaining.length;

  stage.innerHTML = `
    <article class="message-card">
      <div class="badge">Hidden fact #${shown}</div>
      <blockquote>“${message}”</blockquote>
      <div class="dots" aria-hidden="true">
        ${Array.from({length: total}, (_, i) => `<span class="${i < shown ? 'active' : ''}"></span>`).join('')}
      </div>
    </article>
  `;
  againBtn.classList.remove('hidden');
}

revealBtn.addEventListener('click', () => {
  const chosen = select.value;
  if (!chosen) {
    select.focus();
    stage.innerHTML = `<div class="message-card"><div class="badge">One tiny step</div><blockquote>Please select your name first 👀</blockquote></div>`;
    againBtn.classList.add('hidden');
    return;
  }

  if (chosen !== activeTeacher) {
    activeTeacher = chosen;
    remaining = [];
  }
  renderMessage();
  stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

againBtn.addEventListener('click', renderMessage);

video.addEventListener('loadeddata', () => placeholder.classList.add('hidden'));
video.addEventListener('error', () => placeholder.classList.remove('hidden'));
