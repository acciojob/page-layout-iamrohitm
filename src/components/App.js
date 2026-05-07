
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
    let head = <h1>Welcome to my website</h1>
    let foot = <div>© 2023 My Website. All rights reserved</div>

    return (
      <div>
          {/* Do not remove the main div */}
          <PageLayout header={head} footer={foot}>This is the content of my Website</PageLayout>
      </div>
    )
}

export default App
