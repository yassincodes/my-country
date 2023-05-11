import "./Footer.css";

function Footer() {
  function handleClick() {
    console.log("hi");
  }

  return (
    <div>
      <div>روابط مهمة</div>
      <div>
        <a href="https://www.youtube.com">YouTube</a>

        <a href="https://play.google.com/store">Play Store</a>

        <a href="#">Message</a>

        <a href="#">Phone</a>
      </div>
    </div>
  );
}

export default Footer;
