declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.module.css";


declare namespace JSX {
    interface IntrinsicElements {
        'sw-auth': any
    }
}