This code set up an Express server that generates a QR code image based on the data and size provided in the query parameters, and streams the generated image back to the client. The QR code generation is done using the 'qrcode' package.

The server listens on port 3000 and responds with a QR code image when a GET request is made to the root route. If no data is provided in the query parameters, it returns a usage message with an example URL.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# production mode
$ npm start
```

## Build Images

```bash
$ docker build -t qr-code-generator-api:latest .
```

## Run Container

```bash
$ docker run -d --name qr-code-generator-api qr-code-generator-api:latest
```

#### IF RUN ERROR

```bash
WARNING: The requested images platform (linux/arm64/v8) does not match the detected host platform (linux/amd64) and no specific platform was requested
```

```bash
# Build
$ docker build --platform=linux/amd64 -t qr-code-generator-api:latest .
```

<br />
<br />

# HOW TO EXPORT .TAR

docker save -o [ชื่อที่ต้องการ.tar] [ชื่อContainer]:[Tags]

```bash
$ docker save -o qr-code-generator-api.tar qr-code-generator-api:latest
```

# HOW TO IMPORT .TAR

docker load -i ชื่อ Container.tar

```bash
$ docker load -i qr-code-generator-api.tar
```

## Sent file to server

```bash
$ scp qr-code-generator-api.tar user@ip:path-server
```