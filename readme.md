# 職務経歴書
Updated Sep 2019

## 個人データ

|key |value |  
|---|---|  
|Name|新歩一正己(Masami Shimbuichi)|
|Twitter|@shm0331|
|GitHub|[こちら](https://github.com/masamiShim)|
|ScrapBox|[こちら](https://scrapbox.io/kei11nishikori1-39973765/)|
|興味のあること|設計(DDD, CleanArchitecture), フロント/アプリ開発|
|趣味|テニス、ランニング、コーヒー巡り、電気工作(未着手)|

## 職務経歴(概要)
### ソフトウェア開発
- Webアプリケーション開発支援(フリー：4年～)
    - ポイント管理システム、証券売買システム、 自動資産運用システム、ログ収集基盤構築/表示/分析アプリ開発
    - PL(3～5人)
    - コードレビュー
- 販売管理システムの開発(正社員:４～５年)
    - 受託
    - 電子部品メーカー、農機メーカー、インポート家具販売/製造、廃棄物処理/再生販売業、産廃処理業、 住宅設備販売
    - 要件定義 / 設計 / 開発 / テスト / リリース / 運用
    - PL(3～5人)
    - Java(1.6, 1.8), VB.NET, VB6, ASP.NET
- その他個人請負
    - BluetooothBLE機器の情報表示アプリ(Windowsアプリ, iOSアプリ, Androidアプリ)
    - 太陽光電池発電量可視化システム(Laravel + Vue)

## プログラミングスキル
- Java(6年)
    - Spring, Struts, JavaEE7, SpringBoot, JSP/Servletでの開発経験がある
    - 一通り実装可能
- JavaScript(4年), TypeScript(1年未満)
    - jQuery, Vue.jsでの開発経験がある
    - 詳細については調べながら実装可能
- HTML/CSS(5年)
    - デザインカンプからコーディング可能
    - レスポンシブ対応
    - タグの使い方やSEO周りは弱い
- SQL(5年)
    - 「JOIN,UNION,GROUP BY」等を使って必要な情報を取ってこれる
    - 実行計画等を見ながらクエリのチューニングが可能
    - ウィンドウ関数あたりを使いこなせるようになりたい
- VB(3年)
    - 帳票出力(CrystalReport)、バーコード出力、ドットプリンタ出力等
- C#, PHP, Swift, Kotlin(1年未満)
    - 請負の開発で使用
- Python, Ruby(on Rails), Scala(Play), Elm, React, Go(趣味)
    - ここら辺は触ってみたレベル
  
### 職務経歴(詳細)
#### 公共システム開発支援 2019/3 ～　2019/10
##### 概要
稼働中のシステムに対して、高負荷・大量データ処理時の性能測定を実施。  
提示されている性能要件に満たない場合は改善案を検討し評価を行う。
　
##### 内容
- 性能検証ツール開発  
性能測定結果をアプリログから収集し、最大値/最小値/平均/中央値など報告に必要なデータ表示できるようにするツールを開発しました。  
Dockerを使用しローカルで実施した内容をサーバに挙げても再現性のあるように工夫しました。  
FEKで構築しようとしましたがKibanaの知識がなかったため、Vueを使って画面を作りました。
    - （分析基盤）Docker + Fluentd + ElasticSearch
    - (表示) JavaScript(TypeScript) + Vue.js
        
- 性能改善
性能測定で性能要件を満たしていない機能について分析を行い、改善案を検討/実施/評価を行いました。  
DB周りがボトルネックだったため、インデックスの調査をメインに行いました。  
コスト、速度上問題のない機能に関してはプロファイラを使用して処理時間の比率からボトルネックとなっている処理を分析しました。  
動かなかったバッチ処理の中でPL/SQLで書かれていたものをJava化+並列処理化して性能を改善しました。
    - (DBチューニング)  実行計画、コストの確認、StatsPackの確認など
    - (プロファイリング) Java VisualVM
    - (PL/SQLをJava化+並列化) バッチのプロトタイプを開発
    - コアモジュールリプレース検討用のプロトタイプ作成
- 公共システム追加開発分の設計書レビューと実装レビュー

#### 証券システム開発支援 2018/11 ～　2019/2
##### 概要
StrutsからSpringへのリプレースの後期にアサインされる。  
CI/CD用にテスト仕様書の作成と画面テストのコードを実装。  
スマホに関しては実機とエミューレータでのテストを実施。  
　
##### 内容
- テスト仕様書作成
- Seleniumテストコード実装  
- モンキーテスト
- スマホ用出金機能追加

#### 証券自動運用システム開発支援 2017/10 ～　2018/10
##### 概要
証券自動運用システムのマイページ機能追加/修正を担当。  
デザイナー、社内システム、テスト担当者などと連携をとりながら案件を進めることが多かったです。  

##### 内容
- 改善/修正チケットの対応
    - 社内システム、API、バッチ、マイページ(Web/スマホ)の修正を行いました。  
- ポートフォリオ集計ロジックのパフォーマンスチューニング  
    - プロファイラを使用したパフォーマンス確認
    - 実行計画(Hibernateが発行しているクエリ)の解析
- 新規割引モデル用の機能追加  
積立画面のリニューアルを担当、デザインでiPhoneSEに対応していないところの指摘やUX周りの
    - 手数料計算バッチのリニューアル(月次/日次)
    - 出金額計算ロジックの修正(バッチ/Web)
    - 手数料表示機能(Web)
- 積立機能機能改修  
積立画面のリニューアルを担当、デザインでiPhoneSEに対応していないところの指摘やUXについても提案したりしました。
    - フロント周り(HTML/JS/Controller)の実装を担当
    - デザインカンプからHTMLコーディング(レスポンシブ)
    - 画面の表示/非表示や制限が選択内容によって違ったりと、js(jQuery)での実装に苦労しました
##### 得た知見  
- 分散処理の実装方法
- ConditionalによるDIの切り替え方法
- パフォーマンス計測方法
- 複雑なロジックについての耐性

以下、リンクの遷移先に記載します  
[詳細はこちら](https://github.com/masamiShim/resume/blob/master/histroy.md)

#### 公共システム開発支援 2016/11 ～　2018/9
#### 産廃処理/再生会社様向け販売管理システム開発 2015/12 ～　2016/9
#### 住宅設備メーカ様向け保証管理システム開発 2015/9 ～　2015/11
#### インポート家具製造/販売会社様向け販売管理システム開発 2015/4 ～　2015/8
#### 清掃会社様向け販売管理システム開発 2014/7 ～　2015/3(工事中)
#### 資産管理パッケージIFバッチ開発 2014/3 ～　2014/6(工事中)
#### 校正受託システムリプレース 2013/10 ～　2014/2(工事中)
#### データベース移行(Informix →　postgresql) 2013/4 ～　2013/9(工事中)
#### 海外販売システム機能追加 2012/10 ～　2013/3(工事中)
#### 電子機器メーカ様向け販売管理システム開発 2012/4 ～　2012/9(工事中)

