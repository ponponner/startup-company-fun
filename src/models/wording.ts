// import { LANGUAGES, Language } from './language';

// // --------------------------------------------------
// // WordingId
// // --------------------------------------------------
// import { WordingIdFor_Ui_View_ProductionRequirements } from '@/views/ProductionRequirements.vue';
// import { WordingIdFor_Ui_Component_ProductTypeTooltip } from '@/components/ProductTypeTooltip.vue';

// // --------------------------------------------------
// // WordingCategory
// // --------------------------------------------------
// export enum WordingCategory {
//   Ui_View_ProductionRequirements,
//   Ui_Component_ProductTypeTooltip,
// }
// export const WORDING_CATEGORIES: WordingCategory[] = [
//   WordingCategory.Ui_View_ProductionRequirements,
//   WordingCategory.Ui_Component_ProductTypeTooltip,
// ];

// // --------------------------------------------------
// // WordingMaker
// // --------------------------------------------------
// type WordingMaker = (texts?: string[]) => string;
// interface WordingMakers {
//   // ex.: WORDING_MAKERS_IN_ENGLISH
//   //         [WordingCategory.Ui_View_ProductionRequirements]
//   //         [WordingIdFor_Ui_View_ProductionRequirements.Title]
//   [key: number]: { [key: number]: WordingMaker };
// }

// // --------------------------------------------------
// // Definitions
// // --------------------------------------------------
// interface Definitions {
//   // ex.: DEFINITIONS_IN_ENGLISH
//   //         [WordingCategory.Ui_View_ProductionRequirements]
//   //         [WordingIdFor_Ui_View_ProductionRequirements.Title]
//   [key: number]: { [key: number]: string };
// }
// const DEFINITION_IN_ENGLISH: Definitions = {
//   // ----------
//   // UI View
//   // ----------
//   [WordingCategory.Ui_View_ProductionRequirements]: {
//     [WordingIdFor_Ui_View_ProductionRequirements.Title]:
//       'PRODUCTION REQUIREMENTS',
//   },
//   [WordingCategory.Ui_Component_ProductTypeTooltip]: {
//     [WordingIdFor_Ui_Component_ProductTypeTooltip.Creator]: 'Created by %s (%s)',
//     [WordingIdFor_Ui_Component_ProductTypeTooltip.ProductionTime]: 'Prod. Time: %s',
//   },
// };
// const TEXTS_JAPANESE = {
//   [TextCategory.EmployeeTypeName]: {
//     [EmployeeType.Developer]: '開発者',
//     [EmployeeType.Designer]: 'デザイナー',
//     [EmployeeType.LeadDeveloper]: 'リード開発者',
//     [EmployeeType.SysAdmin]: 'システム管理者',
//   },
//   [TextCategory.EmployeeLevelName]: {
//     [EmployeeLevel.Beginner]: '初級者',
//     [EmployeeLevel.Intermediate]: '中級者',
//     [EmployeeLevel.Expert]: '上級者',
//   },
//   [TextCategory.ProductTypeName]: {
//     // ------------------------------
//     // Developer
//     // ------------------------------
//     // ::Beginner
//     [ProductType.UIComponent]: 'UIコンポーネント',
//     [ProductType.BackendComponent]: 'バックエンドコンポーネント',
//     [ProductType.NetworkComponent]: 'ネットワークコンポーネント',
//     [ProductType.DatabaseComponent]: 'データベースコンポーネント',
//     [ProductType.VideoComponent]: '動画コンポーネント',
//     // ::Intermediate
//     [ProductType.SemanticComponent]: 'セマンティック',
//     [ProductType.SmtpComponent]: 'SMTPコンポーネント',
//     [ProductType.EncryptionComponent]: '暗号化コンポーネント',
//     [ProductType.FilesystemComponent]: 'ファイルシステムコンポーネント',
//     // ::Expert
//     [ProductType.I18nComponent]: 'i18nコンポーネント',
//     [ProductType.SearchAlgorithmComponent]: '検索アルゴリズムコンポーネント',
//     [ProductType.CompressionComponent]: '圧縮コンポーネント',
//     // ------------------------------
//     // Designer
//     // ------------------------------
//     // :: Beginner
//     [ProductType.BlueprintComponent]: '設計図コンポーネント',
//     [ProductType.WireframeComponent]: 'ワイヤーフレームコンポーネント',
//     [ProductType.GraphicsComponent]: 'グラフィックコンポーネント',
//     [ProductType.UIElement]: 'UI要素',
//     // ::Intermediate
//     [ProductType.UISet]: 'UIセット',
//     [ProductType.ResponsiveUI]: 'レスポンシブUI',
//     // ::Expert
//     [ProductType.DocumentationComponent]: 'ドキュメントコンポーネント',
//     [ProductType.DesignGuidelines]: 'デザインのガイドライン',
//     // ------------------------------
//     // Lead Developer
//     // ------------------------------
//     // :: Beginner
//     [ProductType.InterfaceModule]: 'インターフェースモジュール',
//     [ProductType.FrontendModule]: 'フロントエンドモジュール',
//     [ProductType.BackendModule]: 'バックエンドモジュール',
//     [ProductType.InputModule]: '入力モジュール',
//     [ProductType.StorageModule]: 'ストレージモジュール',
//     [ProductType.ContentManagementModule]: 'コンテンツ管理モジュール',
//     [ProductType.VideoPlaybackModule]: '動画再生モジュール',
//     // ::Intermediate
//     [ProductType.SeoModule]: 'SEOモジュール',
//     [ProductType.EmailModule]: 'メールモジュール',
//     [ProductType.DatabaseLayer]: 'データベースレイヤー',
//     [ProductType.NotificationModule]: '通知モジュール',
//     [ProductType.AuthenticationModule]: '認証モジュール',
//     // ::Expert
//     [ProductType.PaymentGatewayModule]: '決済ゲートウェイモジュール',
//     [ProductType.LocalizationModule]: 'ローカライズモジュール',
//     [ProductType.SearchModule]: '検索モジュール',
//     [ProductType.BandwidthCompressionModule]: '帯域幅圧縮モジュール',
//     [ProductType.CodeOptimizationModule]: 'コード最適化モジュール',
//     [ProductType.ApiClientModule]: 'APIクライアントモジュール',
//     // ------------------------------
//     // SysAdmin
//     // ------------------------------
//     // :: Beginner
//     [ProductType.VirtualHardware]: '仮想ハードウェア',
//     [ProductType.OperatingSystem]: 'オペレーティングシステム',
//     [ProductType.Firewall]: 'ファイアウォール',
//     // ::Intermediate
//     [ProductType.ProcessManagement]: 'プロセス管理',
//     [ProductType.ContinuousIntegration]: '継続的インテグレーション',
//     [ProductType.CronJob]: 'Cronジョブ',
//     // ::Expert
//     [ProductType.VirtualContainer]: '仮想コンテナ',
//     [ProductType.Cluster]: 'クラスタ',
//     [ProductType.SwarmManagement]: '群管理',
//   },
// };

