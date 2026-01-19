import { Tabs, TabList, Tab, TabPanels, TabPanel } from "react-aria-components";
import {
  CustomOverview,
  CustomMeta,
  CustomCanvas,
  CustomFeedback,
  CustomStories,
} from "./CustomBlocks";

import styles from "./CustomBlocks.module.scss";

const AutoDocs = () => {
  return (
    <div className={styles.mdxContent}>
      <CustomMeta />
      <br />
      <div>
        <h2> Support and Feedback</h2>
        <br />
        <CustomFeedback />
      </div>
      <br />
      <hr />
      <br />
      <Tabs>
        <TabList aria-label="Tabs" className="flex gap-2">
          <Tab id="Overview" className="hover:cursor-pointer">
            Overview
          </Tab>
          <Tab id="Props" className="hover:cursor-pointer">
            Props
          </Tab>
          <Tab id="Examples" className="hover:cursor-pointer">
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
          <TabPanel id="Props"></TabPanel>
        </TabPanels>
        <TabPanels>
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
    </div>
  );
};

export default AutoDocs;
