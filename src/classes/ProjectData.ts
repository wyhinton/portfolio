import { ContentType } from "../enums";
import { ProjectAsset } from "../interfaces/ProjectAsset";
import RawProjectRow from "../interfaces/RawProjectRow";

export default class ProjectData {
  readonly title: string;
  readonly category: string;
  readonly date: Date;
  readonly tags: string[];
  readonly description: string;
  readonly assets: ProjectAsset[];
  readonly link: string | undefined;

  constructor(row: RawProjectRow) {
    this.title = row.title;
    this.date = new Date(row.date);
    this.tags = row.tags.split(",");
    this.category = row.category;
    this.description = row.description;
    this.assets = makeAssets(row);
  }
}

function makeAssets(row: RawProjectRow): ProjectAsset[] {
  let assetSourceArray: string[][] = [];
  let assetTypeArray: string[][] = [];
  let assetLinkArray: string[][] = [];

  for (const [k, v] of Object.entries(row)) {
    if (k.includes("asset") && v !== "NA") {
      assetSourceArray.push([k, v]);
    }

    if (k.includes("Type") && v !== "NA") {
      assetTypeArray.push([k, v]);
    }
    if (k.includes("Link")) {
      assetLinkArray.push([k, v]);
    }
  }
  const finalassets: ProjectAsset[] = assetSourceArray.map((source, i) => {
    const src = generateUrl(source[1]);
    const kind = ContentType[assetTypeArray[i][1] as keyof typeof ContentType];
    const link =
      assetLinkArray[i][1] === "NA" ? undefined : assetLinkArray[i][1];
    const asset = {
      src: src,
      kind: kind,
      link: link,
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
