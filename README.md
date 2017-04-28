# Pingdash
A simple status dashboard for all your services.

![](demo.gif)

## Usage
```bash
pingdash config.json
```

Then open http://localhost:3000 in your browser. The config file is defined as below:

## config.json sample
```json
{
  "title": "Hello Pingdash",
  "port": 3000,
  "data": [
    // send a GET request to Google every 3 seconds
    {
      "name": "Google",
      "url": "https://google.com",
      "interval": 3
    },
    // ping GitHub once every minute
    {
      "name": "GitHub",
      "method": "ping github.com -c 1",
      "interval": 60
    },
    // ...
  ]
}
```

## Install
You could just use npm to install it globally:

```bash
npm i pingdash -g
```

Or use yarn:

```bash
yarn global add pingdash
```

## License
The MIT license.
