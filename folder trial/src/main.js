/**
 * Entry point for Life Admin
 * Initializes router and registers all tool views.
 */
import './styles/index.css';
import { initRouter, registerRoute } from './router.js';
import { createHeader } from './components/header.js';
import { renderDashboard } from './components/dashboard.js';
import { renderCategory } from './components/category.js';

// Calculator Tools
import { renderDiscount } from './tools/calculator/discount.js';
import { renderEMI } from './tools/calculator/emi.js';
import { renderTipSplitter } from './tools/calculator/tip-splitter.js';
import { renderProfitLoss } from './tools/calculator/profit-loss.js';
import { renderAgeCalculator } from './tools/calculator/age.js';
import { renderGSTCalculator } from './tools/calculator/gst.js';
import { renderPercentageCalculator } from './tools/calculator/percentage.js';
import { renderBMICalculator } from './tools/calculator/bmi.js';
import { renderFuelCalculator } from './tools/calculator/fuel.js';
import { renderTimeDiffCalculator } from './tools/calculator/time-diff.js';
import { renderSalaryCalculator } from './tools/calculator/salary.js';
import { renderSavingsCalculator } from './tools/calculator/savings.js';
import { renderSpeedCalculator } from './tools/calculator/speed.js';
import { renderDateDiffCalculator } from './tools/calculator/date-diff.js';
import { renderLoanCalculator } from './tools/calculator/loan.js';

// Text Tools
import { renderSummarizer } from './tools/text/summarizer.js';
import { renderCaption } from './tools/text/caption.js';
import { renderBio } from './tools/text/bio.js';
import { renderWordCounter } from './tools/text/word-counter.js';
import { renderCaseConverter } from './tools/text/case-converter.js';
import { renderDuplicatesRemover } from './tools/text/duplicates.js';
import { renderTextReverser } from './tools/text/reverser.js';
import { renderHashtagGenerator } from './tools/text/hashtag.js';
import { renderRandomSentence } from './tools/text/random-sentence.js';
import { renderTextFormatter } from './tools/text/formatter.js';
import { renderUsernameGenerator } from './tools/text/username.js';
import { renderEmailTemplate } from './tools/text/email.js';
import { renderFancyText } from './tools/text/fancy-text.js';
import { renderCharRemover } from './tools/text/char-remover.js';

// File Tools
import { renderImageToPdf } from './tools/file/image-to-pdf.js';
import { renderPdfToImages } from './tools/file/pdf-to-images.js';
import { renderImageCompressor } from './tools/file/image-compressor.js';
import { renderImageResizer } from './tools/file/image-resizer.js';
import { renderImageCropper } from './tools/file/image-cropper.js';
import { renderImageConverter } from './tools/file/image-converter.js';
import { renderPdfMerger } from './tools/file/pdf-merger.js';
import { renderPdfSplitter } from './tools/file/pdf-splitter.js';
import { renderExifViewer } from './tools/file/exif.js';

// Study Tools
import { renderPomodoro } from './tools/study/pomodoro.js';
import { renderNotes } from './tools/study/notes.js';
import { renderFlashcards } from './tools/study/flashcards.js';
import { renderStudyTracker } from './tools/study/study-tracker.js';
import { renderHabitTracker } from './tools/study/habit-tracker.js';
import { renderQuizGenerator } from './tools/study/quiz.js';
import { renderExamTimer } from './tools/study/exam-timer.js';
import { renderStudyChecklist } from './tools/study/checklist.js';
import { renderDailyGoal } from './tools/study/daily-goal.js';

// Daily Tools
import { renderUnitConverter } from './tools/daily/unit-converter.js';
import { renderQRGenerator } from './tools/daily/qr-generator.js';
import { renderPasswordGenerator } from './tools/daily/password-generator.js';
import { renderRandomPicker } from './tools/daily/random-picker.js';
import { renderStopwatch } from './tools/daily/stopwatch.js';
import { renderCountdownTimer } from './tools/daily/timer.js';
import { renderDecisionWheel } from './tools/daily/wheel.js';
import { renderDiceRoller } from './tools/daily/dice.js';
import { renderRandomNum } from './tools/daily/random-num.js';
import { renderYesNoPicker } from './tools/daily/yes-no.js';
import { renderCoinFlip } from './tools/daily/coin-flip.js';
import { renderColorPicker } from './tools/daily/color-picker.js';
import { renderBrightnessBooster } from './tools/daily/brightness.js';
import { renderSoundMeter } from './tools/daily/sound-meter.js';
import { renderStrobeLight } from './tools/daily/strobe.js';

// Health Tools
import { renderWaterTracker } from './tools/health/water-tracker.js';
import { renderStepGoal } from './tools/health/step-goal.js';
import { renderCalories } from './tools/health/calories.js';
import { renderBodyFat } from './tools/health/body-fat.js';
import { renderIdealWeight } from './tools/health/ideal-weight.js';
import { renderWorkoutTimer } from './tools/health/workout-timer.js';

