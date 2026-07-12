/* Project category */ 
export const CATEGORIES = [
  {title: 'App', value: 'app'},
  {title: 'AI-assisted tool', value: 'ai-tool'},
  {title: 'Digital tool', value: 'digital-tool'},
  {title: 'Graphic design', value: 'graphic-design'},
  {title: 'System interface', value: 'system-interface'},
  {title: 'Website', value: 'website'},
  {title: 'Web application', value: 'web-application'},
]

export const categoryLabel = {}

for (const { value, title } of CATEGORIES) {
  categoryLabel[value] = title
}

/* Tpe of project */
export const TYPES = [
  {title: 'Studio course', value: 'studio'},
  {title: 'Personal project', value: 'personal'},
  {title: 'Summer internship', value: 'internship'},
  {title: 'Client project', value: 'client'},
  {title: 'Other', value: 'other'},
]

export const typeLabel = {}

for (const { value, title } of TYPES) {
  typeLabel[value] = title
}