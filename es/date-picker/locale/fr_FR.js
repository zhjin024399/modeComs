import CalendarLocale from 'rc-calendar/es/locale/fr_FR';
import TimePickerLocale from '../../time-picker/locale/fr_FR';
import assign from 'object-assign';
// Merge into a locale object
var locale = {
    lang: assign({
        placeholder: 'Sélectionner une date',
        rangePlaceholder: ['Date de début', 'Date de fin']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
export default locale;