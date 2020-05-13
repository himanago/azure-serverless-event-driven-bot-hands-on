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
- chapter 1: [Cosmos DB アカウントの作成とコンテナーの追加](docs/chap1_cosmos_db.md)
- chapter 2: [Cosmos トリガーで起動する関数アプリの作成とデプロイ](docs/chap2_function_app.md)
- chapter 3: [出力バインディングによる SignalR Service への連携](docs/chap3_signalr_service.md)
- chapter 4: [Blob Storage への静的 Web サイトのホスト](docs/chap4_blob_static_web.md)
- chapter 5a: [静的 Web サイトをリアルタイム更新するクライアントツールの開発（LINE Bot）](docs/chap5a_line_bot.md)
- chapter 5b: [静的 Web サイトをリアルタイム更新するクライアントツールの開発（Microsoft Teams の送信 Webhook）](docs/chap5b_teams_outgoing_webhook.md)