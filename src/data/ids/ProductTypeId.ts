import { toStringsByIds } from './__utils';

export enum ProductTypeId {
  // ------------------------------
  // Developer
  // ------------------------------
  // ::Beginner
  UIComponent,
  BackendComponent,
  NetworkComponent,
  DatabaseComponent,
  VideoComponent,
  // ::Intermediate
  SemanticComponent,
  SmtpComponent,
  EncryptionComponent,
  FilesystemComponent,
  // ::Expert
  I18nComponent,
  SearchAlgorithmComponent,
  CompressionComponent,
  // ------------------------------
  // Designer
  // ------------------------------
  // :: Beginner
  BlueprintComponent,
  WireframeComponent,
  GraphicsComponent,
  UIElement,
  // ::Intermediate
  UISet,
  ResponsiveUI,
  // ::Expert
  DocumentationComponent,
  DesignGuidelines,
  // ------------------------------
  // Lead Developer
  // ------------------------------
  // :: Beginner
  InterfaceModule,
  FrontendModule,
  BackendModule,
  InputModule,
  StorageModule,
  ContentManagementModule,
  VideoPlaybackModule,
  // ::Intermediate
  SeoModule,
  EmailModule,
  DatabaseLayer,
  NotificationModule,
  AuthenticationModule,
  // ::Expert
  PaymentGatewayModule,
  LocalizationModule,
  SearchModule,
  BandwidthCompressionModule,
  CodeOptimizationModule,
  ApiClientModule,
  // ------------------------------
  // SysAdmin
  // ------------------------------
  // :: Beginner
  VirtualHardware,
  OperatingSystem,
  Firewall,
  // ::Intermediate
  ProcessManagement,
  ContinuousIntegration,
  CronJob,
  // ::Expert
  VirtualContainer,
  Cluster,
  SwarmManagement,
}
export const PRODUCT_TYPE_IDS: string[] = toStringsByIds([
  // ------------------------------
  // Developer
  // ------------------------------
  // ::Beginner
  ProductTypeId.UIComponent,
  ProductTypeId.BackendComponent,
  ProductTypeId.NetworkComponent,
  ProductTypeId.DatabaseComponent,
  ProductTypeId.VideoComponent,
  // ::Intermediate
  ProductTypeId.SemanticComponent,
  ProductTypeId.SmtpComponent,
  ProductTypeId.EncryptionComponent,
  ProductTypeId.FilesystemComponent,
  // ::Expert
  ProductTypeId.I18nComponent,
  ProductTypeId.SearchAlgorithmComponent,
  ProductTypeId.CompressionComponent,
  // ------------------------------
  // Designer
  // ------------------------------
  // :: Beginner
  ProductTypeId.BlueprintComponent,
  ProductTypeId.WireframeComponent,
  ProductTypeId.GraphicsComponent,
  ProductTypeId.UIElement,
  // ::Intermediate
  ProductTypeId.UISet,
  ProductTypeId.ResponsiveUI,
  // ::Expert
  ProductTypeId.DocumentationComponent,
  ProductTypeId.DesignGuidelines,
  // ------------------------------
  // Lead Developer
  // ------------------------------
  // :: Beginner
  ProductTypeId.InterfaceModule,
  ProductTypeId.FrontendModule,
  ProductTypeId.BackendModule,
  ProductTypeId.InputModule,
  ProductTypeId.StorageModule,
  ProductTypeId.ContentManagementModule,
  ProductTypeId.VideoPlaybackModule,
  // ::Intermediate
  ProductTypeId.SeoModule,
  ProductTypeId.EmailModule,
  ProductTypeId.DatabaseLayer,
  ProductTypeId.NotificationModule,
  ProductTypeId.AuthenticationModule,
  // ::Expert
  ProductTypeId.PaymentGatewayModule,
  ProductTypeId.LocalizationModule,
  ProductTypeId.SearchModule,
  ProductTypeId.BandwidthCompressionModule,
  ProductTypeId.CodeOptimizationModule,
  ProductTypeId.ApiClientModule,
  // ------------------------------
  // SysAdmin
  // ------------------------------
  // :: Beginner
  ProductTypeId.VirtualHardware,
  ProductTypeId.OperatingSystem,
  ProductTypeId.Firewall,
  // ::Intermediate
  ProductTypeId.ProcessManagement,
  ProductTypeId.ContinuousIntegration,
  ProductTypeId.CronJob,
  // ::Expert
  ProductTypeId.VirtualContainer,
  ProductTypeId.Cluster,
  ProductTypeId.SwarmManagement,
]);
