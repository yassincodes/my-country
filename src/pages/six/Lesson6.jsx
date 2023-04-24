import Header from "../../Header";
import Image1 from "../../assets/lesson6/Image1.jpg";
import Image2 from "../../assets/lesson6/Image2.jpg";
import Image3 from "../../assets/lesson6/Image3.jpg";
import Image4 from "../../assets/lesson6/Image4.jpg";
import Image5 from "../../assets/lesson6/Image5.png";
import Image6 from "../../assets/lesson6/Image6.jpg";
import Image7 from "../../assets/lesson6/Image7.jpg";
import Image8 from "../../assets/lesson6/Image8.jpg";
import Image9 from "../../assets/lesson6/Image9.jpg";
import Image10 from "../../assets/lesson6/Image10.jpg";

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
      <div
        dir="rtl"
        style={{ textAlign: "right", padding: "50px", fontSize: "1.3em" }}
      >
        <h2 style={{ textAlign: "center", fontSize: "1.5em", margin: "20px" }}>
          <strong>الدّرس السّادس: </strong>
          <strong>
            التّوزّع الجغرافي للصّناعة التّونسيّة وتطوّر أهمّ منتجاتها
          </strong>
        </h2>
        <p>
          تعتبر الصّناعة من أهمّ القطاعات بالبلاد التّونسيّة حيث نجد عددا محترما
          من المؤسسات الصناعية وخاصة الصغرى منها والتي توفّر مئات الآلاف من
          مواطن الشّغل.
        </p>
        <img src={Image1} style={{ margin: "10px" }} />
        <p>
          تنشط الصناعات التونسية في فروع عديدة ومتنوعة أهمها: صناعة النسيج
          والجلد التي توفر ‬‎ ‎‫200000 موطن شغل و40 بالمائة من حجم الصادرات.‬
        </p>
        <div>
          <img src={Image2} style={{ margin: "10px" }} />
          <img src={Image3} style={{ margin: "10px" }} />
        </div>
        <p>كما أن لها تأثيرا كبيرا في اقتصاد البلاد من حيث:</p>
        <ul>
          <li>توفير مواطن شغل</li>
          <li>توفير العملة الصعبة</li>
          <li>الحدّ من التبعية الاقتصاديّة</li>
        </ul>
        <table
          style={{
            margin: "10px",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          <tbody>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>صنف الصناعة</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>المصنوعات</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>آلية كهربائية</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الفولاذ، تركيب الحافلات، أجهزة التلفزة والراديو والثلاجات</p>
              </td>
            </tr>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>كيماوية</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>تكرير النقط، تحويل الفسفاط، الأسمدة الكيماوية، الأدوية</p>
              </td>
            </tr>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>مواد البناء</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>اسمنت، جير، آجر، جليز، جليز مطلي</p>
              </td>
            </tr>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>صناعات غذائية</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  زيت الزيتون، مصبرات الخضر والغلال، الحليب ومشتقاته، المياه
                  المعدنية
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>صناعات غذائية</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  زيت الزيتون، مصبرات الخضر والغلال، الحليب ومشتقاته، المياه
                  المعدنية
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="158"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>صناعات غذائية</strong>
                </p>
              </td>
              <td
                width="456"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  زيت الزيتون، مصبرات الخضر والغلال، الحليب ومشتقاته، المياه
                  المعدنية
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            الصناعات الثقيلة كصناعة السّفن والطائرات والحديد... هي صناعات محدودة
            لعدم وجود المواد الأولية الكافية والحاجة إلى تمويلات كبيرة&lrm;
            &lrm;‫وصغر حجم السوق المستهلكة للمصنوعات.
          </li>
          <img src={Image4} style={{ margin: "10px" }} />
        </ul>
        <ul>
          <li>
            قطاع الصناعات التقليدية عريق ومتنوع ومنتشر وقد ساعدت السياحة على
            انتعاشه فأصبح &lrm;&lrm;‫يوفر 150000 موطن شغل ودخلا سنويا قدره 100
            مليون دينار من العملة الصعبة<strong>&lrm;</strong>
          </li>
        </ul>
        <table
          style={{
            margin: "10px",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          <tbody>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>أهم الصناعات</strong>
                </p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>الجهات المشهورة بها</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الزربية</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>القيروان/ بنزرت</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>المرقوم</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>بنزرت/ وذرف/ القيروان</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الأغطية الصوفية والمزركشة</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>جربة/ وذرف/ قفصة</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>النحاس والجلد والخشب</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>تونس/ القيروان/ صفاقس</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الخزف</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>نابل/ جربة</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الحلي التقليدي</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>تونس/ المكنين/ جربة</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          النشاط الصناعي التونسي مركز في الأقاليم الساحلية الشرقية وهذا التوزع
          الجغرافي غير‬‎ ‎‫المتوازن يرجع إلى عوامل طبيعية وتاريخية وتجارية وله
          انعكاسات سلبية تتمثل في: ‬‎ ‎‫حركة السكان‬‎ ‎‫عدم التوازن الاقتصادي
          بين الجهات وتلوث المحيط‬‎‬‬‬{" "}
        </p>

        <table
          style={{
            margin: "10px",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          <tbody>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong> المناطق</strong>
                </p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>
                  <strong>الصناعات المهيمنة</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>إقليم تونس</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>صناعات متنوعة</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الساحل</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>النسيج</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>صفاقس</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>صناعات كيماوية متنوعة </p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>بنزرت منزل بورقيبة</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الفولاذ وتكرير النفط</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>قابس</p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>صناعات كيماوية</p>
              </td>
            </tr>
            <tr>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>الوطن القبلي </p>
              </td>
              <td
                width="307"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                <p>صناعات غذائية متنوعة</p>
              </td>
            </tr>
          </tbody>
        </table>
        <img src={Image5} style={{ margin: "20px" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridGap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={Image6}
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              صناعة مواد البناء
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={Image7}
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              صناعة المواد الغذائية
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={Image8}
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>صناعة الورق</p>
          </div>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={Image9}
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>صناعة النسيج</p>
          </div>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={Image10}
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              صناعة الفولاذ
            </p>
          </div>
        </div>
        <a
          href="https://play.makeit.app?code=658158"
          style={{ background: "cornflowerblue", color: "white", display: "flex", borderRadius: "10px", marginTop: "25px" }}
        >
          تمرين تطبيقي
        </a>
      </div>
    </div>
  );
}

export default Lesson6;
