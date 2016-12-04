;(function (window, document, undefined) {
  function fetchData(interval, callback) {
    function reqListener () {
      try {
        callback && callback(JSON.parse(this.responseText))
      } catch(err) {
        console.error(err)
      }
      setTimeout(request, interval)
    }

    function request() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener('load', reqListener)
      xhr.open('GET', '/data.json')
      xhr.send()
    }

    request()
  }

  var container = document.getElementById('container')
  var title = document.getElementById('title')
  var dataRow = null

  function renderData(data) {
    title.innerHTML = document.title = data.title
    if (!dataRow) {
      dataRow = data.data.map(function () {
        var row = document.createElement('DIV')
        row.appendChild(document.createElement('SPAN'))
        row.appendChild(document.createElement('SPAN'))
        row.appendChild(document.createElement('SPAN'))
        row.appendChild(document.createElement('SPAN'))
        row.appendChild(document.createElement('SPAN'))
        row.appendChild(document.createElement('SPAN'))
        container.appendChild(row)
        return row
      })
    }

    data.data.map(function (site, i) {
      let status = site.result ? site.result.status : -1
      dataRow[i].className =
        (status === 0 || (status > 100 && status < 400)) ? 'row-ok' : 'row-error'

      dataRow[i].childNodes[0].innerHTML =
        site.method + ' / ' + (status >= 0 ? status : '?') + ' / ' + (site.result ? site.result.time + 'S' : '?')
      dataRow[i].childNodes[1].innerHTML = site.name
      dataRow[i].childNodes[2].innerHTML = site.url
      dataRow[i].childNodes[3].innerText = site.result.body || ''
      dataRow[i].childNodes[4].innerHTML = site.result ? site.result.message : ''
      dataRow[i].childNodes[4].setAttribute('title', site.result ? site.result.message : '')
      dataRow[i].childNodes[5].innerHTML = site.interval + 'S'
    })
  }

  fetchData(1000, function (data) {
    console.log(data)
    renderData(data)
  })
})(window, window.document)
