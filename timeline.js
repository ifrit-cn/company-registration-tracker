document.addEventListener('DOMContentLoaded', function() {
    renderTimeline();
});

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    
    // Status label mapping
    const statusLabels = {
        'not-started': 'Not Started',
        'in-preparation': 'In Preparation',
        'under-review': 'Under Review',
        'approved': 'Approved',
        'completed': 'Completed'
    };
    
    container.innerHTML = registrationData.phases.map(phase => {
        // Format dates or show TBD (UK format: DD/MM/YYYY)
        const startDate = phase.startDate === 'TBD' ? 'TBD' : new Date(phase.startDate).toLocaleDateString('en-GB');
        const endDate = phase.endDate === 'TBD' ? 'TBD' : new Date(phase.endDate).toLocaleDateString('en-GB');
        
        return `
        <div class="timeline-item ${phase.status}">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3>${phase.name} <span class="phase-status status-${phase.status}">${statusLabels[phase.status] || phase.status.toUpperCase()}</span></h3>
                <p><strong>Duration:</strong> ${startDate} - ${endDate}</p>
                <h4>Tasks:</h4>
                <ul>
                    ${phase.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }).join('');
}
