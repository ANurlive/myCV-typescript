declare module "isotope-layout" {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    percentPosition?: boolean;
    transitionDuration?: number | string;
    stagger?: number | string;
    hiddenStyle?: Partial<CSSStyleDeclaration>;
    visibleStyle?: Partial<CSSStyleDeclaration>;
    getSortData?: {
      [key: string]: (element: Element) => string | number;
    };
    sortBy?: string;
    sortAscending?: boolean | { [key: string]: boolean };
    filter?: string | ((element: Element) => boolean);
  }

  interface ArrangeOptions {
    filter?: string | ((element: Element) => boolean);
    sortBy?: string;
    sortAscending?: boolean;
    layoutMode?: string;
  }

  export default class Isotope {
    constructor(element: Element | string, options?: IsotopeOptions);
    arrange(options?: ArrangeOptions): void;
    layout(): void;
    destroy(): void;
    reloadItems(): void;

  }
}
