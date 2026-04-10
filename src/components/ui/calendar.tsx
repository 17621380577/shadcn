import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalendarProps {
  className?: string;
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, value = new Date(), onChange, minDate, maxDate }, ref) => {
    const [currentDate, setCurrentDate] = React.useState(new Date(value));
    const [selectedDate, setSelectedDate] = React.useState(value);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    React.useEffect(() => {
      setCurrentDate(new Date(value));
      setSelectedDate(value);
    }, [value]);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
      setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
      setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleDateSelect = (day: number) => {
      const newDate = new Date(year, month, day);
      if ((minDate && newDate < minDate) || (maxDate && newDate > maxDate)) {
        return;
      }
      setSelectedDate(newDate);
      if (onChange) {
        onChange(newDate);
      }
    };

    const renderDays = () => {
      const days = [];
      const startPadding = firstDayOfMonth;

      for (let i = 0; i < startPadding; i++) {
        days.push(
          <div
            key={`empty-${i}`}
            className="h-12 w-12 flex items-center justify-center text-muted-foreground"
          />,
        );
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isSelected =
          selectedDate.getFullYear() === year &&
          selectedDate.getMonth() === month &&
          selectedDate.getDate() === day;
        const isToday = new Date().toDateString() === date.toDateString();
        const isDisabled = (minDate && date < minDate) || (maxDate && date > maxDate);

        days.push(
          <div
            key={day}
            className={cn(
              'h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition-colors',
              isSelected && 'bg-primary text-primary-foreground',
              isToday && 'bg-primary/10 font-medium',
              isDisabled && 'text-muted-foreground cursor-not-allowed',
              !isSelected && !isDisabled && 'hover:bg-muted',
            )}
            onClick={() => !isDisabled && handleDateSelect(day)}
          >
            {day}
          </div>,
        );
      }

      return days;
    };

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div ref={ref} className={cn('w-full max-w-md border rounded-lg p-4', className)}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">{monthNames[month]}</h2>
            <select
              value={year}
              onChange={(e) => setCurrentDate(new Date(parseInt(e.target.value), month, 1))}
              className="border rounded-md px-2 py-1 text-sm"
            >
              {Array.from({ length: 20 }, (_, i) => 2010 + i).map((yearOption) => (
                <option key={yearOption} value={yearOption}>
                  {yearOption}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-muted">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-muted">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdayNames.map((day) => (
            <div
              key={day}
              className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
      </div>
    );
  },
);
Calendar.displayName = 'Calendar';

export { Calendar };
