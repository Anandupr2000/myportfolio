import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "jobTitle",
      type: "string"
    },
    {
      name: "companyImg",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "companyName",
      title: "CompanyName",
      type: "string"
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "string"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "string"
    },
    {
      name: "isCurrentlyWorking",
      title: "IsCurrentlyWorking",
      type: "boolean"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }]
    },
  ],
})
