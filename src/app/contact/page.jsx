"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const contacts = [
    {
      title: "מוקד המל\"ג - מלחמת חרבות ברזל",
      description: [
        "מרכז התמיכה של המל\"ג לסיוע סטודנטים משרתי מילואים",
        "ולסטודנטים נפגעי מלחמת חרבות ברזל",
      ],
      link: "https://che.org.il/moked/",
      image: "/mlgImage.jpg",
    },
    {
      title: 'ער"ן: עזרה ראשונה נפשית אנונימית',
      description: [
        "עמותת ער\"ן מספקת סיוע הומניטרי",
        "ומעניקה עזרה ראשונה נפשית מצילה חיים בטלפון ובאינטרנט",
      ],
      link: "https://www.eran.org.il/",
      image: "/aran.png",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Student Aid & Support</h1>

      <div className="flex flex-col gap-6">
        {contacts.map((contact, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition">
            <Link href={contact.link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-64 md:h-auto">
                  <Image
                    src={contact.image}
                    alt="contact image"
                    fill
                    className="object-cover md:rounded-l-md"
                    sizes="100vw"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-4">
                  <h2 className="text-xl font-semibold text-primary">{contact.title}</h2>
                  {contact.description.map((line, j) => (
                    <p key={j} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </CardContent>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}
