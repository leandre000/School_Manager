"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-center text-[#0099ff] text-3xl font-bold mb-12">GET IN TOUCH</h2>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="general" className="bg-[#0099ff] text-white data-[state=active]:bg-[#0099ff]">
            General Inquiries
          </TabsTrigger>
          <TabsTrigger value="partner">Partner Inquiries</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
            <Textarea
              placeholder="Message"
              className="min-h-[200px]"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="flex justify-center">
              <Button type="submit" className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-8">
                Send
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="partner">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
            <Textarea
              placeholder="Message"
              className="min-h-[200px]"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="flex justify-center">
              <Button type="submit" className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-8">
                Send
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
