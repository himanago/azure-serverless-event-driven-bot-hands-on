# Azure サーバーレステクノロジー体験ハンズオン ～イベント駆動でつなげよう～

## 概要
LINE Bot または Teams 送信 Webhook の 2 種類のインターフェースからのアクションでリアルタイムに更新される Web ページを、Azure のサーバーレステクノロジーの組み合わせで構築するハンズオンです。
2 種のインターフェースはどちらかだけでも実践可能です。

現在作成中。

## 使用する Azure のサービス
- Azure Functions
- Azure Cosmos DB
- Azure SignalR Service
- Azure Blob Storage

## もくじ
- chapter 1: Cosmos DB アカウントの作成とコンテナーの追加
- chapter 2: Cosmos トリガーで起動する関数アプリの作成とデプロイ
- chapter 3: 出力バインディングによる SignalR Service への連携
- chapter 4: Blob Storage への静的 Web サイトのホスト
- chapter 5a: 静的 Web サイトをリアルタイム更新するクライアントツールの開発（LINE Bot）
- chapter 5b: 静的 Web サイトをリアルタイム更新するクライアントツールの開発（Microsoft Teams の送信 Webhook）