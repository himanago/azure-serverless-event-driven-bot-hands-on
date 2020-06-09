# Azure サーバーレステクノロジー体験ハンズオン ～イベント駆動でつなげよう～

## 概要
LINE Bot または Teams 送信 Webhook の 2 種類のインターフェースからのアクションでリアルタイムに更新される Web ページを、Azure のサーバーレステクノロジーの組み合わせで構築するハンズオンです。

2 種のインターフェースはどちらかだけでも実践可能です。


### 作成できるアプリ
簡易出退勤管理アプリです。

LINE や Microsoft Teams といったチャットツールから勤怠報告メッセージを送信すると、名前とメッセージ、送信時刻を記録することができ、リアルタイムに Web 画面で確認することができます。



## 使用する Azure のサービス
- Azure Functions
- Azure Cosmos DB
- Azure SignalR Service
- Azure Static Web Apps (preview)

## 準備
- Azure の有効なサブスクリプション
- VS Code Insiders
  - 拡張機能「Azure Static Web Apps (Preview)」のインストール
    - 2020/6/9 時点で Insiders のみで使用可能です。
    - 関連する Azure 関連拡張機能もまとめてインストールされます。
  - Git 関連
  - Vetur
- Azure Functions CLI
- Node.js
- Git
- GitHub アカウント
- LINE アカウントもしくは Microsoft Teams（Webhook 機能が利用できること）
※このあたりは空のVMで検証すること
※VS Code 拡張機能を使用せず、すべてコマンドで実行することも可能です。

## もくじ
- chapter 1: [Cosmos DB アカウントの作成とコンテナーの追加](docs/chap1_cosmos_db.md)
- chapter 2: [SignalR Service の作成](docs/chap2_signalr_service.md)
- chapter 3: [Cosmos DB と SignalR Service をつなぐ Azure Functions の開発](docs/chap3_functions.md)
- chapter 4: [Static Web Apps 向けの SPA ＆ API の新規作成](docs/chap4_spa_and_api_for_static_web_apps.md)
- chapter 5a: [静的 Web サイトをリアルタイム更新するクライアントツールの開発（LINE Bot）](docs/chap5a_line_bot.md)
- chapter 5b: [静的 Web サイトをリアルタイム更新するクライアントツールの開発（Microsoft Teams の送信 Webhook）](docs/chap5b_teams_outgoing_webhook.md)
- chapter 6: [おわりに](docs/chap6_conclusion.md)


© 2020 Takumasa Hirabayashi All rights reserved.  
本コンテンツの著作権、および本コンテンツ中に出てくる商標権、団体名、ロゴ、製品、サービスなどはそれぞれ、各権利保有者に帰属します。