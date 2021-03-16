/**
 * This file is used in both React components and gatsby-node file. It should use CommonJS syntax to avoid node.js support issues.
 */

const links = [
  {
    name: "إذاعة البترول",
    dest: "/إذاعة-البترول",
    subLinks: [
      {
        name: "سجلات",
        dest: "سجلات",
      },
      {
        name: "بترولي",
        dest: "بترولي",
      },
      {
        name: "ساندويتش",
        dest: "ساندويتش",
      },
      {
        name: "قصيد الفهد",
        dest: "قصيد-الفهد",
      },
      {
        name: "هنيهة",
        dest: "هنيهة",
      },
      {
        name: "قرآن",
        dest: "قرآن",
      },
    ],
  },
  {
    name: "الجبل شو",
    dest: "/الجبل-شو",
  },
  {
    name: "نشرة البترول",
    dest: "/نشرة-البترول",
  },
  {
    name: "ديوان الفهد",
    dest: "/ديوان-الفهد",
  },
]

module.exports = links
