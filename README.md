# IntegrationTestingWithCypress.io
This repository contains the code to test react leaf carousel using cypress.io 


## Prerequisites
[Node](https://nodejs.org/en/download/)  
Cypress  
An IDE or Terminal  
Chrome Browser

## Project Structure 
> All .js files *such as* `careousel.js`, `App.js`, `index.js` are in **src** folder  
> All public files and resources are in **public** folder with carousel images inside `pubilc/images` folder  
> All test related files are recommended to be in **cypress** folder as per the official documentation, unlike react test library where `.test` file should in a folder with its `.js` file  

## Prject Configuration
The baseURL is set to **"http://localhost:3000"** in `cypress.json`. Make sure port is open to listen. 


## Build Prject

1. Clone Repository
``` sh
$ git clone https://github.com/Iiqra/IntegrationTestingWithCypress.io
```
2. Build Project

``` sh
$ npm install
$ npm run build 
```
3. Open & run Cypress runner for Scripts execution 
``` sh
$ node_modules/.bin/cypress open
$ npm run cypress
```
4. Run Tests  
After step3, the Cypress runner will launch and you can run `.spec.js` test files from the Cypress launched interface

![cypress interface](deliverables/images/CypressUI.png?raw=true)

5. Result
Here is the test execution results of test cases 
![results](deliverables/images/PassedTestcases.png?raw=true)




