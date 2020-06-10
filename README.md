
# NgxAlerts

## ToDo
* Create a library project and publish on npm.
* Add form fields with validations in confirm box dialogs.

## Dependencies
* (`npm i @angular/animations@7.x.x --save`) @angular/animations version matching projects angular version. If project is running on angular 7.3.3, use angular animation version 7.x.x.
* (`npm i angular-animations --save`)  [https://github.com/filipows/angular-animations](https://github.com/filipows/angular-animations). We may want to fork this repository in case its not maintained and taken down in future.

## Getting Started
### Untill this is published as npm library:
1. Download & extract OR clone the repository.
2. `cd dd-ngx-alerts/src/app` and copy the `alert-service` folder into your project's services folder.
3. In your module file, add `alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component` to declarations and entryComponents.
4. Add `alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component` as well in declarations and entryComponents.
5. Add `alert-service/alert-service.service` in providers.

## Usage 
Import service and the config interfaces:
``` 
import {
	AlertServiceService,
	ToasterConfig, 
	ConfirmConfig, 
	ConfirmButtonConfig
} from './alert-service/alert-service.service';
```
Inject the service in your component's constructor `private  alertService: AlertServiceService`



### Toaster Config
Available config options: 
``` 
let toasterConfig: ToasterConfig = {
	title: 'Toaster',
	titleSize: 16,
	message: 'This is a sample toaster!',
	messageSize: 14,
	duration: 5000,
	horizontalPosition: 'right',
	verticlePosition: 'top',
	width: 0,
	backgroundColor: 'white',
	textColor: '',
	matIcon: '',
	iconColor: '',
	showProgressBar: true,
	progressBarColor: undefined,
	progressBarType: undefined,
	pauseProgressBarOnHover: true,
	closeOnClick: true,
	showCloseButton: true,
	closeButtonColor: undefined,
	showActionButton: false,
	actionButtonText: '',
	actionButtonColor: undefined
}
```
*Note: Only Title is compulsory, rest configs are optional.*
 
### basic usage of toaster:

```
let toasterRef = this.alertService.toaster(this.toasterConfig);

toasterRef.afterDismissed().subscribe(() => {
	console.log('The toaster was dismissed!');
});

toasterRef.onAction().subscribe(() => {
	console.log('Toaster action button was clicked!');
});
```

### Confirm Box Config
Available config options: 
``` 
confirmConfig: ConfirmConfig = {
	title: 'Are You Sure?',
	titleSize: 28,
	message: 'This action cannot be reversed!',
	messageSize: 16,
	matIcon: 'access_alarm',
	iconAnimation: 'shake',
	iconColor: '',
	buttons: [],
	disableClose: true,
	autoFocus: true,
	restoreFocus: true,
	width: undefined
}

buttonArr: Array < ConfirmButtonConfig > = [{
	id: 'default',
	text: 'OK',
	color: 'primary',
	type: 'basic',
	icon: ''
}]
```
*Note: Only Title is compulsory, rest configs are optional.*

### Basic Usage of Confirm Alerts
```
//Assign buttons in the confirmConfig
this.confirmConfig.buttons = this.buttonArr;

const dialogueRef = this.alertService.confirm(this.confirmConfig);

dialogueRef.afterClosed().subscribe(confirmResult => {
	//confirmResult contains the id of the button clicked
	console.log(confirmResult)
});
```


### Quick Usage Example
*Both Confirm Alerts and Toasters can be given small config objects inline and events like  afterDismissed, onAction, afterClosed can be left unhandled if no action is needed  after toaster or confirm alert is closed by user action.*
```
this.alertService.toaster({
	title:  "Success!",
	message:  "Boost Setting Updated.",
	matIcon:  "done_outline",
	iconColor:  'teal',
	showProgressBar:  true,
	progressBarColor:  'accent',
	duration:  5000,
	pauseProgressBarOnHover:  true
})
```
