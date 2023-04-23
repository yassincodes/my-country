import Header from "../Header";
import { Link } from "react-router-dom";

function Five() {
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
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-1">الدرس الأول</Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-2">الدرس الثاني</Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-3">الدرس الثالث</Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-4">الدرس الرابع</Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-5">الدرس الخامس</Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-6">
            الدّرس السّادس: التّوزّع الجغرافي للصّناعة التّونسيّة وتطوّر أهمّ
            منتجاتها
          </Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-7">الدرس السابع</Link>
        </div>
        <div style={{ margin: "20px" }}>
          <Link to="/5/lesson-8">الدرس الثامن</Link>
        </div>
      </div>
    </div>
  );
}

export default Five;
