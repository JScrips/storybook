import { useOf, Canvas, Stories, Source } from "@storybook/addon-docs/blocks";
import { Tabs } from "react-aria-components";
// Imported Package JSON INFO
import PackageJson from "../../package.json";
// CSS For Custom Blocks
import styles from "./CustomBlocks.module.scss";

const formatComponentTitle = (input: any) => {
  return input
    .split("/")
    .pop()
    .replace(/(?!^)([A-Z])/g, " $1");
};

const getGithubLink = (input: any) => {
  return "https://github.com/Jscrips/storybook/";
};

const getCoverageColorScheme = (coverage: number) => {
  if (coverage >= 80) {
    return {
      backgroundColor: "#e6f4ea",
      color: "#137333",
    };
  } else if (coverage >= 60) {
    return {
      backgroundColor: "#fef7e0",
      color: "#b06000",
    };
  } else {
    return {
      backgroundColor: "#fce8e6",
      color: "#c5221f",
    };
  }
};

export const IntroductionMeta = () => {
  return <div></div>;
};

export const CustomMeta = ({ of }: any) => {
  const resolvedOf = useOf(of || "story", ["story", "meta"]);
  switch (resolvedOf.type) {
    case "story": {
      return (
        <div className={`${styles.masthead}`} style={{ height: "190px" }}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h2 className={`${styles.subheading}`}>T Mike's Library</h2>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                {resolvedOf.story.title !== undefined && (
                  <div
                    style={{
                      borderRadius: "8px",
                      padding: "4px 8px",
                      fontWeight: 600,
                      backgroundColor: resolvedOf.story.title.includes("POC")
                        ? "#fce8e6"
                        : "#e6f4ea",
                      color: resolvedOf.story.title.includes("POC")
                        ? "#c5221f"
                        : "#137333",
                    }}
                  >
                    {resolvedOf.story.title.includes("POC")
                      ? "POC"
                      : "Production Ready"}
                  </div>
                )}
                {resolvedOf.story.title !== undefined &&
                  (resolvedOf.story.title.includes("Accelerator") ||
                    resolvedOf.story.title.includes("Template") ||
                    resolvedOf.story.title.includes("Core Component") ||
                    resolvedOf.story.title.includes("Compound Component") ||
                    resolvedOf.story.title.includes("Beta")) && (
                    <div
                      style={{
                        borderRadius: "8px",
                        padding: "4px 8px",
                        fontWeight: 600,
                        backgroundColor: resolvedOf.story.title.includes(
                          "Accelerator",
                        )
                          ? "#fef7e0"
                          : resolvedOf.story.title.includes("Template")
                            ? "#f3e8fd"
                            : resolvedOf.story.title.includes("Core Component")
                              ? "e8f0fe"
                              : resolvedOf.story.title.includes(
                                    "Composed Component",
                                  )
                                ? "#e3f2fd"
                                : resolvedOf.story.title.includes("Beta")
                                  ? "#fce8e6"
                                  : "#e6f4ea",
                      }}
                    >
                      {resolvedOf.story.title.includes("Accelerator")
                        ? "Accelerator"
                        : ""}
                      {resolvedOf.story.title.includes("Core Component")
                        ? "Core Component"
                        : ""}
                      {resolvedOf.story.title.includes("Template")
                        ? "Template"
                        : ""}
                      {resolvedOf.story.title.includes("Compound COmponent")
                        ? "Compound Component"
                        : ""}
                      {resolvedOf.story.title.includes("Beta") ? "Beta" : ""}
                    </div>
                  )}
              </div>
            </div>
            <h1 className={`${styles.heading}`} style={{ width: "100%" }}>
              {formatComponentTitle(resolvedOf.story.title) || ""}
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                marginTop: "15px",
              }}
            >
              <h2 className={`${styles.subheading}`}>
                Version: {PackageJson.version}
              </h2>

              <h2 className={`${styles.subheading}`}> Code Coverage:</h2>
              <div
                style={{
                  borderRadius: "8px",
                  padding: "4px 8px",
                  fontWeight: 600,
                  ...(resolvedOf.story.parameters.codeCoverage !== undefined
                    ? getCoverageColorScheme(
                        resolvedOf.story.parameters.codeCoverage,
                      )
                    : {
                        backgroundColor: "#f1f3f4",
                        color: "#5f6368",
                      }),
                }}
              >
                {resolvedOf.story.parameters.codeCoverage !== undefined
                  ? `${resolvedOf.story.parameters.codeCoverage}%`
                  : "Coverage Not Available"}
              </div>
            </div>
            <div className={styles.buttonBar}>
              <button
                id="github"
                onClick={() => {
                  window.open(
                    getGithubLink(resolvedOf.story.title) || "",
                    "_blank",
                  );
                }}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
};

export const CustomOverview = ({ of }: any) => {
  const resolvedOf = useOf(of || "story", ["story", "meta"]);
  switch (resolvedOf.type) {
    case "story": {
      return (
        <div>
          {resolvedOf.story.parameters?.overview ? (
            <>
              <div className={`${styles.chip} ${styles.overview}`}>
                Overview
              </div>
              <div className={styles.mdxContent}>
                {resolvedOf.story.parameters?.overview()}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      );
    }
  }
};

export const CustomCanvas = ({ of }: any) => {
  const resolvedOf = useOf(of || "story", ["story", "meta"]);
  switch (resolvedOf.type) {
    case "story": {
      return (
        <div className={styles.mdxNegation}>
          <Canvas withToolbar={true} className={styles.canvas} />
        </div>
      );
    }
  }
};

export const CustomStories = ({ title, ...props }: any) => {
  const resolvedOf = useOf(props.of || "story", ["story", "meta"]);
  switch (resolvedOf.type) {
    case "story": {
      return (
        <div>
          <Stories title={title} {...props} />
        </div>
      );
    }
  }
};

export const CustomFeedback = ({ of }: any) => {
  const resolvedOf = useOf(of || "story", ["story", "meta"]);
  switch (resolvedOf.type) {
    case "story": {
      return (
        <div>
          <span>
            Get Live Support. Help Us Improve
            {formatComponentTitle(resolvedOf.story.title)}
            and The Component Library by leaving feedback!
          </span>
          <br />
          <br />
          <div className={styles["link-list"]}>
            <a className={styles["link-item"]} href={"#"} target="_blank">
              Test
            </a>
          </div>
        </div>
      );
    }
  }
};
