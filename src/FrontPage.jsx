import videoBg from "./videoBg.mp4";
import Header from "./Header";

function FrontPage() {
  return (
    <>
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
              height: "90vh",
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
    </>
  );
}

export default FrontPage