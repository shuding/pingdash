# Pingdash
A simple status dashboard for all your services. 

## Usage
```bash
pingdash config.json
```

Then open http://localhost:3000 in your browser. The config file is defined as below:

## Configuration

### config.json
```json
{
  "title": "Hello Pingdash",
  "port": 3000,
  "data": [
  	{
  	  "name": "Google",
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
