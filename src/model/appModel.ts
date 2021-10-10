import { Action, Thunk, action, debug, thunk } from "easy-peasy";
import Papa, { ParseConfig } from "papaparse";

import ProjectData from "../classes/ProjectData";
import ProjectSheetKey from "../static/ProjectSheetKey";
import RawProjectRow from "../interfaces/RawProjectRow";
import SheetId from "../interfaces/SheetId";

export interface AppDataModel {
  availableProjects: ProjectData[];
  workProjects: ProjectData[];
  playProjects: ProjectData[];
  fetchAppGoogleSheet: Thunk<AppDataModel>;
  setProjectSheet: Action<AppDataModel, ProjectData[]>;
  setWorkProjects: Action<AppDataModel, ProjectData[]>;
  setPlayProjects: Action<AppDataModel, ProjectData[]>;
}

interface LoadSheetResult {
  rows: unknown[];
  sheetTitle: string;
}

const appModel: AppDataModel = {
  availableProjects: [],
  workProjects: [],
  playProjects: [],
  setProjectSheet: action((state, googleSheet) => {
    state.availableProjects = googleSheet;
  }),
  setWorkProjects: action((state, workProjectDataArray) => {
    state.workProjects = workProjectDataArray;
  }),
  setPlayProjects: action((state, playProjectsDataArray) => {
    state.playProjects = playProjectsDataArray;
  }),
  fetchAppGoogleSheet: thunk(async (actions) => {
    const getCardDataResponse = parseData("Projects", ProjectSheetKey).then(
      (result) => {
        console.log(result);
        const rows = result.rows as RawProjectRow[];
        const finalRows = rows.map((r) => new ProjectData(r));
        const workProjects = finalRows.filter((row) => row.category === "WORK");
        const playProjects = finalRows.filter((row) => row.category === "PLAY");
        // const playProjects = finalRows.filter((row) => {
        //   console.log(row.category);
        // });
        console.log(finalRows);
        console.log(workProjects);
        console.log(playProjects);
        actions.setProjectSheet(finalRows);
        actions.setPlayProjects(playProjects);
        actions.setWorkProjects(workProjects);
      }
    );
  }),
};

export default appModel;

function parseData(
  sheetTitle: string,
  sheetId: SheetId
): Promise<LoadSheetResult> {
  let data;
  const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId.key}/export?format=csv&gid=${sheetId.gid}`;
  return new Promise<LoadSheetResult>((resolve) => {
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      delimiter: ",",
      dynamicTyping: true,
      complete: (results: Papa.ParseResult<unknown>) => {
        data = results.data;
        resolve({ rows: data, sheetTitle: sheetTitle });
      },
    });
  });
}
