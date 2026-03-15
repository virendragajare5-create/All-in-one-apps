/**
 * Email Template Generator
 * Provides professional and casual email drafts.
 */
export function renderEmailTemplate() {
  const page = document.createElement('div');
  page.className = 'page-content tool-page';

  const templates = {
    leave: {
      label: 'Sick Leave Request',
      subject: 'Sick Leave Application - [Your Name]',
      body: 'Dear [Manager Name],\n\nI am writing to inform you that I am unable to attend work today due to [reason]. I expect to be back by [date]. I will be available via email for any urgent matters.\n\nBest regards,\n[Your Name]'
    },
    resignation: {
      label: 'Resignation Letter',
      subject: 'Resignation - [Your Name]',
      body: 'Dear [Manager Name],\n\nPlease accept this email as formal notification that I am resigning from my position as [Job Title]. My last day will be [Date]. I am grateful for the opportunities I had here.\n\nSincerely,\n[Your Name]'
    },
    followup: {
      label: 'Interview Follow-up',
      subject: 'Follow-up on Interview for [Job Title]',
      body: 'Dear [Interviewer Name],\n\nThank you for the opportunity to interview for the [Job Title] position yesterday. I enjoyed learning more about the role and am very interested in joining the team.\n\nBest regards,\n[Your Name]'
    },
    casual: {
      label: 'Casual Catch-up',
      subject: 'Catch up soon?',
      body: 'Hey [Friend Name],\n\nIt\'s been a while since we last talked. Are you free this weekend to grab some coffee or lunch? Let me know what works for you!\n\nCheers,\n[Your Name]'
    }
  };

  page.innerHTML = `
    <h2>📧 Email Template Generator</h2>
    <div class="form-group">
      <label>Select Template</label>
      <select id="emailType" class="form-select">
        ${Object.keys(templates).map(k => `<option value="${k}">${templates[k].label}</option>`).join('')}
      </select>
    </div>
    
    <div class="result-box mt-lg">
      <div class="result-label">Subject</div>
      <div id="emailSubject" class="output-area" style="min-height: auto; margin-bottom: 10px; font-weight: bold;"></div>
      <div class="result-label">Body</div>
      <textarea id="emailBody" class="form-textarea" style="min-height: 200px"></textarea>
      <button class="btn btn-sm btn-primary mt-sm" id="copyEmail">📋 Copy Full Email</button>
    </div>
  `;

  const typeSelect = page.querySelector('#emailType');
  const subjectEl = page.querySelector('#emailSubject');
  const bodyEl = page.querySelector('#emailBody');

  const updateTemplate = () => {
    const t = templates[typeSelect.value];
    subjectEl.textContent = t.subject;
    bodyEl.value = t.body;
  };

  typeSelect.onchange = updateTemplate;
  updateTemplate();

  page.querySelector('#copyEmail').onclick = () => {
    const full = `Subject: ${subjectEl.textContent}\n\n${bodyEl.value}`;
    navigator.clipboard.writeText(full);
    import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
  };

  return page;
}
