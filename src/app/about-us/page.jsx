"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">About NorthStory</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full space-y-2">
            {/* 1. What is NorthStory? */}
            <AccordionItem value="item-1">
              <AccordionTrigger>📘 What is NorthStory?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  <strong>NorthStory</strong> is a collaborative digital storytelling platform designed
                  to foster social learning and support among students who have been evacuated due to war.
                </p>
                <p className="mb-2">
                  It helps students process their experiences through guided narrative creation, staying
                  academically and emotionally engaged.
                </p>
                <p className="mb-2">
                  NorthStory combines social interaction, learning tools, and emotional support in a safe,
                  vibrant online space.
                </p>
                <Separator className="my-4" />
                <p className="font-semibold">What Can You Do in NorthStory?</p>

                <Accordion type="multiple" className="mt-4 space-y-1">
                  <AccordionItem value="nested-1">
                    <AccordionTrigger>📝 Study and Fun Chat Modes</AccordionTrigger>
                    <AccordionContent>
                      <p><strong>Study Mode:</strong> Discuss academic topics and collaborate with peers.</p>
                      <p><strong>Fun Mode:</strong> Share memes, jokes, and uplifting content.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nested-2">
                    <AccordionTrigger>🎮 Game Zone</AccordionTrigger>
                    <AccordionContent>
                      <p><strong>Tic Tac Toe:</strong> Simple game to challenge friends.</p>
                      <p><strong>Quick CS Quiz:</strong> Test your coding knowledge interactively.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nested-3">
                    <AccordionTrigger>🧠 Study Groups</AccordionTrigger>
                    <AccordionContent>
                      <p>Join topic-focused study groups like Math or Programming.</p>
                      <p>Share resources and work together in moderated environments.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nested-4">
                    <AccordionTrigger>🌞 Daily Uplift</AccordionTrigger>
                    <AccordionContent>
                      <p>Get a daily motivational quote to keep your spirit up.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nested-5">
                    <AccordionTrigger>✍️ Anonymous Journaling</AccordionTrigger>
                    <AccordionContent>
                      <p>Write your thoughts safely and privately to promote mental well-being.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nested-6">
                    <AccordionTrigger>🌐 Social Media-Style Feed</AccordionTrigger>
                    <AccordionContent>
                      <p>Post updates, stories, and engage with peers like on social media.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Who is it for? */}
            <AccordionItem value="item-2">
              <AccordionTrigger>🎯 Who is NorthStory for?</AccordionTrigger>
              <AccordionContent>
                <p>NorthStory is for high school and university students affected by war and evacuation.</p>
                <p>It provides:</p>
                <ul className="list-disc pl-5">
                  <li>👥 Social connection</li>
                  <li>📚 Academic support</li>
                  <li>💖 Emotional well-being</li>
                </ul>
                <p>Mentors and educators can also use it to support student engagement.</p>
              </AccordionContent>
            </AccordionItem>

            {/* 3. Who made it? */}
            <AccordionItem value="item-3">
              <AccordionTrigger>👩‍💻 Who is behind NorthStory?</AccordionTrigger>
              <AccordionContent>
                <p>💻 Developed by Web Course Team 19:</p>
                <p>🚀 Shlomi, Alex, Eitan, Noy, Yovel, Shahar</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}