function initApp() {
  const appContainer = document.querySelector('#app');

  // Add header
  appContainer.appendChild(createHeader());

  // Create main content area
  const mainContent = document.createElement('main');
  mainContent.id = 'main-content';
  appContainer.appendChild(mainContent);

  // Register Routes
  registerRoute('/', renderDashboard);

  // Categories
  ['calculator', 'text', 'file', 'study', 'daily', 'health'].forEach(cat => {
    registerRoute(`/category/${cat}`, () => renderCategory(cat));
  });

  // Initialize Ads
  import('./utils/ads.js').then(({ Ads }) => Ads.initBanner());

  // Tools - Calculator
  registerRoute('/tool/discount', renderDiscount);
  registerRoute('/tool/emi', renderEMI);
  registerRoute('/tool/tip-splitter', renderTipSplitter);
  registerRoute('/tool/profit-loss', renderProfitLoss);
  registerRoute('/tool/age', renderAgeCalculator);
  registerRoute('/tool/gst', renderGSTCalculator);
  registerRoute('/tool/percentage', renderPercentageCalculator);
  registerRoute('/tool/bmi', renderBMICalculator);
  registerRoute('/tool/fuel', renderFuelCalculator);
  registerRoute('/tool/time-diff', renderTimeDiffCalculator);
  registerRoute('/tool/salary', renderSalaryCalculator);
  registerRoute('/tool/savings', renderSavingsCalculator);
  registerRoute('/tool/speed', renderSpeedCalculator);
  registerRoute('/tool/date-diff', renderDateDiffCalculator);
  registerRoute('/tool/loan', renderLoanCalculator);

  // Tools - Text
  registerRoute('/tool/summarizer', renderSummarizer);
  registerRoute('/tool/caption', renderCaption);
  registerRoute('/tool/bio', renderBio);
  registerRoute('/tool/word-counter', renderWordCounter);
  registerRoute('/tool/case-converter', renderCaseConverter);
  registerRoute('/tool/duplicates', renderDuplicatesRemover);
  registerRoute('/tool/reverser', renderTextReverser);
  registerRoute('/tool/hashtag', renderHashtagGenerator);
  registerRoute('/tool/random-sentence', renderRandomSentence);
  registerRoute('/tool/formatter', renderTextFormatter);
  registerRoute('/tool/username', renderUsernameGenerator);
  registerRoute('/tool/email', renderEmailTemplate);
  registerRoute('/tool/fancy-text', renderFancyText);
  registerRoute('/tool/char-remover', renderCharRemover);

  // Tools - File
  registerRoute('/tool/image-to-pdf', renderImageToPdf);
  registerRoute('/tool/pdf-to-images', renderPdfToImages);
  registerRoute('/tool/image-compressor', renderImageCompressor);
  registerRoute('/tool/image-resizer', renderImageResizer);
  registerRoute('/tool/image-cropper', renderImageCropper);
  registerRoute('/tool/image-converter', renderImageConverter);
  registerRoute('/tool/pdf-merger', renderPdfMerger);
  registerRoute('/tool/pdf-splitter', renderPdfSplitter);
  registerRoute('/tool/exif', renderExifViewer);

  // Tools - Study
  registerRoute('/tool/pomodoro', renderPomodoro);
  registerRoute('/tool/notes', renderNotes);
  registerRoute('/tool/flashcards', renderFlashcards);
  registerRoute('/tool/study-tracker', renderStudyTracker);
  registerRoute('/tool/habit-tracker', renderHabitTracker);
  registerRoute('/tool/quiz', renderQuizGenerator);
  registerRoute('/tool/exam-timer', renderExamTimer);
  registerRoute('/tool/study-checklist', renderStudyChecklist);
  registerRoute('/tool/daily-goal', renderDailyGoal);

  // Tools - Daily
  registerRoute('/tool/unit-converter', renderUnitConverter);
  registerRoute('/tool/qr-generator', renderQRGenerator);
  registerRoute('/tool/password', renderPasswordGenerator);
  registerRoute('/tool/random-picker', renderRandomPicker);
  registerRoute('/tool/stopwatch', renderStopwatch);
  registerRoute('/tool/timer', renderCountdownTimer);
  registerRoute('/tool/wheel', renderDecisionWheel);
  registerRoute('/tool/dice', renderDiceRoller);
  registerRoute('/tool/random-num', renderRandomNum);
  registerRoute('/tool/yes-no', renderYesNoPicker);
  registerRoute('/tool/coin-flip', renderCoinFlip);
  registerRoute('/tool/color-picker', renderColorPicker);
  registerRoute('/tool/brightness', renderBrightnessBooster);
  registerRoute('/tool/sound-meter', renderSoundMeter);
  registerRoute('/tool/strobe', renderStrobeLight);

  // Tools - Health
  registerRoute('/tool/water-tracker', renderWaterTracker);
  registerRoute('/tool/step-goal', renderStepGoal);
  registerRoute('/tool/calories', renderCalories);
  registerRoute('/tool/body-fat', renderBodyFat);
  registerRoute('/tool/ideal-weight', renderIdealWeight);
  registerRoute('/tool/workout-timer', renderWorkoutTimer);

  // Start Router
  initRouter('#main-content');
}

// Bootstrap
document.addEventListener('DOMContentLoaded', initApp);
