/**
 * Random Quiz Generator
 * Allows users to create their own quizzes and take them.
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderQuizGenerator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let quizzes = loadData('study_quizzes', []);
    let currentQuiz = null;
    let qIdx = 0;
    let score = 0;

    const startQuiz = (quiz) => {
        currentQuiz = quiz;
        qIdx = 0;
        score = 0;
        renderQuestion();
    };

    const renderQuestion = () => {
        const q = currentQuiz.questions[qIdx];
        page.innerHTML = `
      <h2>📝 Quiz: ${currentQuiz.name}</h2>
      <div class="result-box mb-lg">
        <div class="result-label">Question ${qIdx + 1} of ${currentQuiz.questions.length}</div>
        <div class="result-value" style="font-size: 1.25rem">${q.question}</div>
      </div>
      
      <div class="tools-list">
        ${q.options.map((opt, i) => `
          <button class="btn btn-secondary mb-sm text-left quiz-opt" data-idx="${i}">
            ${String.fromCharCode(65 + i)}. ${opt}
          </button>
        `).join('')}
      </div>
    `;

        page.querySelectorAll('.quiz-opt').forEach(btn => {
            btn.onclick = () => {
                const choice = parseInt(btn.dataset.idx);
                if (choice === q.correct) {
                    score++;
                    showToast('Correct! 🎓');
                } else {
                    showToast(`Wrong! Correct was: ${q.options[q.correct]}`);
                }

                qIdx++;
                if (qIdx < currentQuiz.questions.length) {
                    renderQuestion();
                } else {
                    renderResults();
                }
            };
        });
    };

    const renderResults = () => {
        page.innerHTML = `
      <h2>Quiz Complete!</h2>
      <div class="result-box text-center">
        <div class="result-label">Your Score</div>
        <div class="result-value">${score} / ${currentQuiz.questions.length}</div>
        <div class="result-detail">${(score / currentQuiz.questions.length * 100).toFixed(0)}% accuracy</div>
      </div>
      <button class="btn btn-primary mt-xl" id="backToQuizzes">Back to Quizzes</button>
    `;
        page.querySelector('#backToQuizzes').onclick = renderMain;
    };

    const renderMain = () => {
        page.innerHTML = `
      <h2>📝 Random Quiz Generator</h2>
      
      <div id="quizList" class="tools-list mb-xl">
        ${quizzes.length === 0 ? '<p class="text-center text-muted">No quizzes created yet.</p>' :
                quizzes.map((q, i) => `
            <div class="tool-card play-quiz" data-idx="${i}">
              <div class="tool-icon">▶️</div>
              <div class="tool-info">
                <div class="tool-name">${q.name}</div>
                <div class="tool-desc">${q.questions.length} questions</div>
              </div>
            </div>
          `).join('')}
      </div>

      <div class="note-card">
        <div class="note-title">Create New Quiz</div>
        <p class="text-xs text-muted mb-sm">Add questions one by one below.</p>
        <div class="form-group">
          <label>Quiz Name</label>
          <input type="text" id="newQuizName" class="form-input" placeholder="e.g. Science Basics">
        </div>
        <button class="btn btn-success" id="startCreate">➕ New Quiz</button>
      </div>
    `;

        page.querySelectorAll('.play-quiz').forEach(btn => {
            btn.onclick = () => startQuiz(quizzes[btn.dataset.idx]);
        });

        page.querySelector('#startCreate').onclick = renderCreator;
    };

    const renderCreator = () => {
        const qName = page.querySelector('#newQuizName').value.trim() || 'Untitled Quiz';
        let tempQuestions = [];

        const updateCreatorUI = () => {
            page.innerHTML = `
        <h2>Creating: ${qName}</h2>
        <p class="text-sm mb-md">Added ${tempQuestions.length} questions so far.</p>
        
        <div class="note-card">
          <div class="form-group">
            <label>Question</label>
            <input type="text" id="q_text" class="form-input">
          </div>
          <div class="form-group">
            <label>Option A (Correct One)</label>
            <input type="text" id="q_opt0" class="form-input">
          </div>
          <div class="form-group">
            <label>Option B</label>
            <input type="text" id="q_opt1" class="form-input">
          </div>
          <button class="btn btn-success" id="addQuestion">➕ Add Question</button>
        </div>

        <div class="btn-row mt-xl">
          <button class="btn btn-primary" id="saveQuiz">💾 Finish & Save</button>
          <button class="btn btn-secondary" id="cancelQuiz">Cancel</button>
        </div>
      `;

            page.querySelector('#addQuestion').onclick = () => {
                const text = page.querySelector('#q_text').value.trim();
                const o0 = page.querySelector('#q_opt0').value.trim();
                const o1 = page.querySelector('#q_opt1').value.trim();

                if (!text || !o0 || !o1) return;

                tempQuestions.push({
                    question: text,
                    options: [o0, o1],
                    correct: 0 // Simplification: First option is always correct choice during creation, we'll shuffle later? No, keep it simple.
                });

                // Shuffle options for real use
                const last = tempQuestions[tempQuestions.length - 1];
                if (Math.random() > 0.5) {
                    [last.options[0], last.options[1]] = [last.options[1], last.options[0]];
                    last.correct = 1;
                }

                updateCreatorUI();
            };

            page.querySelector('#saveQuiz').onclick = () => {
                if (tempQuestions.length === 0) return;
                quizzes.push({ name: qName, questions: tempQuestions });
                saveData('study_quizzes', quizzes);
                showToast('Quiz saved!');
                renderMain();
            };

            page.querySelector('#cancelQuiz').onclick = renderMain;
        };

        updateCreatorUI();
    };

    renderMain();
    return page;
}
