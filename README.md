
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

 