// Basic JavaScript functionality for form submission and dynamic sections

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // For simplicity, assume a valid login
  if (username && password) {
      alert('Login successful!');
      window.location.href = '#medical-records'; // Redirect to Medical Records section
  } else {
      alert('Please enter a valid username and password');
  }
});

// Handle Medical Records upload button
document.getElementById('upload-record').addEventListener('click', function() {
  const recordsList = document.getElementById('records-list');
  const newRecord = document.createElement('div');
  newRecord.innerText = 'New Record (e.g., prescription, test results)';
  newRecord.classList.add('record');
  recordsList.appendChild(newRecord);
});

// Generate QR Code for Emergency Access
document.getElementById('qr-code').addEventListener('click', function() {
  const qrContainer = document.getElementById('qr-code-container');
  const qrCode = document.createElement('img');
  qrCode.src = 'https://via.placeholder.com/150'; // Placeholder for QR code
  qrContainer.innerHTML = ''; // Clear previous QR code
  qrContainer.appendChild(qrCode);
});

// AI Health Insights (mock functionality)
document.getElementById('ai-insights').addEventListener('click', function() {
  const aiResults = document.getElementById('ai-results');
  aiResults.innerHTML = '<p>Suggested improvements: Stay active, reduce sugar intake, etc.</p>';
});

// Wearable Device Sync
document.getElementById('sync-wearables').addEventListener('click', function() {
  const wearableData = document.getElementById('wearable-data');
  wearableData.innerHTML = '<p>Syncing your device data...</p>';
});
