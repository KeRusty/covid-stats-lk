import React from "react";
import { PageHeader } from "antd";

// styles
import "./NavBar.scss";

function NavBar({ subTitle }: { subTitle: string }) {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        backIcon={false}
        title="Covid Tracker"
        subTitle={subTitle ?? ""}
        ghost={true}
      />
    </div>
  );
}

export default NavBar;
