declare module '*.scss' {
  interface Styles {
    [key: string]: string;
  }
  const content: Styles;
  export default content;
}
