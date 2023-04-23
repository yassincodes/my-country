import "./Footer.css";

function Footer() {
  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mail"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-phone"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );

  const linkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-link"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
    </svg>
  );

  return (
    <div className="Footer_container">
      <div className="Footer_container_1">
        <div className="Footer_container_1_header">إتصل بنا</div>
        <div className="Footer_container_1_email_section">
          <div>{emailIcon}</div>
          <div>knowyourcountry@gmail.com</div>
        </div>
        <div className="Footer_container_1_phone_section">
          <div>{phoneIcon}</div>
          <div>+216 XX XXX XXX</div>
        </div>
      </div>
      <div className="Footer_container_2">
        <div className="Footer_container_2_header">إستعمل تطبيقنا</div>
        <div className="Footer_container_2_about_section">
          تطبيق "إعرف بلادك" هو تطبيق مخصص لمساعدة التلاميذ في إختبار معرفتهم
          حول البلاد التونسية, بإمكانك تحميل التطبيق على الهاتف من هنا
        </div>
        <div className="Footer_container_2_link_section">
          <div>{linkIcon}</div>
          <div>رابط التحميل</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
