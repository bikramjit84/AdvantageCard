
# Assumption:
1. When user wants to pay, it lauches "http://localhost:4200/login" the login screen of the bank via okta
2. Internalization is implemented using  "ngx-translate" npm module. 
 
# Flow:
1. User enter credetial as "user1" / "password"
2. T list of bank card informations is displayed
  The card detail of the user is stored in a file "src\assets\cardDetail.json"
3. Logic to implement the order of card detail to be displayed in the card detail is implemented in "src\app\components\card-payment\card-payment.component.ts"



# Internalization
1. Two files are placed under "src\assets\i18n" folder to support "en" & "fr"
2. Need to install npm translate module
npm install @ngx-translate/core @ngx-translate/http-loader

# Protractor
1. Run the below command to verify the text case
   ng e2e --port 4300

2. Below are the e2e test cases   
  workspace-project App \

    √ should display "Login to your bank" msg header \
    √ should display "User name input" in login page \
    √ should display "Passwod input" in login page \
    √ should display "Login button" in login page \
    √ should display "User name < 4 charcter" for invalid user name \
    √ should display "Password < 5 charcter" for invalid pwd \
    √ should display Login is not successful for invalid credential \
    √ should display "Card Detail" with valid credential \
    √ should display "Pay button" in Card Detail page \
    √ should display Error message" if pay button is click without selecting card. \
    √ should display payment result page" after selecting card and click on pay. \
    √ should display payment result page message" after selecting card and click on pay. \

Executed 12 of 12 specs SUCCESS in 40 secs. \
