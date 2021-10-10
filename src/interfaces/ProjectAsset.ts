import { ContentType } from "../enums";

export interface ProjectAsset {
  src: string;
  kind: ContentType;
  link: string | undefined;
}
