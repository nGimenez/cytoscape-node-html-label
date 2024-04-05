declare type IHAlign = "left" | "center" | "right";
declare type IVAlign = "top" | "center" | "bottom";
interface NodeRequireFunction {
    (id: string): any;
}
interface NodeModule {
    exports: any;
    require: NodeRequireFunction;
    id: string;
    filename: string;
    loaded: boolean;
    parent: NodeModule | null | undefined;
    children: NodeModule[];
    path: string;
    paths: string[];
}
declare var module: NodeModule;
declare var define: any;
declare var cytoscape: typeof cytoscape;
interface CytoscapeNodeHtmlParams {
    query?: string;
    halign?: IHAlign;
    valign?: IVAlign;
    halignBox?: IHAlign;
    valignBox?: IVAlign;
    cssClass?: string;
    tpl?: (d: any) => string;
}
interface CytoscapeContainerParams {
    enablePointerEvents?: boolean;
}
declare module 'cytoscape-node-html-label';
