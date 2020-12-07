     ***************************************** ---COMMENTS--- ********************************************************
     
                                         Test Steps for Exercie2
     * 1. Usually I do not prefer using BDD for UI testing. However, in this case, as no preferred language/framework 
         was mentioned I found it suitable to write these test scripts with a high-level description of the features 
         which were shown in screenshots using Gherkin keywords.
     * 2. For TestCase2 - TestCase5, there will be a Setup method ensuring a successful user login and it will run once 
         either at the class level, or each time before every test case depending upon project structure and overall flow.
     * 3. I think there should be asterisks for the mandatory fields in the subscription form better usability
     ******************************************************************************************************************
     
     
#### TestCase1 - User is logged in and the Leaf Grow page is fully loaded 
 **Given**  User has valid credentials   
 **When**  User submits valid credentials   
 **Then**   User gets into the system and has access to user profile settings   

#### TestCase2 - User initiates subscription to an upgraded plan  

 **Given** User does not have a subscription  
 **When** User clicks on view profile  
 **And**    Clicks on upgrade plan button from account details  
 **Then**  Subscription plan window displays monthly charges and promotion code input box  	 

#### TestCase3 - User gets discounted price subscription with the promotion code 

 **Given** User does not have a subscription  
 **When** User clicks on view profile and then clicks on upgrade plan button from account details  
 **Then** Subscription plan window displays monthly charges and promotion code input box  
 **And**   User adds promotion code, sees discounted price, and clicks upgrade button  
 **And**   User fills required fields and clicks subscribe  
 **And**   User sees a green subscription successful message at the bottom of the page    

#### TestCase4 - User gets actual price subscription without a promotion code

**Given** User does not have a subscription  
**When** User clicks on view profile and then clicks on upgrade plan button from account details  
**Then** Subscription plan window displays monthly charges and promotion code input box  
**And**   User leaves promotion code field empty, actual price remains unchanged, and clicks upgrade button   
**And**   User fills required fields and clicks subscribe   
**And**   User sees a green subscription successful message at the bottom of the page    

#### TestCase5 - User verifies his upgraded subscription

**Given** User have a subscription  
**When** User clicks on view profile  
**Then** Account details shows Cancel Subscription button  
**And**  Account details shows the plan type equal to subscription
     
