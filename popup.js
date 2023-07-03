document.addEventListener('DOMContentLoaded', function() {
    var noteInput = document.getElementById('note-input');
    var saveButton = document.getElementById('save-button');
    var exportTxtButton = document.getElementById('export-txt-button');
  
    // Load saved note from storage
    chrome.storage.local.get('note', function(result) {
      if (result.note) {
        noteInput.value = result.note;
      }
    });
  
    // Save note to storage
    saveButton.addEventListener('click', function() {
      var note = noteInput.value;
      chrome.storage.local.set({ 'note': note }, function() {
        alert('Note saved!');
      });
    });
  
    // Export note as text file
    exportTxtButton.addEventListener('click', function() {
      var note = noteInput.value;
  
      // Create a Blob object with the note content
      var blob = new Blob([note], { type: 'text/plain' });
  
      // Create a temporary anchor element to trigger the download
      var anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = 'note.txt';
      anchor.click();
  
      // Clean up the URL object
      URL.revokeObjectURL(anchor.href);
  
      alert('Exported as text file!');
    });
  });
  