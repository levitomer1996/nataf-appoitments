import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const CalendarComponent = () => {
  const [selected, setSelected] = useState("");

  LocaleConfig.locales["he"] = {
    monthNames: [
      "ינואר",
      "פברואר",
      "מרץ",
      "אפריל",
      "מאי",
      "יוני",
      "יולי",
      "אוגוסט",
      "ספטמבר",
      "אוקטובר",
      "נובמבר",
      "דצמבר",
    ],
    monthNamesShort: [
      "ינו",
      "פבר",
      "מרץ",
      "אפר",
      "מאי",
      "יונ",
      "יול",
      "אוג",
      "ספט",
      "אוק",
      "נוב",
      "דצמ",
    ],
    dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
    dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש"],
    today: "היום",
  };

  LocaleConfig.defaultLocale = "he"; // Set Hebrew as the default locale

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />
  );
};

export default CalendarComponent;
