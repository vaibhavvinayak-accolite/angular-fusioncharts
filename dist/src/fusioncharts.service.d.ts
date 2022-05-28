import * as ɵngcc0 from '@angular/core';
export declare class FusionChartsStatic {
    core: any;
    modules: Function[];
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FusionChartsStatic, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<FusionChartsStatic>;
}
export declare class FusionChartsService {
    static _fcRoot: any;
    static itemCount: any;
    _fusionchartsStatice: FusionChartsStatic;
    static setFCRoot(fcRoot: any): void;
    static getFCRoot(): any;
    static isFCRootSet(): boolean;
    constructor(FCStatic: FusionChartsStatic);
    resolveFusionCharts(core: any, modules: any[]): void;
    getFusionChartsStatic(): FusionChartsStatic;
    getNextItemCount(): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FusionChartsService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<FusionChartsService>;
}

//# sourceMappingURL=fusioncharts.service.d.ts.map