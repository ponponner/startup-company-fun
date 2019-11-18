import { PrimitiveHash } from '@/helpers/collections';
import {
  EmployeeLevelId,
  EmployeeTypeId,
  ProductTypeId,
  //
} from '@/data/ids';

// --------------------------------------------------
// HierarcalDefinitions
// --------------------------------------------------
type Part = [ProductTypeId, number];
// [EmployeeTypeId][EmployeeLevelId]
type HierarcalDefinitions = PrimitiveHash<
  PrimitiveHash<
    Array<
      [
        ProductTypeId,
        number, // productionTime
        Part[] // parts
      ]
    >
  >
>;
const hierarcalDefinitions: HierarcalDefinitions = {
  // ------------------------------
  // Developer
  // ------------------------------
  [EmployeeTypeId.Developer]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevelId.Beginner]: [
      // [productTypeId, productionTime, parts]
      [ProductTypeId.UIComponent, 2, []],
      [ProductTypeId.BackendComponent, 4, []],
      [ProductTypeId.NetworkComponent, 6, []],
      [ProductTypeId.DatabaseComponent, 4, []],
      [ProductTypeId.VideoComponent, 14, []],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevelId.Intermediate]: [
      [ProductTypeId.SemanticComponent, 3, []],
      [ProductTypeId.SmtpComponent, 8, []],
      [ProductTypeId.EncryptionComponent, 8, []],
      [ProductTypeId.FilesystemComponent, 4, []],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevelId.Expert]: [
      [ProductTypeId.I18nComponent, 4, []],
      [ProductTypeId.SearchAlgorithmComponent, 12, []],
      [ProductTypeId.CompressionComponent, 8, []],
    ],
  },
  // ------------------------------
  // Designer
  // ------------------------------
  [EmployeeTypeId.Designer]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevelId.Beginner]: [
      [ProductTypeId.BlueprintComponent, 2, []],
      [ProductTypeId.WireframeComponent, 3, []],
      [ProductTypeId.GraphicsComponent, 4, []],
      [
        ProductTypeId.UIElement,
        6,
        [
          [ProductTypeId.BlueprintComponent, 1],
          [ProductTypeId.GraphicsComponent, 1],
        ],
      ],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevelId.Intermediate]: [
      [
        ProductTypeId.UISet,
        18,
        [
          [ProductTypeId.WireframeComponent, 2],
          [ProductTypeId.UIElement, 2],
          //
        ],
      ],
      [
        ProductTypeId.ResponsiveUI,
        18,
        [
          [ProductTypeId.WireframeComponent, 2],
          [ProductTypeId.UIElement, 2],
          //
        ],
      ],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevelId.Expert]: [
      [ProductTypeId.DocumentationComponent, 12, []],
      [
        ProductTypeId.DesignGuidelines,
        90,
        [
          [ProductTypeId.DocumentationComponent, 3],
          [ProductTypeId.ResponsiveUI, 3],
          //
        ],
      ],
    ],
  },
  // ------------------------------
  // Lead Developer
  // ------------------------------
  [EmployeeTypeId.LeadDeveloper]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevelId.Beginner]: [
      [
        ProductTypeId.InterfaceModule,
        15,
        [
          [ProductTypeId.UIElement, 2],
          [ProductTypeId.WireframeComponent, 1],
          //
        ],
      ],
      [
        ProductTypeId.FrontendModule,
        21,
        [
          [ProductTypeId.UIElement, 1],
          [ProductTypeId.InterfaceModule, 1],
          //
        ],
      ],
      [
        ProductTypeId.BackendModule,
        10,
        [
          [ProductTypeId.BackendComponent, 1],
          [ProductTypeId.NetworkComponent, 1],
          //
        ],
      ],
      [
        ProductTypeId.InputModule,
        6,
        [
          [ProductTypeId.UIComponent, 1],
          [ProductTypeId.BackendComponent, 1],
          //
        ],
      ],
      [
        ProductTypeId.StorageModule,
        8,
        [
          [ProductTypeId.FilesystemComponent, 1],
          [ProductTypeId.BackendComponent, 1],
          //
        ],
      ],
      [
        ProductTypeId.ContentManagementModule,
        37,
        [
          [ProductTypeId.FrontendModule, 1],
          [ProductTypeId.InputModule, 1],
          [ProductTypeId.BackendModule, 1],
          //
        ],
      ],
      [
        ProductTypeId.VideoPlaybackModule,
        45,
        [
          [ProductTypeId.VideoComponent, 1],
          [ProductTypeId.FrontendModule, 1],
          [ProductTypeId.BackendModule, 1],
          //
        ],
      ],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevelId.Intermediate]: [
      [
        ProductTypeId.SeoModule,
        24,
        [
          [ProductTypeId.FrontendModule, 1],
          [ProductTypeId.SemanticComponent, 1],
          //
        ],
      ],
      [
        ProductTypeId.EmailModule,
        12,
        [
          [ProductTypeId.SmtpComponent, 1],
          [ProductTypeId.BackendComponent, 1],
          //
        ],
      ],
      [
        ProductTypeId.DatabaseLayer,
        14,
        [
          [ProductTypeId.DatabaseComponent, 1],
          [ProductTypeId.BackendComponent, 1],
          [ProductTypeId.NetworkComponent, 1],
        ],
      ],
      [
        ProductTypeId.NotificationModule,
        18,
        [
          [ProductTypeId.UIComponent, 1],
          [ProductTypeId.BackendComponent, 1],
          [ProductTypeId.EmailModule, 1],
        ],
      ],
      [
        ProductTypeId.AuthenticationModule,
        22,
        [
          [ProductTypeId.DatabaseComponent, 1],
          [ProductTypeId.EncryptionComponent, 1],
          [ProductTypeId.BackendComponent, 1],
        ],
      ],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevelId.Expert]: [
      [
        ProductTypeId.PaymentGatewayModule,
        76,
        [
          [ProductTypeId.PaymentGatewayModule, 1],
          [ProductTypeId.ApiClientModule, 1],
          [ProductTypeId.AuthenticationModule, 1],
        ],
      ],
      [
        ProductTypeId.LocalizationModule,
        25,
        [
          [ProductTypeId.I18nComponent, 1],
          [ProductTypeId.FrontendModule, 1],
          //
        ],
      ],
      [
        ProductTypeId.SearchModule,
        20,
        [
          [ProductTypeId.DatabaseComponent, 1],
          [ProductTypeId.SearchAlgorithmComponent, 1],
          [ProductTypeId.BackendComponent, 1],
        ],
      ],
      [
        ProductTypeId.BandwidthCompressionModule,
        18,
        [
          [ProductTypeId.BandwidthCompressionModule, 1],
          [ProductTypeId.NetworkComponent, 1],
          [ProductTypeId.BackendComponent, 1],
        ],
      ],
      [
        ProductTypeId.CodeOptimizationModule,
        90,
        [
          [ProductTypeId.BackendModule, 2],
          [ProductTypeId.DatabaseLayer, 2],
          [ProductTypeId.FrontendModule, 2],
        ],
      ],
      [
        ProductTypeId.ApiClientModule,
        40,
        [
          [ProductTypeId.BackendModule, 1],
          [ProductTypeId.DatabaseLayer, 1],
          [ProductTypeId.CompressionComponent, 2],
        ],
      ],
    ],
  },
  // ------------------------------
  // SysAdmin
  // ------------------------------
  [EmployeeTypeId.SysAdmin]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevelId.Beginner]: [
      [ProductTypeId.VirtualHardware, 4, []],
      [ProductTypeId.OperatingSystem, 4, []],
      [ProductTypeId.Firewall, 4, []],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevelId.Intermediate]: [
      [ProductTypeId.ProcessManagement, 6, []],
      [ProductTypeId.ContinuousIntegration, 8, []],
      [ProductTypeId.CronJob, 3, []],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevelId.Expert]: [
      [
        ProductTypeId.VirtualContainer,
        25,
        [
          [ProductTypeId.VirtualHardware, 1],
          [ProductTypeId.OperatingSystem, 1],
          [ProductTypeId.ProcessManagement, 1],
          [ProductTypeId.ContinuousIntegration, 1],
          [ProductTypeId.CronJob, 1],
          //
        ],
      ],
      [
        ProductTypeId.Cluster,
        115,
        [
          [ProductTypeId.VirtualContainer, 3],
          [ProductTypeId.Firewall, 10],
          //
        ],
      ],
      [
        ProductTypeId.SwarmManagement,
        140,
        [
          [ProductTypeId.Cluster, 1],
          [ProductTypeId.VirtualContainer, 1],
          //
        ],
      ],
    ],
  },
};

// --------------------------------------------------
// FlatDefinitions
// --------------------------------------------------
interface FlatDefinition {
  id: string;
  productTypeId: string;
  employeeTypeId: string;
  employeeLevelId: string;
  parts: Array<{ productTypeId: string; quantity: number }>;
  productionTime: number;
}
const flatDefinitions: FlatDefinition[] = [];

// hierarcalDefinitions ---> flatDefinitions
for (const [employeeTypeId, hash2] of Object.entries(hierarcalDefinitions)) {
  for (const [employeeLevelId, etcs] of Object.entries(hash2)) {
    for (const etc of etcs) {
      const productTypeId = etc[0];
      const productionTime = etc[1];
      const parts = etc[2].map(x => {
        return { productTypeId: '' + x[0], quantity: x[1] };
      });
      flatDefinitions.push({
        id: '' + flatDefinitions.length,
        productTypeId: '' + productTypeId,
        employeeTypeId,
        employeeLevelId,
        parts,
        productionTime,
      });
    }
  }
}

export const PRODUCTION_REQUIREMENT_DEFINITIONS = flatDefinitions;
