import React from 'react';
import { SafeAreaView, Text, SectionList, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const MyCalendar = () => {
  return (
    <>
      <SafeAreaView>
        <Calendar
          // Initially visible month. Default = Date()
          current="2012-03-01"
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate=""
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate=""
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat="yyyy MM"
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => <Arrow />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={(substractMonth) => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={(addMonth) => addMonth()}
          markedDates={{
            '2012-03-16': {
              selected: true,
              marked: true,
              selectedColor: 'blue',
            },
            '2012-03-17': { marked: true },
            '2012-03-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2012-03-19': { disabled: true, disableTouchEvent: true },
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default MyCalendar;
