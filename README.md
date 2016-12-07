# Pingdash
A simple status dashboard for all your services. 

## Usage
```bash
pingdash config.json
```

### config.json
```json
{
  "title": "Hello Pingdash",
  "silent": false,
  "port": 3000,
  "host": "0.0.0.0",
  "data": [
  	{
  	  "name": "Google",
      "method": "GET",
  	  "url": "https://google.com",
      "interval": 3
  	}
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
