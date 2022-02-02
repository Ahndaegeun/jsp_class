const _ajax = {
  get(url, dataType, data) {
    return new Promise(function(res, rej) {
      const xhr = new XMLHttpRequest()
      xhr.onload = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          res(xhr)
        } else {
          rej({ status: xhr.send, statusText: xhr.statusText })
        }
      }

      xhr.open('GET', url, true)
      xhr.responseType = dataType
      xhr.send(data)
    })
  },
  post(url, dataType, data) {
    return new Promise(function(res, rej) {
      const xhr = new XMLHttpRequest()
      xhr.onload = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          res(xhr)
        } else {
          rej({ status: xhr.send, statusText: xhr.statusText })
        }
      }

      xhr.open('POST', url, true)
      xhr.responseType = dataType
      xhr.send(data)
    })
  },
  put(url, dataType, data) {
    return new Promise(function(res, rej) {
      const xhr = new XMLHttpRequest()
      xhr.onload = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          res(xhr)
        } else {
          rej({ status: xhr.send, statusText: xhr.statusText })
        }
      }

      xhr.open('PUT', url, true)
      xhr.responseType = dataType
      xhr.send(data)
    })
  },
  delete(url, dataType, data) {
    return new Promise(function(res, rej) {
      const xhr = new XMLHttpRequest()
      xhr.onload = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          res(xhr)
        } else {
          rej({ status: xhr.send, statusText: xhr.statusText })
        }
      }

      xhr.open('DELETE', url, true)
      xhr.responseType = dataType
      xhr.send(data)
    })
  }
}

export default _ajax