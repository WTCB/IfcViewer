import * as BUI from "@thatopen/ui"
import * as OBC from "@thatopen/components"
import * as CUI from "@thatopen/ui-obc"

export default (components: OBC.Components) => {
    return BUI.Component.create<BUI.Panel>(() => {
        return BUI.html`
            <bim-panel>
                projects
            </bim-panel>
        `;
    });
};