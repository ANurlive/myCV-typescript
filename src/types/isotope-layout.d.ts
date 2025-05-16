declare module "isotope-layout" {
  export default class Isotope {
    constructor(element: Element | string, options?: any);
    arrange(options?: any): void;
    layout(): void;
    destroy(): void;
  }
}
