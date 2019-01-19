# 概要

AWS SAM CLI の動作確認用サンプルです。  
TypeScriptでビルドしたものについてもあわせて配置しています。

# 実行環境

* Python 
* pip
* Docker
* AWS CLI
* [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js
* Yarn

# 使用ライブラリ

* TypeScript
* Webpack

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/aws-local.git
```

## 2. ビルド  

```
cd aws-local/src/ts_sample
yarn build
```

## 3. サンプルの起動  

```
cd ../../
sam local start-api
```

## 4. 実行結果  

![sam](https://user-images.githubusercontent.com/2668146/51420938-acf3f380-1bda-11e9-8a2a-8b5e6d6a20be.png)

