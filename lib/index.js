import extend from "safe-extend"
class Touch {
    constructor(props) {
        const self = this
        self.onCallbackMap = {}
        self.valueLog = []
    }
}
Touch.prototype.start = function (startValue) {
    const self = this
    self.valueLog = []
    self.valueLog.push(startValue)
}
Touch.prototype.emit = function (type, arg) {
    const self = this
    self.onCallbackMap[type] = self.onCallbackMap[type] || []
    self.onCallbackMap[type].forEach(function (cb) {
        cb.apply(self, arg)
    })
}
Touch.prototype.move = function (moveValue) {
    const self = this
    let lastValue = self.valueLog[self.valueLog.length - 1]
    self.valueLog.push(moveValue)
    self.emit('action', [moveValue - lastValue])

}
Touch.prototype.end = function (endValue) {
    const self = this
}
Touch.prototype.on = function (type, callback) {
    const self = this
    self.onCallbackMap[type] = self.onCallbackMap[type] || []
    self.onCallbackMap[type].push(callback)
}
export default Touch
module.exports = Touch
