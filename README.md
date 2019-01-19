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

* aws-lambda
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

![sam](https://user-images.githubusercontent.com/2668146/51420938-acf3f380-1bda-11e9-8a2a-8b5e6d6a20be.png)

