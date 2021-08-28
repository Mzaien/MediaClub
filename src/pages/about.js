import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="عن النادي" />
      <h1>عن النادي</h1>
      <br />
      <section style={{ fontWeight: "bolder", fontSize: "1.55rem" }}>
        النادي الإعلامي هو نادي طلابي تابع لجامعة الملك فهد للبترول والمعادن
        يهدف إلى خلق بيئة إعلامية تخدم الطلاب على الصعيد الأول، ومن ثم الجامعة
        والمجتمع، ويركز على مجالات الإعلام المتنوعة. أبرز أعمال النادي المقدمة
        للطلاب والمجتمع توجد في منصتي إذاعة البترول والجبل شو. إذاعة البترول هي
        محطة إذاعية من إنتاج النادي الإعلامي وتهدف إلى إثراء ساحة البودكاست بعدد
        من البرامج. ومنصة الجبل شو هي المنصة المختصة بالبرامج المرئية المختلفة.
      </section>
    </Layout>
  )
}

export default AboutPage
