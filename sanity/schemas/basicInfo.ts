import { defineField, defineType } from 'sanity/lib/exports'

export default defineType({
  name: 'basicInfo',
  title: 'Basic Info',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "heroImg",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string"
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }]
    },
  ],
})
