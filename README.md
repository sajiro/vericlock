# VeriClock Front End Developer Test

Estimated time: < 2 hours

Feel free to login to your test account provided at:
https://www.primate.vericlock.com/members

## Getting Started

In the project directory, run:

### `npm install`
### `npm start`

## Test Overview

You are taking over work on a prototype version of the VeriClock web application. The current version has basic authentication, a basic router with 3 menu items and a logout button. Your goal is to complete the following tasks, in no particular order.

## Task 1
Complete each of the 3 menu pages - Employees, Jobs and Service Items - by displaying each set of items in an visually appealling and effective manner of your choice. 

* Load the items when the page components mount  
(in the framework, they are loaded via a button push)
* the "description" member of Jobs and Service Items can have multiple lines and white space formatting is not stripped when used within the legacy VeriClock application.
* Note that many accounts have tens to hundreds of employees, some extending into the thousands, and many accounts have hundreds to thousands of jobs, some extending into the tens of thousands. There is no pagination on the API calls, so a strategy to limit API calls would be beneficial.

## Task 2 - Add an Edit Job Form

Create a form to edit a given job.  The fields to be edited should be:
    
    {
        code: number
        name: string,
        description: string
    }

An API call for updating a job is provided as part of the useVeriClockApi() hook.

## Task 3 - Improve The Main Menu

The current main menu is placeholder. Take a few minutes to improve it.

## Task 4 - Reorganize the code
The code has purposely been left in a single file, App.tsx.  Reorganize the project into multiple files/folders as you see fit.

## Tips 
- Feel free to make use of any NPM libaries you deem appropriate to save time and effort and be ready to discuss your decision to use the particular libraries
- Be aware this framework uses React 18 and is running in Strict Mode by default, which has some new side effects not everyone is familiar with (in particular with effects)
- If you cannot finish all the tasks, don't sweat it. Let us know during the interview what you would have done if you had more time.
# vericlock
