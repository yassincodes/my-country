import Header from "../../Header";

function Lesson6() {
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
        66666666666666666666666
      </div>
    </div>
  );
}

export default Lesson6;
