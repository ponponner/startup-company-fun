import { TextsInSpecificLanguage } from './__utils';
import {
  TextCategoryId,
  LanguageId,
  EmployeeTypeId,
  EmployeeLevelId,
  ProductTypeId,
} from '@/data/ids';

export const inEnglish: TextsInSpecificLanguage = {
  // ------------------------------
  // LanguageName
  // ------------------------------
  [TextCategoryId.LanguageName]: {
    [LanguageId.English]: 'English',
    [LanguageId.Japanese]: 'Japanese',
    [LanguageId.Italian]: 'Italian',
  },
  // ------------------------------
  // EmployeeTypeName
  // ------------------------------
  [TextCategoryId.EmployeeTypeName]: {
    [EmployeeTypeId.Developer]: 'Developer',
    [EmployeeTypeId.Designer]: 'Designer',
    [EmployeeTypeId.LeadDeveloper]: 'Lead Developer',
    [EmployeeTypeId.SysAdmin]: 'SysAdmin',
  },
  // ------------------------------
  // EmployeeLevelName
  // ------------------------------
  [TextCategoryId.EmployeeLevelName]: {
    [EmployeeLevelId.Beginner]: 'Beginner',
    [EmployeeLevelId.Intermediate]: 'Intermediate',
    [EmployeeLevelId.Expert]: 'Expert',
  },
  // ------------------------------
  // ProductTypeName
  // ------------------------------
  [TextCategoryId.ProductTypeName]: {
    // --------------------
    // Developer
    // --------------------
    // ::Beginner
    [ProductTypeId.UIComponent]: 'UI Component',
    [ProductTypeId.BackendComponent]: 'Backend Component',
    [ProductTypeId.NetworkComponent]: 'Network Component',
    [ProductTypeId.DatabaseComponent]: 'Database Component',
    [ProductTypeId.VideoComponent]: 'Video Component',
    // ::Intermediate
    [ProductTypeId.SemanticComponent]: 'Semantic Component',
    [ProductTypeId.SmtpComponent]: 'SMTP Component',
    [ProductTypeId.EncryptionComponent]: 'Encryption Component',
    [ProductTypeId.FilesystemComponent]: 'Filesystem Component',
    // ::Expert
    [ProductTypeId.I18nComponent]: 'I18n Component',
    [ProductTypeId.SearchAlgorithmComponent]: 'SearchAlgorithm Component',
    [ProductTypeId.CompressionComponent]: 'Compression Component',
    // --------------------
    // Designer
    // --------------------
    // :: Beginner
    [ProductTypeId.BlueprintComponent]: 'Blueprint Component',
    [ProductTypeId.WireframeComponent]: 'Wireframe Component',
    [ProductTypeId.GraphicsComponent]: 'Graphics Component',
    [ProductTypeId.UIElement]: 'UIElement',
    // ::Intermediate
    [ProductTypeId.UISet]: 'UISet',
    [ProductTypeId.ResponsiveUI]: 'ResponsiveUI',
    // ::Expert
    [ProductTypeId.DocumentationComponent]: 'Documentation Component',
    [ProductTypeId.DesignGuidelines]: 'DesignGuidelines',
    // --------------------
    // Lead Developer
    // --------------------
    // :: Beginner
    [ProductTypeId.InterfaceModule]: 'InterfaceModule',
    [ProductTypeId.FrontendModule]: 'FrontendModule',
    [ProductTypeId.BackendModule]: 'BackendModule',
    [ProductTypeId.InputModule]: 'InputModule',
    [ProductTypeId.StorageModule]: 'StorageModule',
    [ProductTypeId.ContentManagementModule]: 'ContentManagementModule',
    [ProductTypeId.VideoPlaybackModule]: 'VideoPlaybackModule',
    // ::Intermediate
    [ProductTypeId.SeoModule]: 'SeoModule',
    [ProductTypeId.EmailModule]: 'EmailModule',
    [ProductTypeId.DatabaseLayer]: 'DatabaseLayer',
    [ProductTypeId.NotificationModule]: 'NotificationModule',
    [ProductTypeId.AuthenticationModule]: 'AuthenticationModule',
    // ::Expert
    [ProductTypeId.PaymentGatewayModule]: 'PaymentGatewayModule',
    [ProductTypeId.LocalizationModule]: 'LocalizationModule',
    [ProductTypeId.SearchModule]: 'SearchModule',
    [ProductTypeId.BandwidthCompressionModule]: 'BandwidthCompressionModule',
    [ProductTypeId.CodeOptimizationModule]: 'CodeOptimizationModule',
    [ProductTypeId.ApiClientModule]: 'ApiClientModule',
    // --------------------
    // SysAdmin
    // --------------------
    // :: Beginner
    [ProductTypeId.VirtualHardware]: 'VirtualHardware',
    [ProductTypeId.OperatingSystem]: 'OperatingSystem',
    [ProductTypeId.Firewall]: 'Firewall',
    // ::Intermediate
    [ProductTypeId.ProcessManagement]: 'ProcessManagement',
    [ProductTypeId.ContinuousIntegration]: 'ContinuousIntegration',
    [ProductTypeId.CronJob]: 'CronJob',
    // ::Expert
    [ProductTypeId.VirtualContainer]: 'VirtualContainer',
    [ProductTypeId.Cluster]: 'Cluster',
    [ProductTypeId.SwarmManagement]: 'SwarmManagement',
  },
  // ------------------------------
  // RawComponentName
  // ------------------------------
  [TextCategoryId.RawComponentName]: { '0': 'Raw Component' },
};
