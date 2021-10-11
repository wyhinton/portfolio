import { ContentType } from "../enums";
import { ProjectAssetData } from "../interfaces/ProjectAssetData";
import RawProjectRow from "../interfaces/RawProjectRow";

export default class ProjectData {
  readonly title: string;
  readonly category: string;
  readonly date: Date;
  readonly tags: string[];
  readonly description: string;
  readonly assets: ProjectAssetData[];
  readonly link: string;
  readonly hide: boolean;

  constructor(row: RawProjectRow) {
    console.log(row.hide);
    this.title = row.title;
    this.date = new Date(row.date);
    this.tags = row.tags.split(",");
    this.category = row.category;
    this.description = row.description;
    this.assets = makeAssets(row);
    this.hide = row.hide;
    this.link = row.link;
  }
}

function makeAssets(row: RawProjectRow): ProjectAssetData[] {
  const assetSourceArray: string[][] = [];
  const assetTypeArray: string[][] = [];
  const assetLinkArray: string[][] = [];
  const captionLinkArray: string[][] = [];

  for (const [k, v] of Object.entries(row)) {
    if (k.includes("asset") && v !== "NA") {
      assetSourceArray.push([k, v]);
    }

    if (k.includes("Type") && v !== "NA") {
      assetTypeArray.push([k, v]);
    }

    if (k.includes("Caption")) {
      captionLinkArray.push([k, v]);
    }
  }
  const finalassets: ProjectAssetData[] = assetSourceArray.map((source, i) => {
    const src = generateUrl(source[1]);
    const kind = ContentType[assetTypeArray[i][1] as keyof typeof ContentType];
    const caption = captionLinkArray[i][1];

    const asset = {
      src: src,
      kind: kind,
      caption: caption,
    };
    return asset;
  });
  console.log(assetSourceArray.length);
  console.log(assetTypeArray.length);
  return finalassets;
}

//is it a local file or remote?
const generateUrl = (src: string): string => {
  if (src.includes("https")) {
    return src;
  } else {
    return `${process.env.PUBLIC_URL}/${src}`;
  }
};
