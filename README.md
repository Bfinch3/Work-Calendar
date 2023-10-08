# Work-Calendar
A calendar to keep track of your tasks from 9am to 5pm.
https://bfinch3.github.io/Work-Calendar/

<hr>

GIVEN I am using a daily planner to create a schedule

When the planner is opened
Then the current day is displayed at the top of the calendar

![Capture](https://github.com/Bfinch3/Work-Calendar/assets/144380049/ec1f9a30-5158-4d04-a072-680cad2374d4)

<hr>

When scrolling down
Then you are presented with timeblocks for standard business hours of 9am and 5pm

![Capture](https://github.com/Bfinch3/Work-Calendar/assets/144380049/ad0aba8f-e68d-40fa-a443-0dbd10baf728)

<hr>

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

![Capture](https://github.com/Bfinch3/Work-Calendar/assets/144380049/be0d66a2-cced-4b75-8aae-a5d67f7d0111)

<hr>
WHEN I click into a timeblock
THEN I can enter an event

![Work Calendar](https://github.com/Bfinch3/Work-Calendar/assets/144380049/0ed5b0f5-4862-4d70-8903-0ef1d45c4b15)

<hr>

When the timeblock save button is clicked
Then the text for that event is saved in local storage

![Capture](https://github.com/Bfinch3/Work-Calendar/assets/144380049/2607dc03-e619-40dc-8f7c-468f4416fc3b)

<hr>

When the page is refreshed 
Then the saved events persist

![Untitled_ Oct 8, 2023 2_12 PM](https://github.com/Bfinch3/Work-Calendar/assets/144380049/432a5faf-886f-4b62-8285-89b7315ebb9d)

<hr>

MIT License, Please refer to the LICENSE in the repo.
