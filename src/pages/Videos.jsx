import Header from "../Header";

function Videos() {
  const array = [
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "الإتجاهات",
      link: "https://youtu.be/k2xVjFyXG-E",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "الخريطة",
      link: "https://youtu.be/I-SNYTSTNt4",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "القارات",
      link: "https://youtu.be/HXIIN8JFvjI",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "أغنية القارات و المحيطات",
      link: "https://youtu.be/EJLu6hCsjN4",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "تضاريس الأرض",
      link: "https://youtu.be/de5AqI1LcmM",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "بلدان العالم",
      link: "https://youtu.be/JWcL-J4ZVLg",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "تونس",
      link: "https://youtu.be/78JzQ2c3gEs",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "عين دراهم",
      link: "https://youtu.be/CqVtMZwWYCw",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "توزر",
      link: "https://youtu.be/UzidD5-La-k",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "زمبرة تونس",
      link: "https://youtu.be/LiCFzZ_AcTk",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "تستور شمال غربي مهرجان الرمان",
      link: "https://youtu.be/01bQoPP7MXs",
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
              href={video.link}
              target="_blank"
              style={{margin: "10px"}}
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
