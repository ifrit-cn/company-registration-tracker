document.addEventListener('DOMContentLoaded', function() {
    renderDocuments();
});

function renderDocuments() {
    const container = document.getElementById('documents-container');
    
    const grouped = registrationData.documents.reduce((acc, doc) => {
        if (!acc[doc.category]) acc[doc.category] = [];
        acc[doc.category].push(doc);
        return acc;
    }, {});
    
    // Status label mapping
    const statusLabels = {
        'not-started': 'Not Started',
        'in-preparation': 'In Preparation',
        'under-review': 'Under Review',
        'approved': 'Approved',
        'completed': 'Completed'
    };
    
    container.innerHTML = Object.entries(grouped).map(([category, docs]) => `
        <div class="document-category">
            <h3>${category}</h3>
            ${docs.map(doc => `
                <div class="document-item">
                    <div>
                        <strong>${doc.name}</strong>
                    </div>
                    <span class="doc-status doc-${doc.status}">${statusLabels[doc.status] || doc.status.toUpperCase()}</span>
                </div>
            `).join('')}
        </div>
    `).join('');
}
