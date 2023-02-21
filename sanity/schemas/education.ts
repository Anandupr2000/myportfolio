import { defineField, defineType } from 'sanity/lib/exports'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: "courseName",
      title: "Course Name",
      type: "string"
    },
    {
      name: "branchName",
      title: "Branch Name",
      type: "string",
    },
    {
      name: "instituteName",
      title: "Institution Name",
      type: "string",
    },
    {
      name: "percentage",
      title: "Percentage",
      type: "string"
    },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date"
    },
    {
      name: "isCurrentlyStuding",
      title: "is Currently Studing",
      type: "boolean"
    },
    {
      name: "certificates",
      title: "Certificates",
      type: "file",
    },
  ],
})
