declare interface IClientWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'ClientWebPartStrings' {
  const strings: IClientWebPartStrings;
  export = strings;
}
