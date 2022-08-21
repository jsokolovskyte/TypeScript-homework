var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';
import calcMonthWorkDays from '../helpers/calc-month-work-days.js';
class WorkPerson extends Employee {
    constructor(_a) {
        var { hourPay, fullTimeEquivalent } = _a, personProps = __rest(_a, ["hourPay", "fullTimeEquivalent"]);
        super(personProps);
        this.calcPay = () => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    toString() {
        return `${this.getPersonInfo()
            + formatLine(`hour pay: ${this.hourPay}`, 1)
            + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
    }
}
export default WorkPerson;
//# sourceMappingURL=work-person.js.map