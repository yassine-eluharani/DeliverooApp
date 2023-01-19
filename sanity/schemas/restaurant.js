import {defineType} from 'sanity'
export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title:"Restaurant name",
      validation: (Rule)=> Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title:"Short Description",
      validation: (Rule)=> Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title:"Image of Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title:"Latitude",
    },
    {
      name: "long",
      type: "number",
      title:"Longitude",  
    },
    {
      name: "address",
      type: "string",
      title:"Restaurant address",
      validation: (Rule)=> Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title:"Enter a Rating from (1-5)",
      validation: (Rule)=> Rule.required().max(5).min(1).error("Please enter a Value between 1 and 5"),
    },  
    {
      name: "type",
      title:"Category",
      type: "reference",
      validation: (Rule)=> Rule.required(),
      to: [{type: "category"}]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type: "reference", to:[{type: "dish"}] }]
    },
  ]
})
