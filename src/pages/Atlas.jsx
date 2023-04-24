import Header from "../Header";

function Atlas() {
  return (
    <div>
      <div>
        <Header
          menuColorProp={{ color: "black" }}
          styleProp={{
            color: "black",
            backdropFilter: "blur",
            transition: "all 0.3s ease-out",
            position: "fixed",
            background: "#ffffff88",
            borderBottom: "1px solid #11111111",
          }}
        />
      </div>
      <div style={{ textAlign: "right", padding: "10vh" }}>
      الأطلس مازال قيد البناء
      ⏳🚧
      </div>
    </div>
  );
}

export default Atlas;
