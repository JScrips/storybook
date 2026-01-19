import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "storybook/viewport";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import AutoDocs from "../documentation/AutoDocs";

const actions = {};

const controls = {
  matchers: {
    color: /(background|color)$/i,
    date: /Date$/,
  },
};

const CustomDocsContainer = ({ children, ...props }: any) => {
  return (
    <DocsContainer {...props}>
      <div>{children}</div>
    </DocsContainer>
  );
};
const docs = {
  container: CustomDocsContainer,
  page: AutoDocs,
  codePanel: true,
};

const CUSTOM_VIEWPORTS = {
  LargeDesktopScreen: {
    name: "Large Desktop Screen",
    styles: {
      width: "1440px",
      height: "2560px",
    },
  },
};

const viewport = {
  options: {
    ...INITIAL_VIEWPORTS,
    ...MINIMAL_VIEWPORTS,
    ...CUSTOM_VIEWPORTS,
  },
};

const previewTabs = {
  "storybook/docs/panel": {
    index: -1,
  },
  canvas: { title: "Sandbox" },
};

export const parameters = {
  actions,
  controls,
  docs,
  previewTabs,
  viewport,
};
