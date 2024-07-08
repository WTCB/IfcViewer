import * as OBC from "@thatopen/components"
import * as BUI from "@thatopen/ui"


export default (components: OBC.Components) => {
  async function showProjects(){
    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);
    const indexer = components.get(OBC.IfcRelationsIndexer);
    const worlds = components.get(OBC.Worlds);

    const file = await fetch(
      "https://thatopen.github.io/engine_components/resources/small.ifc",
    );

    const data = await file.arrayBuffer();
    const buffer = new Uint8Array(data);
    const model = await fragmentIfcLoader.load(buffer);
    model.name = "example";
    worlds.list.get('main')!.scene.three.add(model);

    //TODO: show panel with predefined projects
    //console.log('showProjects');
  }

  return BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
      <bim-toolbar-section label="Import" icon="solar:import-bold">
        <bim-button @click=${showProjects} label="Load Project" icon="fluent:puzzle-cube-piece-20-filled" tooltip-title="Load Projects"
          tooltip-text="Loads a project"></bim-button>
      </bim-toolbar-section>
    `
  })
}