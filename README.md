# End-to-End JavaScript Testing with Cypress.io
This is the repository of what I learned from **Linkedin Learning**
Tutorial By Shaun Wassell


```npm init -y ``` #Will create an npm package. > package.json

```npm install --save-dev cypress``` install cypress (takes time to install)

```npx cypress open ``` open cypress interface > a lot of example test files


### Add Test
1. Create `*.spec.js` inside the `cypress > integration` folder.
2. run ```npx cypress open ``` open
3. one cypress-docs, go to `\Exercise Files\target-app` and run cmd
    3.1 `npm run start` // run the application that will be used as the sample
    3.2 If (3.1) got an error, try `rm -rf node_modules && npm install` and type 3.1 command again.

4.
    1.  `/// <reference types="Cypress"/>` Add this command to activate the auto completion for cypress; This is per file basis

    2. Add auto completion for project basis
```
{
    "include":[
        "./node_modules/cypress",
        "cypress/**/*.js"
    ]
}
```



### Syntax 
cy.*

` beforeEach(()=> {code-here});` declared before the test cases. function as the global variables
`.eq(index-number-here)` add to get the element if duplicate // not a good way but this is the syntax

`.contains(text-display-on-ui)` Add to get the text display 

`.as(alias-name)` command to reduce code repetition, like a variable holder . need to add '@' sign when using

`.trigger(hover-event, can-pass-x-&-y-here)` commonly used on hover or mousedown, or mouseover

`debugger;` pause the test scripts, should be inside the then clause, should have the dev tools open on browser

```
# syntex1 Debug the code
.then(()=> {
            debugger;
        });

# syntax2 
.debug()
```
`.wrap()` // for consistency; can be use for syntax like jquery --> cy.wrap($element).should(..)

`.and` //cypress extra; multiple assertion --> cy.get('h1').should(..).and(..);
`.filter and .not` //cypress extra;  
--> cy.get('h1').filter(..)
--> cy.get('h1').not(..)

### Note
File names inside integration folder are numbered base on the sequence it shown on the tutorial 

**data-cy** // attributes prefer to use in Cypress test, this does not connect to anything like styling of the app.
**baseUrl** //( cypress.json )should be correctly spelled with U as capitalize. I got an error here before using URL instead of Url.

**automatice retrying** //Cypress will automatically retry test until they pass. It won't retry .click() or .type() because it actually intereacts the app and it will break the test if executed more than once.

**environment variable** //cypress.env.json --> automatically detect this file and load the environment variable. Be sure to add on .gitignore so it wont be on the git repo

**test doubles**
```
cy.stub()
cy.spy()
```

**Common Assertions**
```
.should('have.length', 4)
.should('exist') #existence
.should('not.exist') #existence
.should('be.visible') #visibility
.should('not.be.visible') #visibility

// Although not recommended to use CSS
.should('have.class', 'list-item-selected') #checking css classes
.should('have.css', 'background-color', 'blue') ##checking css classes and styles

//Checking text content
.invoke('text-here') //check the text 
.should('contain') //incase its span or other elements
.should('not.contain') //incase its span or other elements
```
