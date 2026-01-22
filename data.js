const registrationData = {
    company: {
        name: "Ifrit International Logistics Co., Ltd.",
        location: "Yiwu City, Zhejiang Province, China",
        startDate: "2026-01-7",
        expectedCompletion: "2025-04-30"
    },
    
    phases: [
        {
            id: 1,
            name: "Initial Documentation",
            status: "under review",
            startDate: "2026-01-7",
            endDate: "TBD",
            tasks: [
                "Office Lease",
                "Company name pre-approval",
                "Prepare articles of association",
                "Shareholder documentation",
                "Business scope definition"
            ]
        },
        {
            id: 2,
            name: "Legal Entity Establishment",
            status: "not-started",
            startDate: "TBD",
            endDate: "TBD",
            tasks: [
                "Submit registration application",
                "Business license application",
                "Company seal registration",
                "Tax registration"
            ]
        },
        {
            id: 3,
            name: "Banking & Capital",
            status: "not-started",
            startDate: "TBD",
            endDate: "TBD",
            tasks: [
                "Open company bank account",
                "Capital verification",
                "Foreign exchange registration"
            ]
        },
        {
            id: 4,
            name: "Customs & Import/Export",
            status: "not-started",
            startDate: "TBD",
            endDate: "TBD",
            tasks: [
                "Customs registration",
                "Import/export license",
                "Other permits as needed"
            ]
        },
        {
            id: 5,
            name: "Final Compliance",
            status: "not-started",
            startDate: "TBD",
            endDate: "TBD",
            tasks: [
                "Social security registration",
                "Final compliance check",
                "Operational readiness"
            ]
        }
    ],
    
    documents: [
        { name: "Passport copies", status: "in-preparation", category: "Identity" },
        { name: "Company name", status: "under-review", category: "Registration" },
        { name: "Articles of Association", status: "not-started", category: "Registration" },
        { name: "Business scope approval document", status: "in-preparation", category: "Registration" },
        { name: "Lease agreement for office", status: "completed", category: "Property" },
        { name: "Business license application", status: "in-preparation", category: "Registration" },
        { name: "Bank Account Opening", status: "not-started", category: "Banking" },
        { name: "Tax registration forms", status: "not-started", category: "Tax" },
        { name: "Customs registration docs", status: "not-started", category: "Customs" },
        { name: "Business Licenses & Permits", status: "not-started", category: "Operations" }
    ]
};

// Save data to localStorage
function saveData() {
    localStorage.setItem('registrationData', JSON.stringify(registrationData));
}

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('registrationData');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(registrationData, parsed);
    }
}

// Calculate overall progress
function calculateProgress() {
    const total = registrationData.phases.length;
    const completed = registrationData.phases.filter(p => p.status === 'completed').length;
    const approved = registrationData.phases.filter(p => p.status === 'approved').length;
    const underReview = registrationData.phases.filter(p => p.status === 'under-review').length;
    const inPreparation = registrationData.phases.filter(p => p.status === 'in-preparation').length;
    
    // Weighted progress: completed=100%, approved=85%, under-review=60%, in-preparation=30%, not-started=0%
    return Math.round(((completed * 1.0 + approved * 0.85 + underReview * 0.6 + inPreparation * 0.3) / total) * 100);
}

// Get current phase
function getCurrentPhase() {
    return registrationData.phases.find(p => p.status === 'in-preparation') ||
           registrationData.phases.find(p => p.status === 'under-review') ||
           registrationData.phases.find(p => p.status === 'approved') ||
           registrationData.phases.find(p => p.status === 'not-started');
}

loadData();



```


"not-started"      // Haven't begun yet
"in-preparation"   // Actively preparing
"under-review"     // Submitted, awaiting approval
"approved"         // Approved but not finalized
"completed"        // Fully done

```
