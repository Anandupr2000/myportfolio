import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description:"Title of the project",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
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
      name: "summary",
      title: "Summary",
      type: "string"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "string"
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
  ],
})
