export {};

declare global {
  interface NavItems {
    title: string;
    image: string;
    link: string;
    type: string;
    svg: object;
  }
  interface CustomChart {
    label: string;
    size: number;
    value: number;
  }
  interface DeleteContent {
    title: string;
    subText: string;
    deleteType: string;
    deleteObject: any;
    modalType?: string;
  }
  interface FilesPreview {
    id?: number;
    name: any;
    size: string | number;
    val: any;
    title?: string;
  }
  interface ImageSelectProps {
    multiple?: boolean;
    maxSize?: number;
    width?: number;
    height?: number;
  }
}
