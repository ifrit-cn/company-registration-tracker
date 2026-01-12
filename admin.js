const ADMIN_PASSWORD = "yiwu2026"; // Change this password!

function login() {
    const password = document.getElementById('admin-password').value;
    const error = document.getElementById('login-error');
    
    if (password === ADMIN_PASSWORD) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('admin-content').style.display = 'block';
        renderAdminPanel();
    } else {
        error.textContent = 'Incorrect password';
    }
}

function renderAdminPanel() {
    const phaseContainer = document.getElementById('phase-updates');
    const docContainer = document.getElementById('document-updates');
    
    phaseContainer.innerHTML = registrationData.phases.map((phase, idx) => `
        <div style="margin-bottom: 2rem; padding: 1rem; border: 1px solid var(--light-gray); border-radius: 4px;">
            <h3>${phase.name}</h3>
            <label>Status:</label>
            <select id="phase-status-${idx}">
                <option value="not-started" ${phase.status === 'not-started' ? 'selected' : ''}>Not Started</option>
                <option value="in-preparation" ${phase.status === 'in-preparation' ? 'selected' : ''}>In Preparation</option>
                <option value="under-review" ${phase.status === 'under-review' ? 'selected' : ''}>Under Review</option>
                <option value="approved" ${phase.status === 'approved' ? 'selected' : ''}>Approved</option>
                <option value="completed" ${phase.status === 'completed' ? 'selected' : ''}>Completed</option>
            </select>
        </div>
    `).join('');
    
    docContainer.innerHTML = registrationData.documents.map((doc, idx) => `
        <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid var(--light-gray); border-radius: 4px;">
            <strong>${doc.name}</strong><br>
            <label>Status:</label>
            <select id="doc-status-${idx}">
                <option value="not-started" ${doc.status === 'not-started' ? 'selected' : ''}>Not Started</option>
                <option value="in-preparation" ${doc.status === 'in-preparation' ? 'selected' : ''}>In Preparation</option>
                <option value="under-review" ${doc.status === 'under-review' ? 'selected' : ''}>Under Review</option>
                <option value="approved" ${doc.status === 'approved' ? 'selected' : ''}>Approved</option>
                <option value="completed" ${doc.status === 'completed' ? 'selected' : ''}>Completed</option>
            </select>
        </div>
    `).join('');
}

function saveChanges() {
    // Update phases
    registrationData.phases.forEach((phase, idx) => {
        const select = document.getElementById(`phase-status-${idx}`);
        phase.status = select.value;
    });
    
    // Update documents
    registrationData.documents.forEach((doc, idx) => {
        const select = document.getElementById(`doc-status-${idx}`);
        doc.status = select.value;
    });
    
    saveData();
    alert('Changes saved successfully!');
    location.reload();
}
