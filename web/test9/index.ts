let timerId: any = null;
/**
 * @function debounce
 * @param {Function} func 防抖回调函数
 * @param {number} wait 防抖时间
 * @param immediate 是否立即执行
 * @description 防抖封装
 */
const debounce = function (
  func: Function,
  wait: number,
  immediate?: boolean | undefined
) {
  immediate = immediate || false; // immediate默认为false
  // 因为debounce返回的函数可调用，所以需要返回一个函数
  return function () {
    // 保留函数调用时的this，否则返回函数将指向window
    // @ts-ignore
    const context = this;
    // 获得当前函数的传入参数
    const args = arguments;
    // 保存函数运行后的结果
    let result;

    // 如果存在定时器，需要将定时器清除
    if (timerId) {
      clearTimeout(timerId);
    }
    if (!immediate) {
      // 如果不是立即执行
      timerId = setTimeout(() => {
        result = func.apply(context, args);
      }, wait);
    } else {
      let callNow = !timerId;
      // 判断是否为初次执行，若timerId为null，为初次执行
      timerId = setTimeout(() => {
        // 在wait结束时，将timerId置空，保证下次为初次执行状态
        timerId = null;
      }, wait);
      // 通过callNow 实现wait的时间间隔
      if (callNow) {
        result = func.apply(context, args);
      }
    }
    return result;
  };
};

debounce.cancle = function () {
  // 取消的实现，就是取消当前的timerId
  clearTimeout(timerId);
  timerId = null; // 将闭包的变量置空，防止内存泄漏
};

export default debounce;
