class Controller {
  constructor() {
    this.init();
  }

  init() {
    this.addConvertListener();
    this.addSaveListener();
    this.addUploadListener();
  }

  addConvertListener() {
    var jsonSubmit = select('JSONsubmit');
    jsonSubmit.addEventListener('click', () => app.submitHandler());
  }

  addSaveListener() {
    var saveButton = select('CSVsave');
    saveButton.addEventListener('click', () => app.saveHandler());
  }

  addUploadListener() {
    var uploadButton = select('JSONfileButton');
    uploadButton.addEventListener('click', () => app.uploadHandler());
  }
}