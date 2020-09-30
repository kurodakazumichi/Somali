# Somali
ブラウザで動作する動的グラフライブラリ

開発時はコンソールを２つ起動し、以下のタスクをそれぞれ実行する。
```
yarn build:browser --watch
yarn example
```

`yarn build:browser --watch`は`src`以下のファイルに変更があったら`browser`以下に`somali.min.js`を生成するタスク。
`yarn example`はサンプルを実行するためのタスク
