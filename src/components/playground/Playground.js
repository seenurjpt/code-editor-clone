import React, { useEffect, useState } from "react";
import Split from "@uiw/react-split";
import Group from "../file-group/Group";
import "./playground.css";
import SplitScreen from "../TestFile";

const Playground = () => {
  const [groupCount, setGroupCount] = useState([
    { id: 0, isActiveGroup: true, view: "horizontal" },
  ]);
  const [activeGroup, setActiveGroup] = useState(1);
  const [tabId, setTabId] = useState(1);

  const addTabGroup = (id, mode) => {
    setTabId(id);
    const newTabId = groupCount[groupCount.length - 1].id + 1;
    const newTabs = groupCount.map((tab) => ({
      ...tab,
      isActive: false,
    }));
    setGroupCount([
      ...newTabs,
      {
        id: newTabId,
        isActiveGroup: true,
        view: mode,
        children: [],
      },
    ]);
    setActiveGroup(newTabId);
  };

  const switchGroup = (grpId) => {
    setActiveGroup(grpId);
    const updatedTabs = groupCount.map((tab) => ({
      ...tab,
      isActiveGroup: tab.id === grpId ? true : false,
    }));
    setGroupCount(updatedTabs);
  };
  useEffect(() => {
    console.log("groupCount", tabId);
  }, [tabId]);
  return (
    <>
      {/* <SplitScreen /> */}
      <div>
        <Split
          style={{
            height: 700,
            borderRadius: 3,
          }}
        >
          {groupCount.map((group, i) => {
            return (
              <>
                <div
                  style={{ minWidth: 20 }}
                  key={i}
                  className={`${groupCount.length > 1 ? "" : "w-100"}`}
                >
                  <Group
                    addTabGroup={addTabGroup}
                    tabId={tabId}
                    activeGroup={activeGroup}
                    groupIndex={i}
                  />
                </div>
              </>
            );
          })}
        </Split>
      </div>
    </>
  );
};

export default Playground;
