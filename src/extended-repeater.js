module.exports = function repeater(str, options) {
   
    const repeatTimes = options.repeatTimes;
    const separator = options.separator ? String(options.separator) : '+';
    const addition = options.additionRepeatTimes ? Array(options.additionRepeatTimes).fill(String(options.addition)).join(String(options.additionSeparator)) : options.addition ? String(options.addition) : '';
    const resultString = Array(options.repeatTimes).fill(str + addition).join(separator);
    return resultString;
};