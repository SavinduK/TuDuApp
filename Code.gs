function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index");
}

// Add a task
function addTask(task) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  sheet.appendRow([task]);
  return "Task added";
}

// Get tasks
function getTasks() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const values = sheet.getDataRange().getValues();
  const tasks = [];

  for (let i = 1; i < values.length; i++) {
    tasks.push({
      row: i + 1, // row number for deletion
      title: values[i][0]
    });
  }
  return tasks;
}

// Delete a task
function deleteTask(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  sheet.deleteRow(row);
  return "Task deleted";
}
