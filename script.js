// current date and time
var currentDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);
// btn clicker
$(document).ready(function() {
    $('.btn').on('click', function() {
        console.log('IT CLICKED!')
        var text = $(this).siblings('.input').val();
        var time = $(this).parent().attr('id')
        // storing item
        localStorage.setItem(time, text);
    })
    function timeTracker() {
        var currentTime = moment().hour()
        console.log(currentTime)
        // time block loop
        $('.time-block').each(function () {
            var markedTime = parseInt($(this).attr('id').split('hour')[1]);
            if (markedTime < currentTime) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (markedTime === currentTime) {
                $(this).removeClass('past')
                $(this).addClass('present')
                $(this).removeClass('future')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
        })
    }
    // local storage
    $('#hour8 .input').val(localStorage.getItem('hour8'));
    $('#hour9 .input').val(localStorage.getItem('hour9'));
    $('#hour10 .input').val(localStorage.getItem('hour10'));
    $('#hour11 .input').val(localStorage.getItem('hour11'));
    $('#hour12 .input').val(localStorage.getItem('hour12'));
    $('#hour13 .input').val(localStorage.getItem('hour13'));
    $('#hour14 .input').val(localStorage.getItem('#hour14'));
    $('#hour15 .input').val(localStorage.getItem('hour15'));
    $('#hour16 .input').val(localStorage.getItem('hour16'));
    $('#hour17 .input').val(localStorage.getItem('hour17'));
    $('#hour18 .input').val(localStorage.getItem('hour18'));
    $('#hour19 .input').val(localStorage.getItem('hour19'));
    $('#hour20 .input').val(localStorage.getItem('hour20'));

    timeTracker();
})

