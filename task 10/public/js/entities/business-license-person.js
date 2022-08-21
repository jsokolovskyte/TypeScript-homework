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
class BuisnessLicencePerson extends Employee {
    constructor(_a) {
        var { jobs = [] } = _a, personProps = __rest(_a, ["jobs"]);
        super(personProps);
        this.calcPay = () => {
            const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
            const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
            unpayedFinishedJobs.forEach((job) => job.setJobPayed());
            return calculatedPay;
        };
        this.jobs = jobs;
    }
    toString() {
        const { jobs } = this;
        let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
        if (this.jobs.length > 0) {
            result += jobs.map((job) => `${job.toString()}`).join('\n');
        }
        return result;
    }
}
export default BuisnessLicencePerson;
//# sourceMappingURL=business-license-person.js.map