// // ----------
// // exports
// // ----------
// function __upsertTexts(dest: Texts, src: Texts) {
//   const keysA = Object.keys(src).map(o => parseInt(o, 10));
//   for (const textCategory of keysA) {
//     if (dest[textCategory] == null) {
//       dest[textCategory] = {};
//     }
//     const keysB = Object.keys(src[textCategory]).map(o => parseInt(o, 10));
//     for (const index of keysB) {
//       const srcText = src[textCategory][index];
//       if (srcText == null) {
//         continue;
//       }
//       dest[textCategory][index] = srcText;
//     }
//   }
// }
// export const TEXTS_BY_LANGUAGES = {
//   [Language.English]: TEXTS_ENGLISH,
//   [Language.Japanese]: TEXTS_JAPANESE,
// };
// export let glbTexts: Texts = TEXTS_BY_LANGUAGES[Language.English];
// export function changeTextsByLanguage(language: Language) {
//   const DEFAULT_LANGUAGE = Language.English;
//   const texts = {};

//   // upsert text(default-language)
//   __upsertTexts(texts, TEXTS_BY_LANGUAGES[DEFAULT_LANGUAGE]);

//   // check
//   if (language === DEFAULT_LANGUAGE) {
//     glbTexts = texts;
//     return;
//   }

//   // upsert
//   __upsertTexts(texts, TEXTS_BY_LANGUAGES[language]);

//   // set texts
//   glbTexts = texts;
// }

// // set texts-default(English)
// // changeTextsByLanguage(Language.English);
