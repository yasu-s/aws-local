# Overview

AWS SAM CLI operation confirmation sample.  
API definitions built with TypeScript are also included.

# System requirements

* Python 
* pip
* Docker
* AWS CLI
* [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js
* Yarn

# Used library

* TypeScript
* Webpack

# Operation check

## 1. Download Sample

```
git clone git@github.com:yasu-s/aws-local.git
```

## 2. Build  

```
cd aws-local/src/ts_sample
yarn build
```

## 3. Launch sample application  

```
cd ../../
sam local start-api
```

## 4. Execution result  

### src/hello_world/app.js

![sam](https://user-images.githubusercontent.com/2668146/51420938-acf3f380-1bda-11e9-8a2a-8b5e6d6a20be.png)

### src/ts_sample/app.ts

![sam2](https://user-images.githubusercontent.com/2668146/51424148-5ce25480-1c0d-11e9-9f59-f08a22ea45ff.png)
