function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Hunter.io')
    .addItem('Entrer les identifiants API', 'showApiCredentialsDialog')
    .addItem('Trouver des emails', 'findEmailsInSheet')
    .addToUi();
}

function showApiCredentialsDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('ApiCredentials')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Entrer les identifiants API Hunter.io');
}

function saveApiKey(apiKey) {
  PropertiesService.getUserProperties().setProperty('HUNTER_API_KEY', apiKey);
}

function findEmail(firstName, lastName, companyDomain) {
  var apiKey = PropertiesService.getUserProperties().getProperty('HUNTER_API_KEY');
  if (!apiKey) {
    return 'Clé API non définie';
  }

  var url = 'https://api.hunter.io/v2/email-finder?domain=' + companyDomain +
            '&first_name=' + firstName +
            '&last_name=' + lastName +
            '&api_key=' + apiKey;

  try {
    var response = UrlFetchApp.fetch(url);
    var result = JSON.parse(response.getContentText());

    if (result.data && result.data.email) {
      return result.data.email;
    } else if (result.errors && result.errors.length > 0) {
      return 'Erreur : ' + result.errors[0].details;
    } else {
      return 'Email non trouvé';
    }
  } catch (e) {
    return 'Erreur : ' + e.message;
  }
}

function FindEmail(firstName, lastName, companyDomain) {
  return findEmail(firstName, lastName, companyDomain);
}

function findEmailsInSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();

  for (var i = 1; i < values.length; i++) {  // Skip header row
    var firstName = values[i][0];
    var lastName = values[i][1];
    var companyDomain = values[i][2];
    
    if (firstName && lastName && companyDomain) {
      var email = findEmail(firstName, lastName, companyDomain);
      sheet.getRange(i + 1, 4).setValue(email);  // Write email to the 4th column
    }
  }
}
