document.addEventListener('DOMContentLoaded', function() {
    updateOverallProgress();
    updateStatusSummary();
});

function updateOverallProgress() {
    const progress = calculateProgress();
    const progressRing = document.getElementById('progress-ring');
    const progressText = document.getElementById('overall-progress');
    const currentPhaseEl = document.getElementById('current-phase');
    const expectedDateEl = document.getElementById('expected-date');
    
    // Animate progress ring
    const circumference = 283;
    const offset = circumference - (progress / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
    
    progressText.textContent = progress + '%';
    
    const currentPhase = getCurrentPhase();
    if (currentPhase) {
        currentPhaseEl.textContent = currentPhase.name;
        // Handle TBD dates (UK format: DD/MM/YYYY)
        expectedDateEl.textContent = currentPhase.endDate === 'TBD' ? 'TBD' : new Date(currentPhase.endDate).toLocaleDateString('en-GB');
    }
}

function updateStatusSummary() {
    const container = document.getElementById('status-summary');
    const completed = registrationData.phases.filter(p => p.status === 'completed').length;
    const inProgress = registrationData.phases.filter(p => p.status === 'in-preparation' || p.status === 'under-review').length;
    const approved = registrationData.phases.filter(p => p.status === 'approved').length;
    const notStarted = registrationData.phases.filter(p => p.status === 'not-started').length;
    const docsSubmitted = registrationData.documents.filter(d => d.status === 'completed').length;
    
    container.innerHTML = `
        <div class="info-card">
            <h3>✅ Completed Phases</h3>
            <p style="font-size: 2rem; font-weight: bold; color: var(--success);">${completed}</p>
        </div>
        <div class="info-card">
            <h3>⚙️ In Progress</h3>
            <p style="font-size: 2rem; font-weight: bold; color: var(--warning);">${inProgress}</p>
        </div>
        <div class="info-card">
            <h3>📋 Not Started</h3>
            <p style="font-size: 2rem; font-weight: bold; color: var(--gray);">${notStarted}</p>
        </div>
        <div class="info-card">
            <h3>📄 Documents Completed</h3>
            <p style="font-size: 2rem; font-weight: bold; color: var(--primary);">${docsSubmitted}/${registrationData.documents.length}</p>
        </div>
    `;
}
