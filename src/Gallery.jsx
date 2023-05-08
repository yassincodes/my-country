import "./Gallery.css";
import ImageSlider from "./ImageSlider";

function Gallery() {
  return (
    <div className="Gallery_container" style={{ marginTop: "6vh" }}>
      <div className="Gallery_container_header">
        <div className="Gallery_container_header_header">معرض الصور</div>
      </div>
      {
        //     <div className="Gallery_container_header_message">
        //   <i>"😍 خلينا نتعرفوا على بلادنا المزيانة"</i>
        //  </div>
      }

      <ImageSlider />
    </div>
  );
}

export default Gallery;
