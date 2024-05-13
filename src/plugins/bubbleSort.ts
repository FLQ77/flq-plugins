/**
 * @description: 冒泡排序
 * @param {number} list
 */
function bubbleSort(list: number[]) {
    const len = list.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (list[j] > list[j + 1]) {
          ;[list[j], list[j + 1]] = [list[j + 1], list[j]]
        }
      }
    }
    return list
  }
  
  export default bubbleSort