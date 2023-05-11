import videoBg from "./videoBg.mp4";
import Header from "./Header";
import "./FrontPage.css";

function FrontPage() {
  return (
    <div className="lol">
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <div className="main-text">
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              paddingBottom: "30vh"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
              <div> لنتعرف أكثر عن</div>
              <div
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  background: "red",
                  borderRadius: "10px",
                  padding: "6px",
                }}
              >
                تونس
              </div>
            </div>
            <div>بلادنا المزيانة</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
