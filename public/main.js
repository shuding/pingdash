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
        container.appendChild(row)
        return row
      })
    }

    data.data.map(function (site, i) {
      dataRow[i].className =
        (site.result && site.result.status && site.result.status < 400) ? 'row-ok' : 'row-error'

      dataRow[i].childNodes[0].innerHTML =
        site.method + ' / ' + (site.result ? site.result.status : '?') + ' / ' + (site.result ? site.result.time + 's' : '?')
      dataRow[i].childNodes[1].innerHTML = site.name
      dataRow[i].childNodes[2].innerHTML = site.url
      dataRow[i].childNodes[3].innerHTML = site.result ? site.result.message : ''
      dataRow[i].childNodes[3].setAttribute('title', site.result ? site.result.message : '')
      dataRow[i].childNodes[4].innerHTML = site.interval + 's'
    })
  }

  fetchData(1000, function (data) {
    console.log(data)
    renderData(data)
  })
})(window, window.document)
