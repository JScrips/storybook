import { ArgTypes } from "@storybook/addon-docs/blocks";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "react-aria-components";
import {
  CustomOverview,
  CustomMeta,
  CustomCanvas,
  CustomFeedback,
  CustomStories,
} from "./CustomBlocks";

import styles from "./CustomBlocks.module.scss";

const tabStyles = {
  base: "px-4 py-2  cursor-pointer text-gray-600 transition-all outline-none",
  hovered: "data-[hovered]: data-[hovered]:text-gray-900",
  selected:
    "data-[selected]:border-b-2 border-blue-500 data-[selected]:text-black",
  focusVisible:
    "data-[focus-visible]:ring-2 data-[focus-visible]:ring-blue-500 data-[focus-visible]:ring-offset-2",
};

const tabClassName = `${tabStyles.base} ${tabStyles.hovered} ${tabStyles.selected} ${tabStyles.focusVisible}`;

const AutoDocs = () => {
  return (
    <div className={styles.mdxContent}>
      <CustomMeta />
      <br />
      <Tabs className="text-black">
        <TabList aria-label="Tabs" className="flex gap-2">
          <Tab id="Overview" className={tabClassName}>
            Overview
          </Tab>
          <Tab id="Props" className={tabClassName}>
            Props
          </Tab>
          <Tab id="Examples" className={tabClassName}>
            Examples
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="Overview">
            <div>
              {/*OVerview*/}
              <CustomOverview />
              <h2> Usage Examples</h2>
              <CustomCanvas />
              <br />
            </div>
          </TabPanel>
          <TabPanel id="Props">
            <div>
              <div className={`${styles.chip} ${styles.props}`}>Props</div>
              <p style={{ fontSize: "16px", marginTop: "16px" }}>
                This table contains the Mandatory (*Marked with *) and Optional
                this.props.for this component. Subcomponent props can be found
                in the additional tabs below.
              </p>
              <ArgTypes
                sort="requiredFirst"
                exclude={/.*(aria-|accessible).*/i}
              />
              <div className={`${styles.chip} ${styles.props}`}>
                Accessibility Props
              </div>
              <p style={{ fontSize: "16px", marginTop: "16px" }}>
                This table contains the supported ARIA ( Accessibility ) props
                for this component.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "16px",
                  padding: "16px",
                  backgroundColor: "#f1f3f4",
                  borderRadius: "6px",
                  color: "#5f6368",
                  fontStyle: "italic",
                }}
              >
                <strong>Note:</strong> If this table is empty, it means that
                this component does not currently support accessibility props.
                Complex components may accept ARIA props on subcomponents
                instead; please select their respective documentation tabs below
                or refer to the subcomponents' main docs page for details.
              </p>
              <ArgTypes
                sort="requiredFirst"
                include={/.*(aria-|accesible).*/i}
              />
            </div>
          </TabPanel>
          <TabPanel id="Examples">
            <div>
              <div className={`${styles.chip} ${styles.examples}`}>
                Examples
              </div>
              <CustomStories title={""} />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <br />
      <div>
        <h2> Support and Feedback</h2>
        <br />
        <CustomFeedback />
      </div>
    </div>
  );
};

export default AutoDocs;
