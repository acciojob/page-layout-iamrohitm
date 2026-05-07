import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {

  let header = <h1>Welcome to my website</h1>
  let footer = <div>© 2023 My Website. All rights reserved.</div>
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout header={header} footer={footer}>
         <p>This is the content of my website.</p>
        </PageLayout>
    </div>
  )
}

export default App