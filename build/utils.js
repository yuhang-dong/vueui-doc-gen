/**
 * 用于两个绝对地址向相对地址的转化
 * @param from String
 * @param to String
 * @return from 使用相对路径走到 to
 */
function translatePath(from, to) {
  const fromArr = from.split(path.sep)
  const toArr = to.split(path.sep)

  // 找到第一个不一样的
  let index = 0
  while(index < fromArr.length && index < toArr.length && fromArr[index] === toArr[index]) {
    index++
  }

  let ans = ''

  for(let i = 0; i < (fromArr.length - index) - 1; i++) {
    ans += '../'
  }

  ans = ans + toArr.slice(index).join('/');
  return ans
}

module.exports = {
  translatePath
}
