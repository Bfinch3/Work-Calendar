// Wraps all code to ensure that doesn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function () {

  // Added code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
const items = [];
for(var i = 0; i<localStorage.length;i++){
  var key = localStorage.key(i)
  var value = localStorage.getItem(key)
  items[key] = value
}  
// For each items object entry use the key as an ID to the text area to populate the value.
Object.entries(items).forEach(([key, value])=>{
  $(`#${key} > textarea`).val(value);
})
  // Adds a listener for click events on the save buttons. 
  $('button').on('click', function () {
    var parentId = $(this).parent().attr('id')
    var textArea = $(this).prev().val()
    localStorage.setItem(parentId, textArea)
  })

    // Gets the current hour when document is ready
    var currentHour = new Date().getHours();
    
    // Starts the time blocks and changes the background color based on its current hour
    wrapTimeBlock(currentHour);

      // Adds code to apply the past, present, or future class to each time block by comparing the id to the current hour.
function wrapTimeBlock(currentHour) {
    // Select all the elements with .time-block class.
    var timeBlocks = $('.time-block');
    
    // Set the function for each timeblock
    timeBlocks.each(function() {
        // Removes pre-existing time-related classes
        $(this).removeClass('past present future');

        // Extracts hour from the element's id attribute
        var parentId = $(this).attr('id');
        var hour = parseInt(parentId.substring(parentId.indexOf('-') + 1));

        // Adds the correct class based on the hour
        if (hour < currentHour) {
            $(this).addClass('past');
        } else if (hour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
}

  // Adds code to display the current date in the header of the page.
  var timeDisplayEl = $('#time-display');
  function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss');
  timeDisplayEl.text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000);
  setInterval(wrapTimeBlock(currentHour),1000)
});
