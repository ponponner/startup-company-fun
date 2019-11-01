import { EmployeeType, EMPLOYEE_TYPES } from '@/models/employeeType';
import { EmployeeLevel, EMPLOYEE_LEVELS } from '@/models/employeeLevel';
import { ProductType } from '@/models/productType';

export interface ProductionRequirement {
  id: number;
  productType: ProductType;
  productionTime: number;
  employeeType: EmployeeType;
  employeeLevel: EmployeeLevel;
  parts: Array<{ productType: ProductType; quantity: number }>;
}
export const PRODUCTION_REQUIREMENTS: ProductionRequirement[] = [];

interface Definitions {
  // employeeType
  [key: number]: {
    // employeeLevel
    [key: number]: Array<
      // definition
      [
        ProductType,
        number, // productionTime
        Array<[ProductType, number]> // parts
      ]
    >;
  };
}
const definitions: Definitions = {
  // ------------------------------
  // Developer
  // ------------------------------
  [EmployeeType.Developer]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevel.Beginner]: [
      // [productType, productionTime, parts]
      [ProductType.UIComponent, 2, []],
      [ProductType.BackendComponent, 4, []],
      [ProductType.NetworkComponent, 6, []],
      [ProductType.DatabaseComponent, 4, []],
      [ProductType.VideoComponent, 14, []],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevel.Intermediate]: [
      [ProductType.SemanticComponent, 3, []],
      [ProductType.SmtpComponent, 8, []],
      [ProductType.EncryptionComponent, 8, []],
      [ProductType.FilesystemComponent, 4, []],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevel.Expert]: [
      [ProductType.I18nComponent, 4, []],
      [ProductType.SearchAlgorithmComponent, 12, []],
      [ProductType.CompressionComponent, 8, []],
    ],
  },
  // ------------------------------
  // Designer
  // ------------------------------
  [EmployeeType.Designer]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevel.Beginner]: [
      [ProductType.BlueprintComponent, 2, []],
      [ProductType.WireframeComponent, 3, []],
      [ProductType.GraphicsComponent, 4, []],
      [
        ProductType.UIElement,
        6,
        [
          [ProductType.BlueprintComponent, 1],
          [ProductType.GraphicsComponent, 1],
        ],
      ],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevel.Intermediate]: [
      [
        ProductType.UISet,
        18,
        [
          [ProductType.WireframeComponent, 2],
          [ProductType.UIElement, 2],
          //
        ],
      ],
      [
        ProductType.ResponsiveUI,
        18,
        [
          [ProductType.WireframeComponent, 2],
          [ProductType.UIElement, 2],
          //
        ],
      ],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevel.Expert]: [
      [ProductType.DocumentationComponent, 12, []],
      [
        ProductType.DesignGuidelines,
        90,
        [
          [ProductType.DocumentationComponent, 3],
          [ProductType.ResponsiveUI, 3],
          //
        ],
      ],
    ],
  },
  // ------------------------------
  // Lead Developer
  // ------------------------------
  [EmployeeType.LeadDeveloper]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevel.Beginner]: [
      [
        ProductType.InterfaceModule,
        15,
        [
          [ProductType.UIElement, 2],
          [ProductType.WireframeComponent, 1],
          //
        ],
      ],
      [
        ProductType.FrontendModule,
        21,
        [
          [ProductType.UIElement, 1],
          [ProductType.InterfaceModule, 1],
          //
        ],
      ],
      [
        ProductType.BackendModule,
        10,
        [
          [ProductType.BackendComponent, 1],
          [ProductType.NetworkComponent, 1],
          //
        ],
      ],
      [
        ProductType.InputModule,
        6,
        [
          [ProductType.UIComponent, 1],
          [ProductType.BackendComponent, 1],
          //
        ],
      ],
      [
        ProductType.StorageModule,
        8,
        [
          [ProductType.FilesystemComponent, 1],
          [ProductType.BackendComponent, 1],
          //
        ],
      ],
      [
        ProductType.ContentManagementModule,
        37,
        [
          [ProductType.FrontendModule, 1],
          [ProductType.InputModule, 1],
          [ProductType.BackendModule, 1],
          //
        ],
      ],
      [
        ProductType.VideoPlaybackModule,
        45,
        [
          [ProductType.VideoComponent, 1],
          [ProductType.FrontendModule, 1],
          [ProductType.BackendModule, 1],
          //
        ],
      ],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevel.Intermediate]: [
      [
        ProductType.SeoModule,
        24,
        [
          [ProductType.FrontendModule, 1],
          [ProductType.SemanticComponent, 1],
          //
        ],
      ],
      [
        ProductType.EmailModule,
        12,
        [
          [ProductType.SmtpComponent, 1],
          [ProductType.BackendComponent, 1],
          //
        ],
      ],
      [
        ProductType.DatabaseLayer,
        14,
        [
          [ProductType.DatabaseComponent, 1],
          [ProductType.BackendComponent, 1],
          [ProductType.NetworkComponent, 1],
        ],
      ],
      [
        ProductType.NotificationModule,
        18,
        [
          [ProductType.UIComponent, 1],
          [ProductType.BackendComponent, 1],
          [ProductType.EmailModule, 1],
        ],
      ],
      [
        ProductType.AuthenticationModule,
        22,
        [
          [ProductType.DatabaseComponent, 1],
          [ProductType.EncryptionComponent, 1],
          [ProductType.BackendComponent, 1],
        ],
      ],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevel.Expert]: [
      [
        ProductType.PaymentGatewayModule,
        76,
        [
          [ProductType.PaymentGatewayModule, 1],
          [ProductType.ApiClientModule, 1],
          [ProductType.AuthenticationModule, 1],
        ],
      ],
      [
        ProductType.LocalizationModule,
        25,
        [
          [ProductType.I18nComponent, 1],
          [ProductType.FrontendModule, 1],
          //
        ],
      ],
      [
        ProductType.SearchModule,
        20,
        [
          [ProductType.DatabaseComponent, 1],
          [ProductType.SearchAlgorithmComponent, 1],
          [ProductType.BackendComponent, 1],
        ],
      ],
      [
        ProductType.BandwidthCompressionModule,
        18,
        [
          [ProductType.BandwidthCompressionModule, 1],
          [ProductType.NetworkComponent, 1],
          [ProductType.BackendComponent, 1],
        ],
      ],
      [
        ProductType.CodeOptimizationModule,
        90,
        [
          [ProductType.BackendModule, 2],
          [ProductType.DatabaseLayer, 2],
          [ProductType.FrontendModule, 2],
        ],
      ],
      [
        ProductType.ApiClientModule,
        40,
        [
          [ProductType.BackendModule, 1],
          [ProductType.DatabaseLayer, 1],
          [ProductType.CompressionComponent, 2],
        ],
      ],
    ],
  },
  // ------------------------------
  // SysAdmin
  // ------------------------------
  [EmployeeType.SysAdmin]: {
    // ----------
    // Beginner
    // ----------
    [EmployeeLevel.Beginner]: [
      [ProductType.VirtualHardware, 4, []],
      [ProductType.OperatingSystem, 4, []],
      [ProductType.Firewall, 4, []],
    ],
    // ----------
    // Intermediate
    // ----------
    [EmployeeLevel.Intermediate]: [
      [ProductType.ProcessManagement, 6, []],
      [ProductType.ContinuousIntegration, 8, []],
      [ProductType.CronJob, 3, []],
    ],
    // ----------
    // Expert
    // ----------
    [EmployeeLevel.Expert]: [
      [
        ProductType.VirtualContainer,
        25,
        [
          [ProductType.VirtualHardware, 1],
          [ProductType.OperatingSystem, 1],
          [ProductType.ProcessManagement, 1],
          [ProductType.ContinuousIntegration, 1],
          [ProductType.CronJob, 1],
          //
        ],
      ],
      [
        ProductType.Cluster,
        115,
        [
          [ProductType.VirtualContainer, 3],
          [ProductType.Firewall, 10],
          //
        ],
      ],
      [
        ProductType.SwarmManagement,
        140,
        [
          [ProductType.Cluster, 1],
          [ProductType.VirtualContainer, 1],
          //
        ],
      ],
    ],
  },
};
function loadDefinitions() {
  let id = 0;
  for (const employeeType of EMPLOYEE_TYPES) {
    for (const employeeLevel of EMPLOYEE_LEVELS) {
      for (const def of definitions[employeeType][employeeLevel]) {
        const productType: ProductType = def[0];
        const productionTime: number = def[1];
        const parts: Array<{
          productType: ProductType;
          quantity: number;
        }> = def[2].map(o => {
          return { productType: o[0], quantity: o[1] };
        });
        PRODUCTION_REQUIREMENTS[id] = {
          id,
          productType,
          productionTime,
          employeeType,
          employeeLevel,
          parts,
          //
        };
        id += 1;
      }
    }
  }
}
// 生産所要の定義を読み込む
loadDefinitions();
