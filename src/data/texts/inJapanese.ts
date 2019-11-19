import { TextsInSpecificLanguage } from './__utils';
import {
  TextCategoryId,
  EmployeeTypeId,
  EmployeeLevelId,
  LanguageId,
  ProductTypeId,
} from '@/data/ids';

export const inJapanese: TextsInSpecificLanguage = {
  // ------------------------------
  // LanguageName
  // ------------------------------
  [TextCategoryId.LanguageName]: {
    [LanguageId.English]: '英語',
    [LanguageId.Japanese]: '日本語',
  },
  // ------------------------------
  // EmployeeTypeName
  // ------------------------------
  [TextCategoryId.EmployeeTypeName]: {
    [EmployeeTypeId.Developer]: '開発者',
    [EmployeeTypeId.Designer]: 'デザイナー',
    [EmployeeTypeId.LeadDeveloper]: 'リード開発者',
    [EmployeeTypeId.SysAdmin]: 'システム管理者',
  },
  // ------------------------------
  // EmployeeLevelName
  // ------------------------------
  [TextCategoryId.EmployeeLevelName]: {
    [EmployeeLevelId.Beginner]: '初級者',
    [EmployeeLevelId.Intermediate]: '中級者',
    [EmployeeLevelId.Expert]: '上級者',
  },
  // ------------------------------
  // ProductTypeName
  // ------------------------------
  [TextCategoryId.ProductTypeName]: {
    // ------------------------------
    // Developer
    // ------------------------------
    // ::Beginner
    [ProductTypeId.UIComponent]: 'UIコンポーネント',
    [ProductTypeId.BackendComponent]: 'バックエンドコンポーネント',
    [ProductTypeId.NetworkComponent]: 'ネットワークコンポーネント',
    [ProductTypeId.DatabaseComponent]: 'データベースコンポーネント',
    [ProductTypeId.VideoComponent]: '動画コンポーネント',
    // ::Intermediate
    [ProductTypeId.SemanticComponent]: 'セマンティック',
    [ProductTypeId.SmtpComponent]: 'SMTPコンポーネント',
    [ProductTypeId.EncryptionComponent]: '暗号化コンポーネント',
    [ProductTypeId.FilesystemComponent]: 'ファイルシステムコンポーネント',
    // ::Expert
    [ProductTypeId.I18nComponent]: 'i18nコンポーネント',
    [ProductTypeId.SearchAlgorithmComponent]: '検索アルゴリズムコンポーネント',
    [ProductTypeId.CompressionComponent]: '圧縮コンポーネント',
    // ------------------------------
    // Designer
    // ------------------------------
    // :: Beginner
    [ProductTypeId.BlueprintComponent]: '設計図コンポーネント',
    [ProductTypeId.WireframeComponent]: 'ワイヤーフレームコンポーネント',
    [ProductTypeId.GraphicsComponent]: 'グラフィックコンポーネント',
    [ProductTypeId.UIElement]: 'UI要素',
    // ::Intermediate
    [ProductTypeId.UISet]: 'UIセット',
    [ProductTypeId.ResponsiveUI]: 'レスポンシブUI',
    // ::Expert
    [ProductTypeId.DocumentationComponent]: 'ドキュメントコンポーネント',
    [ProductTypeId.DesignGuidelines]: 'デザインのガイドライン',
    // ------------------------------
    // Lead Developer
    // ------------------------------
    // :: Beginner
    [ProductTypeId.InterfaceModule]: 'インターフェースモジュール',
    [ProductTypeId.FrontendModule]: 'フロントエンドモジュール',
    [ProductTypeId.BackendModule]: 'バックエンドモジュール',
    [ProductTypeId.InputModule]: '入力モジュール',
    [ProductTypeId.StorageModule]: 'ストレージモジュール',
    [ProductTypeId.ContentManagementModule]: 'コンテンツ管理モジュール',
    [ProductTypeId.VideoPlaybackModule]: '動画再生モジュール',
    // ::Intermediate
    [ProductTypeId.SeoModule]: 'SEOモジュール',
    [ProductTypeId.EmailModule]: 'メールモジュール',
    [ProductTypeId.DatabaseLayer]: 'データベースレイヤー',
    [ProductTypeId.NotificationModule]: '通知モジュール',
    [ProductTypeId.AuthenticationModule]: '認証モジュール',
    // ::Expert
    [ProductTypeId.PaymentGatewayModule]: '決済ゲートウェイモジュール',
    [ProductTypeId.LocalizationModule]: 'ローカライズモジュール',
    [ProductTypeId.SearchModule]: '検索モジュール',
    [ProductTypeId.BandwidthCompressionModule]: '帯域幅圧縮モジュール',
    [ProductTypeId.CodeOptimizationModule]: 'コード最適化モジュール',
    [ProductTypeId.ApiClientModule]: 'APIクライアントモジュール',
    // ------------------------------
    // SysAdmin
    // ------------------------------
    // :: Beginner
    [ProductTypeId.VirtualHardware]: '仮想ハードウェア',
    [ProductTypeId.OperatingSystem]: 'オペレーティングシステム',
    [ProductTypeId.Firewall]: 'ファイアウォール',
    // ::Intermediate
    [ProductTypeId.ProcessManagement]: 'プロセス管理',
    [ProductTypeId.ContinuousIntegration]: '継続的インテグレーション',
    [ProductTypeId.CronJob]: 'Cronジョブ',
    // ::Expert
    [ProductTypeId.VirtualContainer]: '仮想コンテナ',
    [ProductTypeId.Cluster]: 'クラスタ',
    [ProductTypeId.SwarmManagement]: '群管理',
  },
  // ------------------------------
  // RawComponentName
  // ------------------------------
  [TextCategoryId.RawComponentName]: { '0': '基本コンポーネント' },
  // ------------------------------
  // UI Component
  // ------------------------------
  [TextCategoryId.Ui__Component__ProductionRequests]: {
    ProductType: '製品',
    EmployeeType: '従業員タイプ',
    EmployeeLevel: '従業員レベル',
    Quantity: '数量',
  },
  [TextCategoryId.Ui__Component__ProductionRequestsTotal]: {
    ProductType: '製品',
    EmployeeType: '従業員タイプ',
    EmployeeLevel: '従業員レベル',
    Quantity: '数量',
  },
  // ------------------------------
  // UI  ProductionRequirements
  // ------------------------------
  [TextCategoryId.Ui__View__ProductionRequirements]: {
    ProductTypes: '製品一覧',
    Requests: '要求一覧',
    Total: '総計',
  },
};
