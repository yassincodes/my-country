import Header from "../Header";

function Videos() {
  // الصناعات التقليدية بالبلاد التونسية
  const array = [
    {
      pic: "https://i3.ytimg.com/vi/bcgfeqG739U/maxresdefault.jpg",
      title: "الصناعات التقليدية بالبلاد التونسية",
      link: "https://youtu.be/bcgfeqG739U",
    },
    {
      pic: "https://i3.ytimg.com/vi/k2xVjFyXG-E/maxresdefault.jpg",
      title: "الإتجاهات",
      link: "https://youtu.be/k2xVjFyXG-E",
    },
    {
      pic: "https://i3.ytimg.com/vi/I-SNYTSTNt4/maxresdefault.jpg",
      title: "الخريطة",
      link: "https://youtu.be/I-SNYTSTNt4",
    },
    {
      pic: "https://i3.ytimg.com/vi/HXIIN8JFvjI/maxresdefault.jpg",
      title: "القارات",
      link: "https://youtu.be/HXIIN8JFvjI",
    },
    {
      pic: "https://i3.ytimg.com/vi/EJLu6hCsjN4/maxresdefault.jpg",
      title: "أغنية القارات و المحيطات",
      link: "https://youtu.be/EJLu6hCsjN4",
    },
    {
      pic: "https://i3.ytimg.com/vi/de5AqI1LcmM/maxresdefault.jpg",
      title: "تضاريس الأرض",
      link: "https://youtu.be/de5AqI1LcmM",
    },
    {
      pic: "http://i3.ytimg.com/vi/JWcL-J4ZVLg/hqdefault.jpg",
      title: "بلدان العالم",
      link: "https://youtu.be/JWcL-J4ZVLg",
    },
    {
      pic: "https://i3.ytimg.com/vi/78JzQ2c3gEs/maxresdefault.jpg",
      title: "تونس",
      link: "https://youtu.be/78JzQ2c3gEs",
    },
    {
      pic: "https://i3.ytimg.com/vi/CqVtMZwWYCw/maxresdefault.jpg",
      title: "عين دراهم",
      link: "https://youtu.be/CqVtMZwWYCw",
    },
    {
      pic: "https://i3.ytimg.com/vi/UzidD5-La-k/maxresdefault.jpg",
      title: "توزر",
      link: "https://youtu.be/UzidD5-La-k",
    },
    {
      pic: "https://i3.ytimg.com/vi/LiCFzZ_AcTk/maxresdefault.jpg",
      title: "زمبرة تونس",
      link: "https://youtu.be/LiCFzZ_AcTk",
    },
    {
      pic: "http://i3.ytimg.com/vi/01bQoPP7MXs/hqdefault.jpg",
      title: "تستور شمال غربي مهرجان الرمان",
      link: "https://youtu.be/01bQoPP7MXs",
    },
    {
      pic: "http://i3.ytimg.com/vi/fAu_5D8tC30/hqdefault.jpg",
      title: "cap serrat بنزرت",
      link: "https://youtu.be/fAu_5D8tC30",
    },
    {
      pic: "https://i3.ytimg.com/vi/n7A8kQw_YLQ/maxresdefault.jpg",
      title: "تونس",
      link: "https://youtu.be/n7A8kQw_YLQ",
    },
    {
      pic: "http://i3.ytimg.com/vi/fbcB2XdM910/hqdefault.jpg",
      title: "الجنوب التونسي ",
      link: "https://youtu.be/fbcB2XdM910",
    },
    {
      pic: "http://i3.ytimg.com/vi/OtJVufo3IrA/hqdefault.jpg",
      title: "تونس",
      link: "https://youtu.be/OtJVufo3IrA",
    },
    {
      pic: "https://i3.ytimg.com/vi/JfLyz0cskU8/maxresdefault.jpg",
      title: "galite islands",
      link: "https://youtu.be/JfLyz0cskU8",
    },
    {
      pic: "https://i3.ytimg.com/vi/ZrCHDC3uZhg/maxresdefault.jpg",
      title: "القيروان",
      link: "https://youtu.be/ZrCHDC3uZhg",
    },
    {
      pic: "http://i3.ytimg.com/vi/MrwJz0uoERk/hqdefault.jpg",
      title: "تونس العاصمة",
      link: "https://youtu.be/MrwJz0uoERk",
    },
    {
      pic: "https://i3.ytimg.com/vi/HLqyXjqsyDQ/maxresdefault.jpg",
      title: "جالطة",
      link: "https://youtu.be/HLqyXjqsyDQ",
    },
    {
      pic: "https://i3.ytimg.com/vi/WOB4Gmqv82A/maxresdefault.jpg",
      title: "طبرقة",
      link: "https://youtu.be/WOB4Gmqv82A",
    },
    {
      pic: "http://i3.ytimg.com/vi/uyeXpLjqgxw/hqdefault.jpg",
      title: "بنزرت",
      link: "https://youtu.be/uyeXpLjqgxw",
    },
    {
      pic: "http://i3.ytimg.com/vi/JoOpZRlXJvc/hqdefault.jpg",
      title: "جندوبة",
      link: "https://youtu.be/JoOpZRlXJvc",
    },
    {
      pic: "https://i3.ytimg.com/vi/xKpNfEQQrWE/maxresdefault.jpg",
      title: "الكاف",
      link: "https://youtu.be/xKpNfEQQrWE",
    },
    {
      pic: "https://i3.ytimg.com/vi/FzpfP-_eC9k/maxresdefault.jpg",
      title: "الوطن القبلي",
      link: "https://youtu.be/FzpfP-_eC9k",
    },
    {
      pic: "https://i3.ytimg.com/vi/HAdhrrb-W20/maxresdefault.jpg",
      title: "جربة",
      link: "https://youtu.be/HAdhrrb-W20",
    },
    {
      pic: "https://i3.ytimg.com/vi/bTJoyAVhJQU/maxresdefault.jpg",
      title: "زغوان",
      link: "https://youtu.be/bTJoyAVhJQU",
    },
    {
      pic: "https://i3.ytimg.com/vi/mopkKdhynVc/maxresdefault.jpg",
      title: "عين دراهم",
      link: "https://youtu.be/mopkKdhynVc",
    },
    {
      pic: "https://i3.ytimg.com/vi/j015LoL4Xd0/maxresdefault.jpg",
      title: "تونس",
      link: "https://youtu.be/j015LoL4Xd0",
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
      <div
        style={{
          textAlign: "right",
          padding: "10vh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {array.map((video) => {
          return (
            <a
              href={video.link}
              target="_blank"
              style={{
                margin: "10px",
                fontSize: "1.5em",
                display: "block",
                paddingTop: "10vh"
              }}
            >
              <div
                style={{
                  borderRadius: "5px",
                }}
              >
                <img src={video.pic} style={{ width: "100%" }} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-player-play"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 4v16l13 -8z" />
                </svg>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  fontSize: "1.3em",
                }}
              >
                {video.title}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Videos;

// drous bl alwan + GIF
// videos like youtube
