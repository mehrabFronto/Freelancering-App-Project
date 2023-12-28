import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

const DatePickerField = ({ label, date, setDate, required }) => {
   return (
      <div>
         <span className="mb-2 block text-base font-bold text-secondary-700">
            {label} {required && <span className="text-error">*</span>}
         </span>
         <DatePicker
            containerClassName="w-full"
            inputClass="textField__input"
            value={date}
            onChange={(date) => setDate(date)}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-center"
         />
      </div>
   );
};

export default DatePickerField;
