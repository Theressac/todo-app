export function Tabs(props) {
   const { todos } = props
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, indexkey) => {
        return (
          <button key={indexkey} className="tab-button">
            <h4>
              {tab} <span>(0)</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
