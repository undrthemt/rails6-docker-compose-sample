# README
## Software Stack
* Ruby 2.6.5
* Rails6
* Postgresql 11.6
* Nodejs 12.14.0
* yarn 1.21.1
* Bundler 2.1.3

## docker-composeでの起動方法
* .envファイルで自ホスト側のポートを変更できます

```bash
# 初回
cp -p .env.example .env
mkdir tmp/pids
docker-compose up
docker-compose exec app bundle exec rails db:create 

# 以降
docker-compose up
```


## 初期のRails6アプリケーション生成時のコマンド
* rbenv, yarnが入っている前提

```bash
rbenv local 2.6.5
rbenv exec gem install bundler
rbenv rehash
bundle init
# Gemfile の gem 'rails'をコメントアウト
bundle install --path=vendor/bundle
bundle exec rails new . --skip-bundle
# Gemfile に gem 'pg' のみ追加
bundle install
bundle exec rails webpacker:install 
yarn install --check-files
```

## webpacker と sprockets
* Rails6で導入された webpacker と、既存の sprockets について以下は必読です
* https://techracho.bpsinc.jp/hachi8833/2019_11_28/83678
* https://techracho.bpsinc.jp/hachi8833/2020_01_16/85940
* https://techracho.bpsinc.jp/hachi8833/2020_01_17/85943
