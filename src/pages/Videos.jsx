import Header from "../Header";

function Videos() {
  const array = [
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "الإتجاهات",
      id: "k2xVjFyXG-E",
    },
  ];
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
        {array.map((video) => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
            >
              <div style={{display: "flex", flexDirection: "row-reverse"}}>
                <img src={video.pic} style={{ width: "150px", borderRadius: "5px" }} />
                <div style={{marginRight: "10px", fontSize: "1.3em"}}>{video.title}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
